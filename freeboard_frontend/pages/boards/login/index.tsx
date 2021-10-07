import { useEffect } from "react";
import Login from "../../../src/components/commons/login/Login.container";

export default function LoginPage(props: any) {
  useEffect(() => {
    if (props.setLayout) {
      props.setLayout(true);
    }
  }, [props.setLayout]);
  return <Login />;
}
