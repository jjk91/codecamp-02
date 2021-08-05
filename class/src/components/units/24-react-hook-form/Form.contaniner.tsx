import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { LOGIN_USER } from "./Form.queries";
import FormUi from "./Form.presenter";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Form.validation";

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onClickSubmit(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result.data.loginUser.accessToken);
      Modal.info({ content: "로그인 완료" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <>
      <FormUi
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmit={onClickSubmit}
        isActive={formState.isValid}
        errors={formState.errors}
      />
    </>
  );
}
