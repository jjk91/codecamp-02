import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import withAuth from "../../../commons/hoc/wirhAuth";
import UsedMarketListUi from "./UsedMarketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./UsedMarketList.queries";

function UsedMarketList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [baskets, setBaskets] = useState([]);

  const { data } = useQuery(FETCH_USED_ITEMS, { variables: { page: page } });
  const { data: itemOfTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const ClickMoveDetail = (marketid) => () => {
    router.push(`/usedMarket/${marketid}`);
  };

  const onClickMoveList = () => {
    router.push(`/usedMarket/new`);
  };

  return (
    <UsedMarketListUi
      data={data}
      onClickMoveList={onClickMoveList}
      ClickMoveDetail={ClickMoveDetail}
      itemOfTheBest={itemOfTheBest}
    />
  );
}
export default withAuth(UsedMarketList);
