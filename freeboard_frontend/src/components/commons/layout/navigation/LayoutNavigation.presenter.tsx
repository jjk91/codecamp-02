import {
  Wrapper,
  NavigationList,
  Borads,
  Marktet,
  Mypage,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUi(props) {
  return (
    <Wrapper>
      <NavigationList>
        <Borads onClick={props.onClickMoveBoard}>자유게시판</Borads>
        <div>|</div>
        <Marktet onClick={props.onClickMoveMarket}>중고마켓</Marktet>
        <div>|</div>
        <Mypage>마이페이지</Mypage>
      </NavigationList>
    </Wrapper>
  );
}
