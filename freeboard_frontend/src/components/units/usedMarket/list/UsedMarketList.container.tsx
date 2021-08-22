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
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0);
  const [showItem, setShowItem] = useState([]);

  const [hasMore, setHasMore] = useState(true)
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, { variables: { page: page } });
  const onLoadMore = () =>{
    if(!data) return
    fetchMore({
      variables:{page: Math.floor(data?.fetchUseditems.length/ 10) + 1},
      updateQuery:(prev,{fetchMoreResult}) =>{
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false)
        return{
          fetchUseditems:[...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems]
        }
      }
    })
  }
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
      onLoadMore={onLoadMore}
      hasMore={hasMore}
      refetch={refetch}
      search={search}
      setSearch = {setSearch}
    />
  );
}
