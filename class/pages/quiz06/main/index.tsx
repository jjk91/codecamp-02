import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../_app";
import { Modal } from "antd";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function QuizLoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit } = useForm();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const clinet = useApolloClient();

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const resultUser = await clinet.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      if (localStorage.getItem("boardBaskets")) {
        alert(
          "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
        );
        router.push("./basket");
      }

      setUserInfo(resultUser.data.fetchUserLoggedIn);

      setAccessToken(result.data?.loginUser.accseeToken);

      // console.log(resultUser.data.fetchUserLoggedIn);
      // console.log(result.data.loginUser.accessToken);
      alert("로긴성공");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("email")} />
        <br />
        비밀번호: <input type="passowrd" {...register("password")} />
        <button type="submit">로그인하기</button>
      </form>
    </>
  );
}
