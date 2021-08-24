import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import MyItemPageUi from "./myItem.presenter";
import { FETCH_USED_ITEMS_ISOLD } from "./myItem.queries";

export default function MyItemPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_ISOLD);
  // const router = useRouter();

  // const onClickMyItmeList = () => {
  //   router.push(``);
  // };

  // const onClickMyPickList = () => {
  //   router.push(``);
  // };

  return (
    <MyItemPageUi
      data={data}
      // onClickMyItmeList={onClickMyItmeList}
      // onClickMyPickList={onClickMyPickList}
    />
  );
}
