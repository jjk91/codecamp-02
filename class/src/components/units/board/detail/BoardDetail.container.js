import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUi from "./BoardDetail.presnter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  return <BoardDetailUi gql={data} onClickEdit={onClickEdit} />;
}
