import { useMutation } from "@apollo/client";
import AnswerListItemUi from "./QuestionAnswerListItem.presnter";

import { useState } from "react";
import { useRouter } from "next/router";
import {
  DELETE_USER_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
} from "../QuestionAnswerList.queries";

export default function AnswerListItem(props) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(
    DELETE_USER_ITEM_QUESTION_ANSWER
  );
  const [isEdit, setIsEdit] = useState(false);

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
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
    <AnswerListItemUi
      data={props.data}
      onClickClose={onClickClose}
      handleUpdate={handleUpdate}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
    />
  );
}
