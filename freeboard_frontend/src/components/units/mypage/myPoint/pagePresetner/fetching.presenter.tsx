import {
  DataWrapper,
  TableTitle,
  TableDate,
  TableStatus,
  TableAmount,
  TableBalance,
  TableList,
} from "../myPoint.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";

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
            <TableStatus>{data.status}</TableStatus>
            <TableAmount>{data.amount}</TableAmount>
            <TableBalance>{data.balance}</TableBalance>
          </TableList>
        ))}
      </DataWrapper>
    </>
  );
}
