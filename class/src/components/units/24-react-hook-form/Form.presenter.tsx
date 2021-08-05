// Form.conataninter으로 옮겨짐
// import { useMutation } from "@apollo/client";
// import { useForm } from "react-hook-form";
// import { Modal } from "antd";
// import { LOGIN_USER } from "./Form.queries";
import Button01 from "../../commons/buttons/Button01";
import Input01 from "../../commons/inputs/Input01";
export default function FormUi(props) {
  // Form.conataninter으로 옮겨짐
  // const { register, handleSubmit } = useForm();
  // const [loginUser] = useMutation(LOGIN_USER);

  // async function onSubmit(data) {
  //   try {
  //     const result = await loginUser({
  //       variables: {
  //         email: data.email,
  //         password: data.password,
  //       },
  //     });
  //     console.log(result.data.loginUser.accessToken);
  //     Modal.info({ content: "로그인 완료" });
  //   } catch (error) {
  //     Modal.error({ content: error.message });
  //   }
  // }

  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <div>폼 화면입니다.</div>
      <Input01
        inputName="이메일"
        type="text"
        errorMessage={props.errors.email?.message}
        register={{ ...props.register("email") }}
      />
      {/* 이메일:
      <input type="text" {...props.register("email")} />
      <div style={{ color: "red" }}>{props.errors.email?.message}</div> */}
      <Input01
        inputName="비밀번호"
        type="password"
        errorMessage={props.errors.password?.message}
        register={{ ...props.register("password") }}
      />
      <Button01
        buttonName="로그인하기"
        type="submit"
        isActive={props.isActive}
      />
      {/* <MyButton type="submit" isActive={props.isActive}>
        로그인하기
      </MyButton> */}
    </form>
  );
}
