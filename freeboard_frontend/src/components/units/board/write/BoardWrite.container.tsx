import { useRef, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUi from "./BoardWrite.presnter";
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
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { Writer } from "../detail/BoardDetail.style";

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

export default function BoardWrite(props: IBoardWriteContainerProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(InputInit);
  const [disabled, setdisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [board] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);

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

  const { data } = useQuery<IQuery, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  function checkInputs(newInputs: any) {
    let able = false;
    Object.values(newInputs !== null ? newInputs : inputs)
      // .slice(0, Object.values(newInputs).length - 1)
      .filter((data, idx) => {
        if (idx !== 4) {
          if (!data) {
            able = true;
          }
        }
      });

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
    // }

    // if(Object.values(newInputs).every(data => data)){
    //   setdisabled(false)
    // }
  }

  async function onClickSubmit() {
    console.log(zipcode, typeof zipcode);
    // if(Object.values(inputs).every(data => data)  ){
    if (checkInputs(null) === false) {
      try {
        const result = await board({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        console.log(inputs);
        Modal.success({
          title: "등록확인",
          content: "게시물이 등록 되었습니다.",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error(error.massage);
      }
    }
    // }
  }

  async function onClickUpdate() {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;

    if (Object.values(newInputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId, // router은 주소
            password: inputs.password, // inputs에 입력된 password
            updateBoardInput: { ...newInputs },
          },
        });
        Modal.info({
          title: "수정확인",
          content: "게시물을 수정 합니다.",
        });
        router.push(`/boards/${result.data.updateBoard._id}`);
      } catch (error) {
        Modal.error(error.massage);
      }
    }
  }

  async function onClickList() {
    try {
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error(error.massage);
    }
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    // if (!file?.size) {
    //   alert("파일이 없습니다.");
    // }
    // if (file?.size > 5 * 1024 * 1024) {
    //   alert("파일 사이즈가 너무 큽니다.(제한:5MB)");
    // }
    // if (file?.type.includes("png") && file?.type.includes("jpeg")) {
    //   alert("png 또는 jpeg 파일만 등록 가능합니다.");
    // }

    try {
      const result = await uploadFile({
        variables: {
          file: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickImg() {
    fileRef.current?.click();
  }

  return (
    <BoardWriteUi
      imageUrl={imageUrl}
      fileRef={fileRef}
      address={address}
      zipcode={zipcode}
      isOpen={isOpen}
      onClickImg={onClickImg}
      onChangeFile={onChangeFile}
      onOk={onOk}
      onChangAddressDetail={onChangAddressDetail}
      onComplete={onComplete}
      onClickModal={onClickModal}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      disabled={disabled}
      isEdit={props.isEdit}
      data={data}
    />
  );
}
