import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  const onClickPick = () => {};

  // useEffect(() => {
  //   const todayItems = JSON.parse(localStorage.getItem("baskets") || "[]");
  //   setBaskets(todayItems);
  // }, []);

  const ClickMoveDetail = (marketid) => (event) => {
    const Baskets = JSON.parse(localStorage.getItem("todayBasekets") || "[]");
    let isExists = false;
    Baskets.forEach((data) => {
      if (data._id === marketid._id) isExists = true;
    });
    if (isExists) return;
    Baskets.push(marketid);
    localStorage.setItem("todayBasekets", JSON.stringify(Baskets));
    setBaskets(Baskets);
    console.log("qwe", event.target.id);
    router.push(`/usedMarket/${event.target.id}`);
    // onClickMoveBasket(data)();
  };

  const onClickMoveList = () => {
    router.push(`/usedMarket/new`);
  };

  // const onClickMoveBasket = (basketData) => () => {
  //   const Baskets = JSON.parse(localStorage.getItem("todayBasekets") || "[]");
  //   let isExists = false;
  //   Baskets.forEach((data) => {
  //     if (data._id === basketData._id) isExists = true;
  //   });
  //   if (isExists) return;
  //   Baskets.push(basketData);
  //   localStorage.setItem("todayBasekets", JSON.stringify(Baskets));
  //   setBaskets(Baskets);
  // };

  return (
    <UsedMarketListUi
      data={data}
      baskets={baskets}
      // onClickMoveBasket={onClickMoveBasket}
      onClickMoveList={onClickMoveList}
      ClickMoveDetail={ClickMoveDetail}
      itemOfTheBest={itemOfTheBest}
    />
  );
}
export default withAuth(UsedMarketList);
