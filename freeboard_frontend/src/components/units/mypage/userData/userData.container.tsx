import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageDataUi from "./userData.presenter";
import { FETCH_USER_LOGGED_IN } from "./userData.queries";

export default function MyPageData() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [pageData, setPageData] = useState("myItems");

  const onClickMoveMyItems = () => {
    setPageData("myitems");
  };

  const onClickMoveMyAmount = () => {
    setPageData("myAmount");
  };

  const onClickMoveMyProfile = () => {
    setPageData("myProfile");
  };

  return (
    <MyPageDataUi
      data={data}
      pageData={pageData}
      onClickMoveMyItems={onClickMoveMyItems}
      onClickMoveMyAmount={onClickMoveMyAmount}
      onClickMoveMyProfile={onClickMoveMyProfile}
    />
  );
}
