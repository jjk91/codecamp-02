import {
  Wrapper,
  SignUpPageLogo,
  WrapperSignUp,
  SignUpTitle,
  SignUpText,
  SignUpInput,
  SignUpSubmit,
  Error,
} from "./SignUp.style";
import { SignUpcontext } from "./SignUp.container";
import { useContext } from "react";

export default function SignUpUi() {
  const { onChangeLoginInput, onClickSubmit, inputsErrors } =
    useContext(SignUpcontext);
  return (
    <>
      <Wrapper>
        <SignUpPageLogo src="/images/logo.png" />
        <SignUpTitle>회원가입</SignUpTitle>
        <WrapperSignUp>
          <SignUpText>이메일</SignUpText>
          <SignUpInput
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={onChangeLoginInput}
          />
          <Error>{inputsErrors.email}</Error>
          <SignUpText>이름</SignUpText>
          <SignUpInput
            name="name"
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={onChangeLoginInput}
          />
          <Error>{inputsErrors.name}</Error>
          <SignUpText>비밀번호</SignUpText>
          <SignUpInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeLoginInput}
          />
          <Error>{inputsErrors.password}</Error>
          <SignUpText>비밀번호 확인</SignUpText>
          <SignUpInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeLoginInput}
          />
          <Error>{inputsErrors.password}</Error>
          <SignUpSubmit onClick={onClickSubmit}>회원가입하기</SignUpSubmit>
        </WrapperSignUp>
      </Wrapper>
    </>
  );
}
