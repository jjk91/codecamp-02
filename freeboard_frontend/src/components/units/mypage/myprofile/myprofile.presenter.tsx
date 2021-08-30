import {
  Wrapper,
  ProfileTitle,
  ProfilePassword,
  Password,
  ProfilePasswordChange,
} from "./myprofile.style";

export default function UserInfoPageUi() {
  return (
    <>
      <Wrapper>
        <ProfileTitle>{"비밀번호 변경"}</ProfileTitle>
        <ProfilePassword>
          현재 비밀번호 <Password />
        </ProfilePassword>
        <ProfilePasswordChange>
          새 비밀번호 <Password />
        </ProfilePasswordChange>
        <ProfilePasswordChange>
          새 비밀번호 <Password />
        </ProfilePasswordChange>
      </Wrapper>
    </>
  );
}
