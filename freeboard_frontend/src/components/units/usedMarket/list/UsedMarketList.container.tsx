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
  const [showItem, setShowItem] = useState([]);

  const { data } = useQuery(FETCH_USED_ITEMS, { variables: { page: page } });

  console.log("이거는 리스트 data", data);
  const { data: itemOfTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  useEffect(() => {
    const todayItem = JSON.parse(localStorage.getItem("todayBaskets") || "[]");
    setShowItem(todayItem);
  }, []);

  // const ClickMoveDetail = (data) => () => {
  //   onClickMoveBasket(data);
  //   router.push(`/usedMarket/${data._id}`);
  // };

  const onClickMoveList = () => {
    router.push(`/usedMarket/new`);
  };

  const onClickMoveBasket = (basketData: any) => () => {
    const newbasket = [basketData];
    const todayItem = JSON.parse(
      localStorage.getItem("todayBaskets") || "[]"
    ).filter((item: any) => item._id !== basketData._id);
    localStorage.setItem(
      "todayBaskets",
      JSON.stringify(newbasket.concat(todayItem))
    );
    router.push(`/usedMarket/${basketData._id}`);
  };

  return (
    <UsedMarketListUi
      data={data}
      showItem={showItem}
      onClickMoveBasket={onClickMoveBasket}
      onClickMoveList={onClickMoveList}
      // ClickMoveDetail={ClickMoveDetail}
      itemOfTheBest={itemOfTheBest}
    />
  );
}
