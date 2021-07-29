import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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
export default function ImagePreviewPage() {
  const [file, setFile] = useState();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일은 5MB 보다 작아야합니다");
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("잘못된 파일형식 입니다");
      return;
    }

    // 단지 미리보기 작업만 진행
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result); // 임시주소
      setFile(file);
    };
  };

  const onClickSubmit = async () => {
    // 1. 파일 먼저 업로드
    // 2. 받아온 URL과 writer, title 이런애들 합쳐서 게시물 등록

    try {
      const resultFiles = await Promise.all([
        uploadFile({ variables: { file: file1 } }),
        uploadFile({ variables: { file: file2 } }),
        uploadFile({ variables: { file: file3 } }),
      ]);
      // const image1 = resultFiles[0].data.uploadFile.url;
      // const image2 = resultFiles[1].data.uploadFile.url;
      // const image3 = resultFiles[2].data.uploadFile.url;

      const images = resultFiles.map((data) => data.data.uploadFile.url); // [1번url,2번url,3번url]

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: images,
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("등록 완료");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="password" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />

      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />

      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물 등록</button>
    </>
  );
}
