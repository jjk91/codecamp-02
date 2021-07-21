import { useMutation } from "@apollo/client";
import CommentListItemUi from "./BoardCommentListItem.presnter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "../BoardCommentList.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CommentListItem(props) {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isEdit, setIsEdit] = useState(false);

  async function onClickDelete(event) {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEdit() {
    setIsEdit(true);
  }
  function handleUpdate() {
    setIsEdit(false);
  }
  return (
    <CommentListItemUi
      data={props.data}
      handleUpdate={handleUpdate}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
    />
  );
}
