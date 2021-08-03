import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();
  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      router.push("/22-login-success");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div>로그인 페이지</div>
      이메일 :<input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
