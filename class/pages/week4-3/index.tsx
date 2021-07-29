import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  InputWrapper,
  InputWriter,
  InputPassword,
  InputTitle,
  InputContents,
  InputImageRef,
  InputImage,
  Submit,
} from "./index.styled";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function UploadFilePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다.(제한:5MB)");
      return;
    }
    if (file?.type.includes("png") && file?.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 업로드 가능합니다.");
    }

    try {
      const result = await uploadFile({
        variables: {
          file: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      console.log(error.message);
    }
  }

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imageUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
    } catch (error) {
      console.log(error.message);
    }
  }
  function onClickImg() {
    fileRef.current?.click();
  }

  return (
    <>
      <InputWrapper>
        작성자: <InputWriter type="text" onChange={onChangeWriter} />
        비밀번호: <InputPassword type="password" onChange={onChangePassword} />
        제목: <InputTitle type="text" onChange={onChangeTitle} />
        내용: <InputContents type="text" onChange={onChangeContents} />
        <InputImageRef ref={fileRef} type="file" onChange={onChangeFile} />
        <InputImage
          onClick={onClickImg}
          src={`https://storage.googleapis.com/${imageUrl}`}
        />
        <Submit onClick={onClickSubmit}>게시물 등록</Submit>
      </InputWrapper>
    </>
  );
}
