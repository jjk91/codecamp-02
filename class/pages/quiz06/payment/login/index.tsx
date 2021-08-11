import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function PaymentLogin() {
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onClickLogin = async (data) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      alert("로그인 완료");
      router.push(`/quiz06/payment/loading`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("email")} />
        비밀번호: <input type="password" {...register("password")} />
        <button type="submit">로그인하기</button>
      </form>
    </>
  );
}
