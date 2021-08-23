import {
  Wrapper,
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
          <MyItemsWarpper>
            <MyItemImg src="/images/market.svg" />
            <MyItems>{"내 장터"}</MyItems>
          </MyItemsWarpper>
          <MyAmountWrapper>
            <MyAmountImg src="/images/charger.svg" />
            <MyAmount>{"내 포인트"}</MyAmount>
          </MyAmountWrapper>
          <MyProfileWrapper>
            <MyProfileImg src="/images/ic_profile-96px.svg" />
            <MyProfile>{"내 프로필"}</MyProfile>
          </MyProfileWrapper>
        </MyPageList>
      </Wrapper>
    </>
  );
}
