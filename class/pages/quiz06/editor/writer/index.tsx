import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WriterPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const onClickSumbit = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      Modal.success({ content: "등록완료" });
      console.log(result.data.createBoard._id);
      router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeInput = (value) => {
    setValue("contents", value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSumbit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용: <ReactQuill onChange={onChangeInput} />
        <br />
        <button type="submit">게시물 등록</button>
        <br />
      </form>
    </>
  );
}
