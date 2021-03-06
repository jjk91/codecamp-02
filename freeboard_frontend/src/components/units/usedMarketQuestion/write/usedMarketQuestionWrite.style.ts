import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

// export const WrapperQuestion = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const WrapperHeadQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const QuestionDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionUser = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;

export const QuestionUserImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  margin-left: 4px;
`;

export const QuestionImg = styled.img`
  margin-right: 14px;
  height: 20px;
  width: 20px;
`;
export const QuestionTitle = styled.div``;

export const QuestionMid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const QuestionEdit = styled.div``;

export const QuestionEditClose = styled.img`
  height: 18px;
  width: 18px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const QuestionContents = styled.textarea`
  height: 108px;
  width: ${(props: any) => (props.isEdit ? "1200px" : "1140px")};
  resize: none;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  border-bottom: none;
`;
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperFooterQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  padding-left: ${(props: any) => (props.isEdit ? "0	" : "60px")};
`;

export const QuestionText = styled.div`
  line-height: 52px;
  color: gray;
`;

export const QuestionSubmit = styled.div`
  height: 52px;
  width: 91px;
  background-color: ${(props: any) => (props.isEdit ? "#FF8200	" : "#B9062F")};
  color: white;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;
