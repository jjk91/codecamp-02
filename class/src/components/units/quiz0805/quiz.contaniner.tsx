import { useMutation } from "@apollo/client";
import QuizPageUi from "./quiz.presenter";
import { CREATE_BOARD } from "./quiz.queries";
import { Modal } from "antd";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function QuizPage() {
  const schema = yup.object().shape({
    writer: yup
      .string()
      .min(1)
      .max(5, "5자 까지 가능합니다.")
      .required("필수 입력값입니다."),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{1,8})/,
      //   "8자 이하인 대,소문자,숫자,특수문자로 입력해야합니다"
      // )
      .required("필수 입력값입니다."),
    title: yup
      .string()
      .min(1)
      .max(100, "제목은 최대 100자 까지 입력 가능합니다.")
      .required("필수 입력값입니다."),
    contents: yup
      .string()
      .min(1)
      .max(1000, "내용은 최대 1000자 까지 입력 가능합니다.")
      .required("필수 입력값입니다."),
  });

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  async function onSubmit(data) {
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
      console.log(result.data.createBoard._id);
      Modal.info({ content: "등록 완료!!!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <>
      <QuizPageUi
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
      />
    </>
  );
}
