import {
  Wrapper,
  ProfileTitle,
  ProfilePassword,
  PasswordText,
  Password,
  ProfilePasswordChange,
  PasswordChangeSubmit,
  ButtonWrapper,
} from "./myprofile.style";

export default function UserInfoPageUi(props: any) {
  return (
    <>
      <Wrapper>
        <ProfileTitle>{"비밀번호 변경"}</ProfileTitle>
        <ProfilePassword>
          <PasswordText>{"현재 비밀번호"}</PasswordText>{" "}
          <Password placeholder="현재 비밀번호를 입력해주세요" />
        </ProfilePassword>
        <ProfilePasswordChange>
          <PasswordText>{"새 비밀번호"}</PasswordText>{" "}
          <Password placeholder="새 비밀번호를 입력해주세요" />
        </ProfilePasswordChange>
        <ProfilePasswordChange>
          <PasswordText>{"새 비밀번호 확인"}</PasswordText>{" "}
          <Password placeholder="새 비밀번호를 입력해주세요" />
        </ProfilePasswordChange>
        <ButtonWrapper>
          <PasswordChangeSubmit onClick={props.onClickSubmit}>
            {"비밀번호 변경"}
          </PasswordChangeSubmit>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
