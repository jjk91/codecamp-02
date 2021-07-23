import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  height: 120px;
  display: flex;
  border-bottom: 1px solid gray;
  margin: auto;
`;

export const CommentInfo = styled.div`
  margin: 16px;
`;
export const CommentImg = styled.img`
  height: 40px;
  width: 40px;
`;
export const CommentMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CommentHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentDate = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentWriter = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;
export const Rating = styled(Rate)`
  line-height: 16px;
  font-size: 16px;
  color: aquamarine;
`;
export const CommentContents = styled.div`
  font-size: 16px;
`;
export const CommentCreateAt = styled.div`
  font-size: 12px;
`;
export const CommentIcon = styled.div``;
export const Update = styled.img`
  height: 18px;
  width: 18px;
`;
export const Delet = styled.img`
  height: 18px;
  width: 18px;
`;
