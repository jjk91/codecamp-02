import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  height: ${(props) => (props.isEdit ? "230px" : "300px")};
  width: 1200px;
  /* background-color: ${(props) => (props.isEdit ? "purple" : "skyblue")}; */
  margin: auto;
  background-color: midnightblue;
`;

export const WrapperComment = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperHeadComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  color: white;
`;

export const CommentImg = styled.img`
  margin-right: 14px;
  height: 20px;
  width: 20px;
`;
export const CommentTitle = styled.div``;

export const CommentMid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentEdit = styled.div``;

export const CommentEditClose = styled.div`
  height: 18px;
  background-color: aqua;
  width: 18px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CommentWriter = styled.input`
  height: 52px;
  width: 180px;
  margin-right: 20px;
`;
export const CommentPassword = styled.input`
  height: 52px;
  width: 180px;
  margin-right: 20px;
`;
export const StarRate = styled(Rate)`
  color: yellow;
`;
export const CommentContents = styled.textarea`
  height: ${(props) => (props.isEdit ? "64px" : "108px")};
  width: 1200px;
  resize: none;
`;
export const WrapperGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperFooterComment = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentText = styled.div`
  line-height: 52px;
  color: gray;
`;

export const CommentSubmit = styled.div`
  height: 52px;
  width: 91px;
  background-color: ${(props) => (props.isEdit ? "#FF8200	" : "#B9062F")};
  color: ${(props) => (props.isEdit ? "white" : "white")};
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;
