import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";

const Body = styled.div`
  /* padding: 80px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
