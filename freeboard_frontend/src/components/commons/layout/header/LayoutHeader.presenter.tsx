import Dropdown01 from "../../dropdown/01/dropdown.contaniner";
import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
  UserWrapper,
  UserImg,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUi(props: any) {
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
              <UserImg src="/images/ic_profile-96px.svg" />

              <Dropdown01 />
            </UserWrapper>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
