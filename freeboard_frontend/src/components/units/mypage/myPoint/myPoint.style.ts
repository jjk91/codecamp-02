import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const PageListWarpper = styled.div`
  display: flex;
`;

export const FetchPoint = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.data !== "" ? "midnightblue" : "#cfcff4")};
`;

export const FetchPoingOfLoding = styled.div`
  cursor: pointer;
  color: ${(props: any) =>
    props.buyingData !== "" ? "midnightblue" : "#cfcff4"};
`;

export const FetchPointOfBuying = styled.div`
  cursor: pointer;
  color: ${(props: any) =>
    props.logingData !== "" ? "midnightblue" : "#cfcff4"};
`;

export const FetchPoingOfSelling = styled.div`
  cursor: pointer;
  color: ${(props: any) =>
    props.sellingData !== "" ? "midnightblue" : "#cfcff4"};
`;

// ======= map 돌리는 구간 ====================
export const TableWrapper = styled.div``;

export const TableTitle = styled.div``;

export const TableDate = styled.div``;

export const TableStatus = styled.div``;

export const TableAmount = styled.div``;

export const TableBalance = styled.div``;
