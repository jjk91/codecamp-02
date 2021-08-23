import { useQuery } from "@apollo/client";
import MyPageDataUi from "./userData.presenter";
import { FETCH_USER_LOGGED_IN } from "./userData.queries";

export default function MyPageData() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <MyPageDataUi data={data} />;
}
