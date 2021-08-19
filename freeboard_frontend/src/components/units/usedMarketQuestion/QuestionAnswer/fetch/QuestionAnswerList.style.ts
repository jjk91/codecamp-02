import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 120px;
  display: flex;
  /* border-top: 1px solid #bdbdbd; */
  border-bottom: 1px solid #bdbdbd;
  margin: auto;
  /* color: white; */
  padding-right: 10px;
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

export const AnswerInfo = styled.div`
  margin: 16px;
`;

export const AnswerImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const AnswerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AnswerHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AnswerDate = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnswerUser = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

export const AnswerContents = styled.div`
  font-size: 16px;
`;

export const AnswerCreateAt = styled.div`
  font-size: 12px;
`;

export const AnswerIcon = styled.div`
  width: 58px;
  padding: 3px 3px;
  display: flex;
  justify-content: space-between;
  padding: 3px 3px;
`;

export const Update = styled.img`
  height: 18px;
  width: 18px;
`;

export const Delet = styled.img`
  height: 18px;
  width: 18px;
`;
