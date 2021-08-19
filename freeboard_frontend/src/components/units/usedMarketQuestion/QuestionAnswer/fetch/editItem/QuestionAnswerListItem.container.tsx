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
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USER_ITEM_QUESTION_ANSWER
  );
  const [isEdit, setIsEdit] = useState(false);

  async function onClickDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.dataId._id },
          },
        ],
      });
      setIsEdit(false);
      alert("대댓글이 삭제되었습니다.");
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
    setIsEdit(false);
  }
  return (
    <AnswerListItemUi
      data={props.data}
      qustionData={props.qustionData}
      onClickClose={onClickClose}
      handleUpdate={handleUpdate}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}
