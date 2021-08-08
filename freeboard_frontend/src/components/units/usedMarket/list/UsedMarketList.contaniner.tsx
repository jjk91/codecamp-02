import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import withAuth from "../../../commons/hoc/wirhAuth";
import UsedMarketListUi from "./UsedMarketList.presenter";
import { FETCH_USED_ITEMS } from "./UsedMarketList.queries";

function UsedMarketList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data } = useQuery(FETCH_USED_ITEMS, { variables: { page: page } });

  const ClickMoveDetail = (marketid) => () => {
    router.push(`/usedMarket/${marketid}`);
  };

  return <UsedMarketListUi data={data} ClickMoveDetail={ClickMoveDetail} />;
}
export default withAuth(UsedMarketList);
