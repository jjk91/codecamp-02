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
  const [answer, setAnswer] = useState(false);

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.data._id,
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
    setIsEdit(false);
  }

  const onClickAnswer = () => {
    setAnswer(true);
  };
  return (
    <CommentListItemUi
      data={props.data}
      onClickClose={onClickClose}
      handleUpdate={handleUpdate}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickAnswer={onClickAnswer}
      isEdit={isEdit}
      answer={answer}
      setAnswer={setAnswer}
      setIsEdit={setIsEdit}
    />
  );
}
