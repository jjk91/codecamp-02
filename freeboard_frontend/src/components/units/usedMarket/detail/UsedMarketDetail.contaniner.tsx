import { useMutation, useQuery } from "@apollo/client";
import UsedMarketDetailUi from "./UsedMarketDetail.presenter";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./UsedMarketDetail.queries";

export default function UsedMarketDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.usedMarketId },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const onClickUpdate = () => {
    router.push(`/usedMarket/${router.query.usedMarketId}/edit`);
  };

  const onClickList = () => {
    router.push(`/usedMarket/list`);
  };

  const onClickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: router.query.usedMarketId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.usedMarketId },
        },
      ],
    });
  };

  return (
    <UsedMarketDetailUi
      data={data}
      onClickUpdate={onClickUpdate}
      onClickList={onClickList}
      onClickPick={onClickPick}
    />
  );
}
