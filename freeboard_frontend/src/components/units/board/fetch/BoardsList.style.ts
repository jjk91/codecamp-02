import styled from "@emotion/styled";
import { StepLabel } from "@material-ui/core";
import { Button } from "antd";

export const Wrapper = styled.div`
  line-height: 52px;
  text-align: center;
`;
export const WrapperTitleList = styled.div`
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
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Pageprev = styled.div``;
export const PageNext = styled.div``;

export const NewBoradWiter = styled(Button)``;
