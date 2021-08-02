import { useMutation } from "@apollo/client";
import { useState } from "react";
import LoginPageUi from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export const inputInit = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [inputs, setInputs] = useState(inputInit);
  const [inputsErrors, setInputsErrors] = useState(inputInit);

  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeLoginInput(event) {
    const newInputs = {
      ...inputs,
      [event.target.value]: event.target.valut,
    };
    setInputs(newInputs);
  }

  async function onClickLogin() {
    setInputsErrors({
      email: inputs.email ? "" : "이메일을 입력해주세요",
      password: inputs.password ? "" : "이메일을 입력해주세요",
    });

    const result = await loginUser({
      variables: { email: inputs.email, password: inputs.password },
    });
  }

  return (
    <>
      <LoginPageUi onChangeLoginInput={onChangeLoginInput} />
    </>
  );
}
