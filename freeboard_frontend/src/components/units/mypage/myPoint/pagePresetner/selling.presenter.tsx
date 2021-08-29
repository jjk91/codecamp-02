import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import Paginations01 from "../../../../commons/paginations/01/paginations01.container";

const DataSellingWrapper = styled.div`
  width: 1000px;
  text-align: center;
  line-height: 52px;
`;

const TableTitle = styled.div`
  display: flex;
  border-top: 2px solid midnightblue;
  border-bottom: 2px solid midnightblue;
`;

const TableLodindDate = styled.div`
  width: 15%;
`;

const TableSellingimpUid = styled.div`
  width: 35%;
`;

const TableSellingAmount = styled.div`
  width: 25%;
`;

const TableSellingBalance = styled.div`
  width: 25%;
`;

const TableList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cfcff4;
`;

const TableDate = styled.div`
  width: 15%;
`;

const TableimpUid = styled.div`
  width: 35%;
`;

const TableAmount = styled.div`
  width: 25%;
`;

const TableBalance = styled.div`
  width: 25%;
`;
const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export default function SellingPageUi(props: any) {
  return (
    <>
      <DataSellingWrapper>
        <TableTitle>
          <TableLodindDate>{"충전일"}</TableLodindDate>
          <TableSellingimpUid>{"제목"}</TableSellingimpUid>
          <TableSellingAmount>{"충전 내역"}</TableSellingAmount>
          <TableSellingBalance>{"충전 후 잔액"}</TableSellingBalance>
        </TableTitle>
        {props.data?.fetchPointTransactions
          .filter((el: any) => el.status === "판매")
          .map((data: any) => (
            <TableList key={uuidv4()}>
              <TableDate>{getDate(data.createdAt)}</TableDate>
              <TableimpUid>{data.useditem.name}</TableimpUid>
              <TableAmount>+{data.amount}</TableAmount>
              <TableBalance>{data.balance}</TableBalance>
            </TableList>
          ))}
        <PaginationsWrapper>
          <Paginations01
            refetch={props.refetch}
            startPage={props.page}
            setStartPage={props.setPage}
            dataCount={props.dataCount}
          />
        </PaginationsWrapper>
      </DataSellingWrapper>
    </>
  );
}
