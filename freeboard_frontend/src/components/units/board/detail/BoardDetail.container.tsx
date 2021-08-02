import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUi from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.warning({
        title: "삭제확인",
        content: "게시물이 삭제 되었습니다.",
      });
      router.push(`/boards/list/`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate() {
    Modal.success({
      title: "수정 확인 ",
      content: "게시물을 수정합니다.",
    });
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  function onClickList() {
    router.push(`/boards/list/`);
  }

  function onClickLikeCount() {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  function onClickDislikeCount() {
    console.log(router.query.boardId);
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  return (
    <BoardDetailUi
      data={data}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickLikeCount={onClickLikeCount}
      onClickDislikeCount={onClickDislikeCount}
    />
  );
}
