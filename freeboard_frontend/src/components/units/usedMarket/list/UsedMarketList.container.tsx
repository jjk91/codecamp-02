import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withAuth from "../../../commons/hoc/wirhAuth";
import UsedMarketListUi from "./UsedMarketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./UsedMarketList.queries";

export default function UsedMarketList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [baskets, setBaskets] = useState([]);

  const { data } = useQuery(FETCH_USED_ITEMS, { variables: { page: page } });
  const { data: itemOfTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  useEffect(() => {
    const Baskets = JSON.parse(localStorage.getItem("todayBasekets") || "[]");
    setBaskets(Baskets);
  }, []);

  const ClickMoveDetail = (data) => () => {
    onClickMoveBasket(data);
    router.push(`/usedMarket/${data._id}`);
  };

  const onClickMoveList = () => {
    router.push(`/usedMarket/new`);
  };

  const onClickMoveBasket = (baskets) => {
    const newbasket = [baskets];
    const baskets = JSON.parse(
      localStorage.getItem("todayBaskets") || "[]"
    ).filter((el) => el._id !== basketData._id);
    localStorage.setItem("todayBaskets", JSON.stringify(basketDate));
  };

  return (
    <UsedMarketListUi
      data={data}
      baskets={baskets}
      onClickMoveBasket={onClickMoveBasket}
      onClickMoveList={onClickMoveList}
      ClickMoveDetail={ClickMoveDetail}
      itemOfTheBest={itemOfTheBest}
    />
  );
}
