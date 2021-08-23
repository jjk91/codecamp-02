import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
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
} from "./usedMarketQuestionWrite.queries";

export default function UsedMarketQuestion(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestion] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  // console.log(router.query.usedMarketId);
  // console.log(userInfo._id);
  function onChangeInputs(event: any) {
    setContents(event.target.value);
  }

  async function onClickSumit() {
    try {
      await createUseditemQuestion({
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

  async function onClickUpdate(event: any) {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
          updateUseditemQuestionInput: {
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
