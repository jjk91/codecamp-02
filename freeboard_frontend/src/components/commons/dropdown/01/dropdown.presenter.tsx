import Payment from "../../payment";
import {
  UserWrapper,
  UserData,
  UserImg,
  UserInfo,
  Username,
  UserPoint,
  PaymentWrapper,
  LogoutWrapper,
  LogoutImg,
  LogoutText,
} from "./dropdown.styles";

export default function Dropdown01Ui(props: any) {
  return (
    <>
      <UserWrapper>
        <UserData>
          <UserImg src="/images/ic_profile-96px.svg" />
          <UserInfo>
            <Username>{props.data?.fetchUserLoggedIn.name}</Username>
            <UserPoint>
              {props.data?.fetchUserLoggedIn.userPoint?.amount}원
            </UserPoint>
          </UserInfo>
        </UserData>
      </UserWrapper>
      <PaymentWrapper>
        <Payment setIsOpen={props.setIsOpen} />
      </PaymentWrapper>
      <LogoutWrapper onClick={props.onClickLogout}>
        <LogoutImg src="/images/logout.svg" />
        <LogoutText>로그아웃</LogoutText>
      </LogoutWrapper>
    </>
  );
}
