import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
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

export default function Dropdown01Ui(props) {
  const { userInfo } = useContext(GlobalContext);
  return (
    <>
      <UserWrapper>
        <UserData>
          <UserImg src="/images/ic_profile-96px.svg" />
          <UserInfo>
            <Username>{userInfo?.name}</Username>
            <UserPoint>{userInfo?.userPoint?.amount}원</UserPoint>
          </UserInfo>
        </UserData>
      </UserWrapper>
      <PaymentWrapper>
        <Payment setIsOpen={props.setIsOpen} />
      </PaymentWrapper>
      <LogoutWrapper>
        <LogoutImg src="/images/logout.svg" />
        <LogoutText>로그아웃</LogoutText>
      </LogoutWrapper>
    </>
  );
}
