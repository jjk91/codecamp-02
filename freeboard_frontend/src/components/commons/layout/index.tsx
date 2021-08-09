import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  /* padding: 80px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props: any) {
  const router = useRouter();
  console.log(router.pathname);
  const patName = router.pathname === "/boards/login";
  return (
    <>
      {/* {patName && (
        <> */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
      {/* </>
      )} */}
    </>
  );
}
