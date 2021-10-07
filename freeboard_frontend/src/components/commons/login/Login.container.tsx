import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  useContext,
  createContext,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
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
export default function Login(props: any) {
  useEffect(() => {
    if (props.setLayout) {
      props.setLayout(true);
    }
  }, [props.setLayout]);

  const value = {
    onChangeLoginInput: onChangeLoginInput,
    onClickLogin: onClickLogin,
    onClickSignUp: onClickSignUp,
  };
  const router = useRouter();
  const [inputs, setInputs] = useState(inputInit);
  const [inputsErrors, setInputsErrors] = useState(inputInit);
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const client = useApolloClient();
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
      const resultUser = await client.query({
        query: FETCH_USER_LOGGENT_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      localStorage.setItem(
        "refreshToken",
        result.data.loginUser.accessToken || ""
      );
      localStorage.setItem(
        "userInfoData",
        JSON.stringify(resultUser.data.fetchUserLoggedIn)
      );
      // localStorage.setItem("refreshToken", "true");
      // console.log(result.data.loginUser.accessToken);
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
