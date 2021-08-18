import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import Payment from "../../payment";
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
          {!props.token && (
            <div>
              <InnerButton onClick={props.onClickLogin}>Login</InnerButton>
              <InnerButton onClick={props.onClickSignUp}>Sign up</InnerButton>
            </div>
          )}
          {props.token && (
            <UserWrapper>
              <UserImg src="/images/ic_profile-96px.png" />
              <UserInfo>{userInfo.name}</UserInfo>
              <Payment />
            </UserWrapper>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
