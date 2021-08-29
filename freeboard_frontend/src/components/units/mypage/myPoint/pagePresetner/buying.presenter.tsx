import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import Paginations01 from "../../../../commons/paginations/01/paginations01.container";

const DataBuyingWrapper = styled.div`
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

const TableBuyingContents = styled.div`
  width: 35%;
`;

const TableBuyingAmount = styled.div`
  width: 20%;
`;

const TableBuyingBalance = styled.div`
  width: 20%;
`;

const TableBuyingSeller = styled.div`
  width: 10%;
`;
const TableList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cfcff4;
`;

const TableContents = styled.div`
  width: 35%;
`;

const TableDate = styled.div`
  width: 15%;
`;

const TableAmount = styled.div`
  width: 20%;
`;

const TableBalance = styled.div`
  width: 20%;
`;

const TableSeller = styled.div`
  width: 10%;
`;

const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export default function BuyingPageUi(props: any) {
  return (
    <>
      <DataBuyingWrapper>
        <TableTitle>
          <TableLodindDate>{"거래일"}</TableLodindDate>
          <TableBuyingContents>{"제목"}</TableBuyingContents>
          <TableBuyingAmount>{"거래내역"}</TableBuyingAmount>
          <TableBuyingBalance>{"거래 후 잔액"}</TableBuyingBalance>
          <TableBuyingSeller>{"판매자"}</TableBuyingSeller>
        </TableTitle>
        {props.data?.fetchPointTransactions
          .filter((el: any) => el.status === "구매")
          .map((data: any) => (
            <TableList key={uuidv4()}>
              <TableDate>{getDate(data.createdAt)}</TableDate>
              <TableContents>{data.useditem.contents}</TableContents>
              <TableAmount>{data.amount}</TableAmount>
              <TableBalance>{data.balance}</TableBalance>
              <TableSeller>{data.useditem.name}</TableSeller>
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
      </DataBuyingWrapper>
    </>
  );
}
