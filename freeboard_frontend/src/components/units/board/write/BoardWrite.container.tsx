import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUi from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
  UPLOAD_FILE,
} from "./BoardWrite.queries";
import {
  IBoardWriteContainerProps,
  newInputsTypes,
  INewInputs,
} from "./BoardWrite.types";
import { IQuery } from "../../../../commons/types/generated/types";
import { Modal } from "antd";

interface InputTypes {
  writer?: string | null;
  password: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

const InputInit: InputTypes = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};
// @ts-ignore

export default function BoardWrite(props: IBoardWriteContainerProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(InputInit);
  const [disabled, setdisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [files, setFiles] = useState([]);

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createboard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onComplete(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
  }

  function onClickModal() {
    setIsOpen(true);
  }

  function onOk() {
    setIsOpen(false);
  }

  function onChangAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  const { data } = useQuery<Pick<IQuery, "fetchBoard"> | undefined>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  useEffect(() => {
    if (data?.fetchBoard) {
      // @ts-ignore
      setFiles(data?.fetchBoard?.images);
      console.log(data);
      setInputs({
        ...inputs,
        // eslint-disable-next-line no-useless-computed-key
        ["contents"]: data?.fetchBoard?.contents,
      });
      setZipcode(data.fetchBoard.boardAddress?.zipcode || "");
      setAddress(data.fetchBoard.boardAddress?.address || "");
      setAddressDetail(data.fetchBoard.boardAddress?.addressDetail || "");
    }
  }, [data]);

  // useEffect(() => {
  //   if (props.isEdit && data?.fetchBoard?.images) {
  //     setFiles(data?.fetchBoard?.images);
  //   }
  // }, []);
  // .slice(0, Object.values(newInputs).length - 1)
  function checkInputs(newInputs: any) {
    let able = false;

    Object.values(newInputs !== null ? newInputs : inputs).filter(
      // eslint-disable-next-line array-callback-return
      (data, idx) => {
        if (idx !== 4) {
          if (!data) {
            able = true;
          }
        }
      }
    );

    return able;
  }

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs: newInputsTypes = {
      ...inputs,
      [event.target.name]: event.target.value,
    };

    if (props.isEdit) {
      newInputs.writer = data?.fetchBoard.writer;
    }

    setInputs(newInputs);
    // if(newInputs.title || newInputs.contents) {
    setdisabled(checkInputs(newInputs));
    // console.log(newInputs);
    // }

    // if(Object.values(newInputs).every(data => data)){
    //   setdisabled(false)
    // }
  }

  function onChangeContents(value: any) {
    const isBlank = "<p><br></p>";
    const newInputs = { ...inputs, contents: value === isBlank ? "" : value };

    setInputs(newInputs);
    setdisabled(checkInputs(newInputs));
  }

  async function onClickSubmit() {
    if (checkInputs(null) === false) {
      try {
        const resultFile = await Promise.all(
          files.map((data) => uploadFile({ variables: { file: data } }))
        );
        const newImages = resultFile.map((el) => el.data.uploadFile.url);
        // const images = resultFile.map((data) =>
        //   uploadFile({ variables: { file: data } })
        // );
        const result = await createboard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              images: newImages,
              //  resultFile.map((el) => el.data.uploadFile.url),
            },
          },
        });
        Modal.success({
          title: "????????????",
          content: "???????????? ?????? ???????????????.",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  }

  async function onClickUpdate() {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;

    // const newFiles: Array<File> = files.filter((data) => data !== undefined);
    // console.log(newFiles, "????????????"); // ?????? ????????? ?????? ??????
    // console.log(files); // 3?????? ????????? ?????? ????????? ????????? ????????? ?????? empty

    const resultFile = await Promise.all(
      files.map((data) =>
        typeof data !== "string"
          ? uploadFile({ variables: { file: data } })
          : data
      )
    );
    const uploadData = resultFile.map((el) =>
      el.data?.uploadFile?.url ? el.data?.uploadFile?.url : el
    );

    if (Object.values(newInputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId, // router??? ??????
            password: inputs.password, // inputs??? ????????? password
            updateBoardInput: {
              ...newInputs,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              images: uploadData,
            },
          },
        });
        Modal.info({
          title: "????????????",
          content: "???????????? ?????? ?????????.",
        });
        router.push(`/boards/${result.data.updateBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  }

  async function onClickList() {
    try {
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({ content: error.massage });
    }
  }

  function onChangeFile(file: string, index: number) {
    const newFiles = [...files];

    // @ts-ignore
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <BoardWriteUi
      address={address}
      addressDetail={addressDetail}
      zipcode={zipcode}
      isOpen={isOpen}
      onOk={onOk}
      onChangAddressDetail={onChangAddressDetail}
      onComplete={onComplete}
      onClickModal={onClickModal}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      // @ts-ignore
      onChangeFile={onChangeFile}
      // @ts-ignore
      onChangeContents={onChangeContents}
      disabled={disabled}
      isEdit={props.isEdit}
      // @ts-ignore
      data={data}
      contents={inputs.contents}
    />
  );
}
