import { useQuery } from "@apollo/client";
import { tuple } from "antd/lib/_util/type";
import { useState } from "react";
import MyPageDataUi from "./userData.presenter";
import { FETCH_USER_LOGGED_IN } from "./userData.queries";

export default function MyPageData() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [market, setMarket] = useState(true);
  const [amount, setAmount] = useState(true);
  const [profile, setProfile] = useState(true);

  const onClickMoveMyItems = () => {
    setMarket(true);
    setAmount(false);
    setProfile(false);
    console.log("111");
  };

  const onClickMoveMyAmount = () => {
    setMarket(false);
    setAmount(true);
    setProfile(false);
    console.log("222");
  };

  const onClickMoveMyProfile = () => {
    setMarket(false);
    setAmount(false);
    setProfile(true);
    console.log("333");
  };

  return (
    <MyPageDataUi
      market={market}
      amount={amount}
      profile={profile}
      data={data}
      onClickMoveMyItems={onClickMoveMyItems}
      onClickMoveMyAmount={onClickMoveMyAmount}
      onClickMoveMyProfile={onClickMoveMyProfile}
    />
  );
}
