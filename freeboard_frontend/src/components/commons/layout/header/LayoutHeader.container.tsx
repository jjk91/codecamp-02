import { useRouter } from "next/router";
import LayoutHeaderUi from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogin() {
    router.push("/boards/login");
  }
  function onClickSignUp() {
    router.push("/boards/signUp");
  }

  return (
    <LayoutHeaderUi onClickSignUp={onClickSignUp} onClickLogin={onClickLogin} />
  );
}
