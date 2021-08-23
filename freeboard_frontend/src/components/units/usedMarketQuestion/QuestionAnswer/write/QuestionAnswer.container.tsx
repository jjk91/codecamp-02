import { useState } from "react";
import UesdMarketQuestionAnswerUi from "./QuestionAnswer.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./QuestionAnswer.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function UesdMarketQuestionAnswer(props: any) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [createUseditemQuestionAnswer] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  function onChangeInputs(event: any) {
    setContents(event.target.value);
  }

  async function onClickSumbit() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.data._id,
          createUseditemQuestionAnswerInput: {
            contents: contents,
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
      if (props.setAnswer) {
        props.setAnswer(false);
      }
      Modal.success({ content: "댓글 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdate() {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.data._id,
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionAnswerId: props.data._id,
            },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.success({ content: "해당 댓글을 수정합니다!." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onClickEdit() {
    props.setIsEdit(true);
  }
  function handleUpdate() {
    props.setIsEdit(false);
  }

  return (
    <UesdMarketQuestionAnswerUi
      data={props.data}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      onClickSumbit={onClickSumbit}
      onClickEdit={onClickEdit}
      handleUpdate={handleUpdate}
      onChangeInputs={onChangeInputs}
    />
  );
}
