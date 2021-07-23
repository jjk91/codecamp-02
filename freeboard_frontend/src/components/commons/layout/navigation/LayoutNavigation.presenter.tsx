import {
  Wrapper,
  NavigationList,
  Borads,
  Marktet,
  Mypage,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUi() {
  return (
    <Wrapper>
      <NavigationList>
        <Borads>자유게시판</Borads>
        <div>|</div>
        <Marktet>중고마켓</Marktet>
        <div>|</div>
        <Mypage>마이페이지</Mypage>
      </NavigationList>
    </Wrapper>
  );
}
