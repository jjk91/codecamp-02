import { useContext } from "react";
import { Logincontext } from "./Login.container";
import {
  WrapperLoginPage,
  HeadLoginPage,
  BodyLoginPage,
  LoginPageLogo,
  LoginInputWrapper,
  LoginText,
  LoginInput,
  LoginState,
  Login,
  Bar,
  FindWrapper,
  FindEmail,
  FindPassword,
  SingUp,
} from "./Login.style";

export default function LoginUi() {
  const { onChangeLoginInput, onClickLogin, onClickSignUp } =
    useContext(Logincontext);
  return (
    <>
      <WrapperLoginPage>
        <HeadLoginPage></HeadLoginPage>

        <BodyLoginPage>
          <LoginPageLogo src="/images/logo.png" />

          <LoginInputWrapper>
            <LoginText>이메일</LoginText>
            <LoginInput
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeLoginInput}
            />
            <LoginText>비밀번호</LoginText>
            <LoginInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeLoginInput}
            />
          </LoginInputWrapper>

          <LoginState></LoginState>
          <Login onClick={onClickLogin}>로그인하기</Login>
          <Bar />
          <FindWrapper>
            <FindEmail>이메일 찾기</FindEmail>
            <div>|</div>
            <FindPassword>비밀번호 찾기</FindPassword>
            <div>|</div>
            <SingUp onClick={onClickSignUp}>회원가입</SingUp>
          </FindWrapper>
        </BodyLoginPage>
      </WrapperLoginPage>
    </>
  );
}
