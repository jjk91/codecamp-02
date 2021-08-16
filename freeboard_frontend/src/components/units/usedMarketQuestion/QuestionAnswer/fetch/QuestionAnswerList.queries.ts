import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      useditemQuestion {
        _id
        contents
        user {
          _id
          name
        }
      }
    }
  }
`;

export const DELETE_USER_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
