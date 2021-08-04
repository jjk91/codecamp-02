import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext } from "react";
import { ChangeEvent, useState } from "react";
import LoginUi from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export const inputInit = {
  email: "",
  password: "",
};

interface IContext {
  onChangeLoginInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin?: () => void;
  onClickSignUp?: () => void;
}

export const Logincontext = createContext<IContext>({});

export default function Login() {
  const value = {
    onChangeLoginInput: onChangeLoginInput,
    onClickLogin: onClickLogin,
    onClickSignUp: onClickSignUp,
  };
  const router = useRouter();
  const [inputs, setInputs] = useState(inputInit);
  const [inputsErrors, setInputsErrors] = useState(inputInit);

  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeLoginInput(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickLogin() {
    setInputsErrors({
      email: inputs.email ? "" : "이메일을 입력해주세요",
      password: inputs.password ? "" : "이메일을 입력해주세요",
    });
    try {
      const result = await loginUser({
        variables: { email: inputs.email, password: inputs.password },
      });
      console.log(result.data.loginUserInput.accessToken);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickSignUp() {
    router.push("/boards/signUp");
  }

  return (
    <>
      <Logincontext.Provider value={value}>
        <LoginUi />
      </Logincontext.Provider>
    </>
  );
}