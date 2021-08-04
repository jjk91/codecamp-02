import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const inputInit = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [input, setInput] = useState(inputInit);
  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeInputs(event) {
    const newInput = { ...input, [event.target.name]: event.target.value };
    setInput(newInput);
    console.log(newInput);
  }

  async function onClickSubmit() {
    try {
      const result = await loginUser({
        variables: { email: input.email, password: input.password },
      });
      setAccessToken(result.data?.loginUser.accessToken);
      router.push("/example/hoc/main");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div>로그인페이지</div>
      아이디: <input name="email" type="text" onChange={onChangeInputs} />
      비밀번호:
      <input name="password" type="password" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>로그인</button>
    </>
  );
}
