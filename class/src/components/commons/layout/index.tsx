import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 700px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <div style={{ backgroundColor: "aqua" }}>Side scope</div>
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
