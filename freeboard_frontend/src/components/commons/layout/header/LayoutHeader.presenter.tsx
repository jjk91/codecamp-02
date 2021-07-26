import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerText,
  InnerButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUi() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerLogo src="/images/horizontal_on_white_by_logaster.png" />
          {/* <InnerText>모 여</InnerText> */}
          <div>
            <InnerButton>Login</InnerButton>
            <InnerButton>Sing up</InnerButton>
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
