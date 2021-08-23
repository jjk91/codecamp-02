import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LayoutHeaderUi from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("userInfoData") || "");
  }, []);

  function onClickLogin() {
    router.push("/boards/login");
  }
  function onClickSignUp() {
    router.push("/boards/signUp");
  }

  return (
    <LayoutHeaderUi
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      token={token}
    />
  );
}
