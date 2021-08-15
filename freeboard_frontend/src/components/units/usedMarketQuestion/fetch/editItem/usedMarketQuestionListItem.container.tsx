import { useMutation } from "@apollo/client";
import CommentListItemUi from "./usedMarketQuestionListItem.presnter";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USER_ITEM_QUESTION,
} from "../usedMarketQuestionList.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function QuestionListItem(props) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USER_ITEM_QUESTION);
  const [isEdit, setIsEdit] = useState(false);

  async function onClickDelete(event) {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.usedMarketId },
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

  function onClickClose() {
    console.log("클릭");
    setIsEdit(false);
  }
  return (
    <CommentListItemUi
      data={props.data}
      onClickClose={onClickClose}
      handleUpdate={handleUpdate}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
    />
  );
}
