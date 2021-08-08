import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $boardCommentId: ID!
    $password: String
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      boardCommentId: $boardCommentId
      password: $password
      updateBoardCommentInput: $updateBoardCommentInput
    ) {
      _id
      writer
      contents
      rating
      updatedAt
    }
  }
`;

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId)
    _id
    constents
    useditem
    user
    createdAt
    updatedAt
  }
`;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      useditem
      user
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditem
      user
      createdAt
      updatedAt
    }
  }
`;

// export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
//   mutation createUseditemQuestionAnswer(
//     $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
//     $useditemQuestionId: ID!
//   ) {
//     createUseditemQuestionAnswer(
//       createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
//       useditemQuestionId: $useditemQuestionId
//     ) {
//       _id
//       contents
//       useditemQuestion
//       user
//       createdAt
//       updatedAt
//     }
//   }
// `;
