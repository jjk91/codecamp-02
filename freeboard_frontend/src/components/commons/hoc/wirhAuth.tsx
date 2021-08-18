import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요한 페이지 입니다.");
      router.push("/boards/login");
    }
  }, []);
  return <Component {...props} />;
};

export default withAuth;

//
