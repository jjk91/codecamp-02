import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const WrapperAnswer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const QuestionMoveAnswer = styled.div`
  padding-left: 64px;
  padding-right: 25px;
  padding-top: 16px;
`;
export const MoveImg = styled.img`
  width: 15px;
  height: 17px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnswerUserImg = styled.img``;

export const AnswerContents = styled.textarea`
  height: 108px;
  width: 1096px;
  resize: none;
`;

export const AnswerDate = styled.div``;

export const AnswerUser = styled.div``;

export const WrapperFooterAnswer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-top: none;
`;

export const AnswerText = styled.div`
  line-height: 52px;
  color: gray;
`;

export const AnswerSubmit = styled.button`
  height: 52px;
  width: 91px;
  background-color: ${(props) => (props.isEdit ? "#FF8200	" : "#B9062F")};
  color: midnightblue;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;
