import {
  WrapperLoginPage,
  HeadLoginPage,
  BodyLoginPage,
  LoginPageLogo,
  LoginInputWrapper,
  LoginIdInput,
  LoginPasswordInput,
  LoginState,
  Login,
  FindWrapper,
  FindEmail,
  FindPassword,
  SingUp,
} from "./Login.style";

export default function LoginPageUi() {
  return (
    <>
      <WrapperLoginPage>
        <HeadLoginPage></HeadLoginPage>

        <BodyLoginPage>
          <LoginPageLogo></LoginPageLogo>

          <LoginInputWrapper>
            <LoginIdInput
              type="text"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeLoginInput}
            />
            <LoginPasswordInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeLoginInput}
            />
          </LoginInputWrapper>

          <LoginState></LoginState>
          <Login onClick={onClickLogin}>로그인하기</Login>

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
