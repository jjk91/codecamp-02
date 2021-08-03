import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerText,
  InnerButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUi(props) {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo src="/images/horizontal_on_white_by_logaster.png" />
          {/* <InnerText>모 여</InnerText> */}
          <div>
            <InnerButton onClick={props.onClickLogin}>Login</InnerButton>
            <InnerButton onClick={props.onClickSignUp}>Sign up</InnerButton>
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
