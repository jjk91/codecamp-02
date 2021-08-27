import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageDataUi from "./userData.presenter";
import { FETCH_USER_LOGGED_IN } from "./userData.queries";

export default function MyPageData() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [market, setMarket] = useState(true);
  const [amount, setAmount] = useState(false);
  const [profile, setProfile] = useState(false);

  const onClickMoveMyItems = () => {
    setMarket(true);
    setAmount(false);
    setProfile(false);
  };

  const onClickMoveMyAmount = () => {
    setMarket(false);
    setAmount(true);
    setProfile(false);
  };

  const onClickMoveMyProfile = () => {
    setMarket(false);
    setAmount(false);
    setProfile(true);
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
