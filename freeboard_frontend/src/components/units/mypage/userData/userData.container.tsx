import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageDataUi from "./userData.presenter";
import { FETCH_USER_LOGGED_IN } from "./userData.queries";

export default function MyPageData() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMoveMyItems = () => {
    router.push(``);
  };

  const onClickMoveMyAmount = () => {
    router.push(``);
  };

  const onClickMoveMyProfile = () => {
    router.push(``);
  };

  return (
    <MyPageDataUi
      data={data}
      onClickMoveMyItems={onClickMoveMyItems}
      onClickMoveMyAmount={onClickMoveMyAmount}
      onClickMoveMyProfile={onClickMoveMyProfile}
    />
  );
}
