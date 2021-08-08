import { useRouter } from "next/router";
import LayoutNavigationUi from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMoveBoard() {
    router.push("/boards/list");
  }
  function onClickMoveMarket() {
    router.push("/usedMarket/list");
  }

  return (
    <LayoutNavigationUi
      onClickMoveBoard={onClickMoveBoard}
      onClickMoveMarket={onClickMoveMarket}
    />
  );
}
