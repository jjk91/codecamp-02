import {
  DataLodingWrapper,
  TableTitle,
  TableLodindDate,
  TableLodingimpUid,
  TableLodingAmount,
  TableLodingBalance,
  TableList,
  TableDate,
  TableStatus,
  TableAmount,
  TableBalance,
} from "../myPoint.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";

export default function BuyingPageUi(props: any) {
  return (
    <>
      <DataLodingWrapper>
        <TableTitle>
          <TableLodindDate>{"충전일"}</TableLodindDate>
          <TableLodingimpUid>{"결제Id"}</TableLodingimpUid>
          <TableLodingAmount>{"충전 내역"}</TableLodingAmount>
          <TableLodingBalance>{"충전 후 잔액"}</TableLodingBalance>
        </TableTitle>
        {console.log(props.data.fetchPointTransactions)}
        {props.data?.fetchPointTransactions.map((data: any) => (
          <TableList key={uuidv4()}>
            <TableDate>{getDate(data.createdAt)}</TableDate>
            <TableStatus>{data.status}</TableStatus>
            <TableAmount>{data.amount}</TableAmount>
            <TableBalance>{data.balance}</TableBalance>
          </TableList>
        ))}
      </DataLodingWrapper>
    </>
  );
}
