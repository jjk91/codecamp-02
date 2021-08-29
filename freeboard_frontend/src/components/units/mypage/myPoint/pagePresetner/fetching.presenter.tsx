import {
  DataWrapper,
  TableTitle,
  TableDate,
  TableStatus,
  TableAmount,
  TableBalance,
  TableList,
  PaginationsWrapper,
} from "../myPoint.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import Paginations01 from "../../../../commons/paginations/01/paginations01.container";

export default function FetchPageUi(props: any) {
  return (
    <>
      <DataWrapper>
        <TableTitle>
          <TableDate>{"날짜"}</TableDate>
          <TableStatus>{"내용"}</TableStatus>
          <TableAmount>{"거래 및 충전 내역"}</TableAmount>
          <TableBalance>{"잔액"}</TableBalance>
        </TableTitle>
        {props.data?.fetchPointTransactions.map((data: any) => (
          <TableList key={uuidv4()}>
            <TableDate>{getDate(data.createdAt)}</TableDate>
            <TableStatus
              style={{
                color: `${data.status === "충전" ? "midnightblue" : "#cfcff4"}`,
              }}
            >
              {data.status}
            </TableStatus>
            <TableAmount style={{ color: "midnightblue" }}>
              {data.amount}
            </TableAmount>
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
      </DataWrapper>
    </>
  );
}
