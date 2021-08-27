import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  line-height: 52px;
  text-align: center;
  margin: auto;
  padding-top: 80px;
`;

export const MyItemsTitleWrapper = styled.div`
  display: flex;
  border-top: 2px solid midnightblue;
  border-bottom: 2px solid midnightblue;
`;
export const MyItemWapper = styled.div``;
export const TitleNumber = styled.div`
  width: 10%;
`;

export const TitleName = styled.div`
  width: 30%;
`;

export const TitleSold = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
`;

export const TitlePrice = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
`;

export const TitleSeller = styled.div`
  width: ${(props: any) => (props.isActive ? "" : "15%")};
`;

export const TitleCreatedAt = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
`;

export const MyItemListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cfcff4;
`;

export const ListNumber = styled.div`
  width: 10%;
`;

export const ListName = styled.div`
  width: 30%;
`;
export const ListSold = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
  color: midnightblue;
`;

export const ListPrice = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
`;

export const ListSeller = styled.div`
  width: ${(props: any) => (props.isActive ? "" : "15%")};
`;

export const ListCreatedAt = styled.div`
  width: ${(props: any) => (props.isActive ? "20%" : "15%")};
`;

export const PageWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export const MyItem = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const MyPick = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "#cfcff4" : "midnightblue")};
`;

export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
