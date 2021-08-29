import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 80px 0;
`;

export const PageListWarpper = styled.div`
  width: 350px;
  line-height: 52px;
  display: flex;
  justify-content: space-between;
`;

export const FetchPoint = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const FetchPoingOfLoding = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const FetchPointOfBuying = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const FetchPoingOfSelling = styled.div`
  cursor: pointer;
  color: ${(props: any) => (props.isActive ? "midnightblue" : "#cfcff4")};
`;

export const TableWrapper = styled.div`
  /* display: flex; */
`;
// ============= 충전내역 ====================
export const DataLodingWrapper = styled.div`
  width: 1000px;
  text-align: center;
  line-height: 52px;
`;

export const TableLodindDate = styled.div`
  width: 15%;
  color: ${(props: any) =>
    props.isStatus === "구매" ? "#cfcff4" : "midnightblue"};
`;

export const TableLodingimpUid = styled.div`
  width: 35%;
`;

export const TableLodingAmount = styled.div`
  width: 30%;
`;

export const TableLodingBalance = styled.div`
  width: 20%;
`;

// ============= 구매내역 ====================

// ======= map 돌리는 구간 ====================
export const DataWrapper = styled.div`
  width: 1000px;
  text-align: center;
  line-height: 52px;
`;

export const TableList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cfcff4;
`;

export const TableTitle = styled.div`
  display: flex;
  border-top: 2px solid midnightblue;
  border-bottom: 2px solid midnightblue;
`;

export const TableDate = styled.div`
  width: 15%;
`;

export const TableimpUid = styled.div`
  width: 35%;
`;

export const TableStatus = styled.div`
  width: 35%;
`;

export const TableAmount = styled.div`
  width: 30%;
`;

export const TableBalance = styled.div`
  width: 20%;
`;

export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
