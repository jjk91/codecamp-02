import { useState, ChangeEvent } from "react";
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
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);
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
    console.log(newInputs);
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
          title: "등록확인",
          content: "게시물이 등록 되었습니다.",
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

    const newFiles: Array<File> = files.filter((data) => data !== undefined);

    // console.log(files);
    await Promise.all(
      newFiles.map((data) => uploadFile({ variables: { file: data } }))
    );
    const fetchBoardImages = data?.fetchBoard.images || [];

    if (Object.values(newInputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId, // router은 주소
            password: inputs.password, // inputs에 입력된 password
            updateBoardInput: {
              ...newInputs,
              images: [...fetchBoardImages],
            },
          },
        });
        Modal.info({
          title: "수정확인",
          content: "게시물을 수정 합니다.",
        });
        router.push(`/boards/${result.data.updateBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.massage });
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

  // function onChangeFileUrls(fileUrl: string, index: number) {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // }

  function onChangeFile(file: string, index: number) {
    const newFiles = [...files];
    // @ts-ignore
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <BoardWriteUi
      address={address}
      zipcode={zipcode}
      isOpen={isOpen}
      // files={files} // 이미지 업로드
      onOk={onOk}
      onChangAddressDetail={onChangAddressDetail}
      onComplete={onComplete}
      onClickModal={onClickModal}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      // onChangeFileUrls={onChangeFileUrls} // 이미지 업로드
      // @ts-ignore
      onChangeFile={onChangeFile}
      // @ts-ignore
      onChangeContents={onChangeContents}
      disabled={disabled}
      isEdit={props.isEdit}
      // @ts-ignore
      data={data}
    />
  );
}
