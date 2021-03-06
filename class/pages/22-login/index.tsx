import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  // IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";
// const CREATE_USER = gql`
//   mutation createUser($createUserInput: CreateUserInput!) {
//     createUser(createUserInput: $createUserInput) {
//       _id
//     }
//   }
// `;

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

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
      // createUser({
      //   variables: {
      //     createUserInput: {
      //       email: email,
      //       password: password,
      //       name: name,
      //     },
      //   },
      // });
      // console.log(result.data?.loginUser.accessToken);
      // alert(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem("refreshToken", "true");
      // router.push("/22-login-success");
      // localStorage.getItem(result.data?.loginUser.accessToken || "");

      router.push("/22-login-success");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      ?????????: <input type="text" onChange={onChangeEmail} />
      <br />
      ???????????? : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>?????????</button>
    </>
  );
}
