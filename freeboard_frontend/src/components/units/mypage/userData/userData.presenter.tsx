import MyItemPage from "../myMarket/myItem.container";
import MyPointPage from "../myPoint/myPoint.container";
import UserInfoPage from "../myprofile/myprofile.container";
import {
  Wrapper,
  MyPageWrapper,
  MypageTitle,
  UserWrapper,
  UserImg,
  UserName,
  UserAmountWrapper,
  UserAmountImg,
  UserAmount,
  MyPageList,
  MyItemsWarpper,
  MyItemImg,
  MyItems,
  MyAmountWrapper,
  MyAmountImg,
  MyAmount,
  MyProfileWrapper,
  MyProfileImg,
  MyProfile,
} from "./userData.style";

export default function MyPageDataUi(props: any) {
  return (
    <>
      <Wrapper>
        <MyPageWrapper>
          <MypageTitle>{"MYPAGE"}</MypageTitle>
          <UserWrapper>
            <UserImg src="/images/ic_profile-96px.svg" />
            <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
            <UserAmountWrapper>
              <UserAmountImg src="/images/charger.svg" />
              <UserAmount>
                {props.data?.fetchUserLoggedIn.userPoint?.amount}원
              </UserAmount>
            </UserAmountWrapper>
          </UserWrapper>
          <MyPageList>
            <MyItemsWarpper
              onClick={props.onClickMoveMyItems}
              // @ts-ignore
              isActive={props.pageData === "myitems"}
            >
              <MyItemImg src="/images/market.svg" />
              <MyItems>{"내 장터"}</MyItems>
            </MyItemsWarpper>
            <MyAmountWrapper
              onClick={props.onClickMoveMyAmount}
              // @ts-ignore
              isActive={props.pageData === "myAmount"}
            >
              <MyAmountImg src="/images/charger.svg" />
              <MyAmount>{"내 포인트"}</MyAmount>
            </MyAmountWrapper>
            <MyProfileWrapper
              onClick={props.onClickMoveMyProfile}
              // @ts-ignore
              isActive={props.pageData === "myProfile"}
            >
              <MyProfileImg src="/images/ic_profile-96px.svg" />
              <MyProfile>{"내 프로필"}</MyProfile>
            </MyProfileWrapper>
          </MyPageList>
        </MyPageWrapper>
        {props.pageData === "myitems" ? <MyItemPage /> : ""}
        {props.pageData === "myAmount" ? <MyPointPage /> : ""}
        {props.pageData === "myProfile" ? <UserInfoPage /> : ""}
      </Wrapper>
    </>
  );
}
