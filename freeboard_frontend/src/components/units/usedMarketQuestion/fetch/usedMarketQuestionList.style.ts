import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 200px; */
  display: flex;
  border-bottom: 1px solid gray;
  margin: auto;
  background-color: red;
  color: white;
  padding-right: 10px;
`;

export const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Question = styled.div`
  height: 130px;
  display: flex;
  flex-direction: row;
`;

export const QuestionInfo = styled.div`
  margin: 16px;
`;

export const QuestionImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const QuestionMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const QuestionHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionDate = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuestionUser = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

export const QuestionContents = styled.div`
  font-size: 16px;
`;

export const QuestionCreateAt = styled.div`
  font-size: 12px;
`;

export const QuestionIcon = styled.div`
  width: 80px;
  padding: 3px 3px;
  display: flex;
  justify-content: space-between;
`;

export const Update = styled.img`
  height: 18px;
  width: 18px;
`;

export const Delet = styled.img`
  height: 18px;
  width: 18px;
`;

export const Answer = styled.img`
  height: 18px;
  width: 18px;
`;
