import { useState } from "react";
import UesdMarketQuestionAnswerUi from "./QuestionAnswer.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./QuestionAnswer.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function UesdMarketQuestionAnswer(props) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [answerContents, setAnswerContents] = useState("");
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id,
    },
  });
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [createUseditemQuestionAnswer] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  function onChangeInputs(event) {
    setAnswerContents(event.target.value);
  }

  async function onClickSumbit() {
    alert(11);
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.data._id,
          createUseditemQuestionAnswerInput: {
            contents: answerContents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: props.data._id,
            },
          },
        ],
      });
      Modal.success({ content: "댓글 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdate() {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.data._id,
          createUseditemQuestionAnswerInput: {
            contents: answerContents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: props.data._id,
            },
          },
        ],
      });
      Modal.success({ content: "해당 댓글을 수정합니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onClickEdit() {
    setIsEdit(true);
  }
  function handleUpdate() {
    setIsEdit(false);
  }

  return (
    <UesdMarketQuestionAnswerUi
      data={data}
      isEdit={isEdit}
      onClickUpdate={onClickUpdate}
      onClickSumbit={onClickSumbit}
      onClickEdit={onClickEdit}
      handleUpdate={handleUpdate}
      onChangeInputs={onChangeInputs}
    />
  );
}
