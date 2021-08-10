import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
  UserWrapper,
  UserImg,
  UserInfo,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUi(props) {
  const { userInfo } = useContext(GlobalContext);
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo src="/images/horizontal_on_white_by_logaster.png" />
          {!userInfo && (
            <div>
              <InnerButton onClick={props.onClickLogin}>Login</InnerButton>
              <InnerButton onClick={props.onClickSignUp}>Sign up</InnerButton>
            </div>
          )}
          {userInfo && (
            <UserWrapper>
              <UserImg src="/images/ic_profile-96px.png" />
              <UserInfo>{userInfo.name}</UserInfo>
            </UserWrapper>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
