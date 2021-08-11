import { useQuery } from "@apollo/client";
import withAuth from "../../../commons/hoc/wirhAuth";
import UsedMarketDetailUi from "./UsedMarketDetail.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "./UsedMarketDetail.queries";
import { useEffect } from "react";

export default function UsedMarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.usedMarketId },
  });
  console.log(data);
  const onClickUpdate = () => {
    router.push(`/usedMarket/${router.query.usedMarketId}/edit`);
  };

  const onClickList = () => {
    router.push(`/usedMarket/list`);
  };
  // 리스트 아직 안만들었음 _ 0807
  // const onClickMoveToList = () => {
  //   router.push(`/usedMarket/new`);
  // };

  return (
    <UsedMarketDetailUi
      data={data}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
    />
  );
}
