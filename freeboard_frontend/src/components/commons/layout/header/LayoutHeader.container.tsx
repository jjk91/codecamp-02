import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LayoutHeaderUi from "./LayoutHeader.presenter";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGENT_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
export default function LayoutHeader() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { data } = useQuery(FETCH_USER_LOGGENT_IN);
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
      data={data}
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      token={token}
    />
  );
}
