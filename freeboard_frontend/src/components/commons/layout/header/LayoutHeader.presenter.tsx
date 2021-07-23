import {
  Wrapper,
  InnerWrapper,
  InnerText,
  InnerButton,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUi() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <InnerText>Grand Tour</InnerText>
          <div>
            <InnerButton>Login</InnerButton>
            <InnerButton>Sing up</InnerButton>
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
