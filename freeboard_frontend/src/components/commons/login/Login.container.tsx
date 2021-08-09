import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { createContext } from "react";
import { ChangeEvent, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LoginUi from "./Login.presenter";
import { FETCH_USER_LOGGENT_IN, LOGIN_USER } from "./Login.queries";

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
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const clinet = useApolloClient();
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
      const resultUser = await clinet.query({
        query: FETCH_USER_LOGGENT_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);

      localStorage.setItem("key", result.data.loginUser.accessToken || "");

      console.log(result.data.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      alert("로그인되었습니다.");
      router.push("/usedMarket/new");
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
