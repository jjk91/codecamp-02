import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";

const Body = styled.div`
  padding-top: 80px;
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
