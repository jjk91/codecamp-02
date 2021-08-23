import { useRouter } from "next/router";
import LayoutNavigationUi from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveBoard = () => {
    router.push("/boards/list");
  };
  const onClickMoveMarket = () => {
    router.push("/usedMarket/list");
  };

  const onClickMoveMyPage = () => {
    router.push("/mypage");
  };

  return (
    <LayoutNavigationUi
      onClickMoveBoard={onClickMoveBoard}
      onClickMoveMarket={onClickMoveMarket}
      onClickMoveMyPage={onClickMoveMyPage}
    />
  );
}
