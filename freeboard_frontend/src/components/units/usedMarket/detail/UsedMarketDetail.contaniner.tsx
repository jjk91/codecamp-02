import { useMutation, useQuery } from "@apollo/client";
import UsedMarketDetailUi from "./UsedMarketDetail.presenter";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./UsedMarketDetail.queries";

export default function UsedMarketDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.usedMarketId },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const onClickEdit = () => {
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
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.usedMarketId },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push(`/usedMarket/list`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <UsedMarketDetailUi
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickPick={onClickPick}
    />
  );
}
