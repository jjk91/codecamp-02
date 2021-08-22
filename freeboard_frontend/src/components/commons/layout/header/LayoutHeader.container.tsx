import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import LayoutHeaderUi from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("userInfoData") || "");
  }, []);

  console.log("이것은 토큰이다",token)

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
