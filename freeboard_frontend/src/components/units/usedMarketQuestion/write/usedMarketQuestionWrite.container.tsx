import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import UsedMarketQuestionUi from "./usedMarketQuestionWrite.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS,
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ABSWER,
} from "./usedMarketQuestionWrite.queries";

export default function UsedMarketQuestion(props) {
  const { userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestion] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  // console.log(router.query.usedMarketId);
  // console.log(userInfo._id);
  function onChangeInputs(event) {
    setContents(event.target.value);
  }

  async function onClickSumit() {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.usedMarketId),
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.usedMarketId),
            },
          },
        ],
      });

      Modal.success({ content: "해당 댓글을 등록합니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdate(event) {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemId: String(router.query.useditemId),
          createUseditemQuestionInput: {
            contents: event.target.value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.useditemId,
            },
          },
        ],
      });
      Modal.success({ content: "해당 댓글을 수정합니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <UsedMarketQuestionUi
      data={props.data}
      onClickClose={props.onClickClose}
      onClickUpdate={onClickUpdate}
      onChangeInputs={onChangeInputs}
      onClickSumit={onClickSumit}
      isEdit={props.isEdit}
    />
  );
}
