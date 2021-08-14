import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationCreateUseditemArgs,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWriteUi from "./usedMarketQuestionWrite.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS,
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ABSWER,
} from "./usedMarketQuestionWrite.queries";



export default function BoardCommentWrite(props) {
  const { userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [questiontInput, setQuestionInput] = useState("");
  const [createUseditemQuestion] = useMutation<
    IMutation,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  function onChangeInputs(event) {
       setQuestionInput(event.target.value,);
    // if (props.isEdit) {
    //   newCommentInput.contents = props.data?.fetchUseditemQuestions?.contents;
    // }
  }

  async function onClickSumit() {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.useditemId),
          createUseditemQuestionInput: {
            contents
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

      alert("등록되었습니다.");
      setQuestionInput( contents: "" );
      // router.push(`/boards/${router.query.boardId}`)
      // 윗줄을 쓸경우도 실행은 가능 하지만
      // BoardDetail 페이지를 전체적으로 새로고침 비효율적
    } catch (error) {
      alert(error.meessage);
    }
  }

  async function onClickUpdate(event) {
    const newCommentInputs = {};
    if (commentInput.writer) newCommentInputs.writer = commentInput.writer;
    if (commentInput.contents)
      newCommentInputs.contents = commentInput.contents;
    if (commentInput.rating) newCommentInputs.rating = commentInput.rating;
    console.log(newCommentInputs);
    if (Object.values(newCommentInputs).every((data) => data)) {
      try {
        await updateBoardComment({
          variables: {
            boardCommentId: event.target.id,
            password: commentInput.password,
            updateBoardCommentInput: {
              ...newCommentInputs,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        props.handleUpdate();
        alert("해당 댓글을 수정합니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onChangerate(value: number) {
    setCommentInput({ ...commentInput, rating: value });
  }

  return (
    <BoardCommentWriteUi
      data={props.data}
      onClickClose={props.onClickClose}
      commentInput={commentInput}
      onChangerate={onChangerate}
      onClickUpdate={onClickUpdate}
      onChangeInputs={onChangeInputs}
      onClickSumit={onClickSumit}
      isEdit={props.isEdit}
    />
  );
}
