import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWriteUi from "./BoardCommentWrite.presnter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";

const CommentInputInit = {
  writer: "",
  password: "",
  contents: "",
};

export default function BoardCommentWrite(props) {
  const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD_COMMENTS)
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [commentInput, setCommentInput] = useState(CommentInputInit);
  const [createBoardComment] = useMutation<
    IMutation,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  function onChangeInputs(event: any) {
    const newCommentInput = {
      ...commentInput,
      [event.target.name]: event.target.value,
    };
    setCommentInput(newCommentInput);
    if (props.isEdit) {
      newCommentInput.writer = props.data?.fetchBoardComment.writer;
    }
  }

  async function onClickSumit() {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: commentInput.writer,
            contents: commentInput.contents,
            rating: 5,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });

      alert("등록되었습니다.");
      setCommentInput({ writer: "", contents: "", password: "" });
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

    if (Object.values(newCommentInputs).every((data) => data)) {
      try {
        await updateBoardComment({
          variables: {
            boardCommentId: event.target.id,
            password: commentInput.password,
            updateBoardCommentInput: { ...newCommentInputs },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        alert("해당 댓글을 수정합니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <BoardCommentWriteUi
      data={props.data}
      commentInput={commentInput}
      onClickUpdate={onClickUpdate}
      onChangeInputs={onChangeInputs}
      onClickSumit={onClickSumit}
      isEdit={props.isEdit}
    />
  );
}
