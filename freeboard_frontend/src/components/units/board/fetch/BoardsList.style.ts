import styled from "@emotion/styled";
import { Button } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  line-height: 52px;
  text-align: center;
  margin: auto;
`;
export const WrapperTitleList = styled.div`
  margin-top: 40px;
  border-top: 2px solid black;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export const TitleNumber = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;
export const TitleTitle = styled.div`
  width: 70%;
  border-bottom: 1px solid #bdbdbd;
`;
export const TitleWriter = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;
export const TitleDate = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;
export const ListNumber = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;
export const ListTitle = styled.div`
  width: 70%;
  border-bottom: 1px solid #bdbdbd;
  background-color: white;
  /* border: 1px solid #bdbdbd ; */
`;

export const ListWriter = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;

export const ListDate = styled.div`
  width: 10%;
  border-bottom: 1px solid #bdbdbd;
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
`;
export const BoardPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 230px;
  cursor: pointer;
`;

export const Pagination = styled.div`
  font-size: 18px;
  margin: 10px;
  color: ${(props) => (props.isActive ? "yellow" : "black")};
`;
//midnightblue
export const PagePrev = styled.img`
  margin: 10px;
  height: 12px;
  width: 7.5px;
`;
export const PageNext = styled.img`
  margin: 10px;
  height: 12px;
  width: 7.5px;
`;

export const NewBoradWiter = styled(Button)`
  width: 171px;
  height: 52px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const NewBoardImg = styled.img``;
export const NewBoardSubmit = styled.div``;
