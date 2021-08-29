import {
  DataLodingWrapper,
  TableTitle,
  TableLodindDate,
  TableLodingimpUid,
  TableLodingAmount,
  TableLodingBalance,
  TableList,
  TableDate,
  TableimpUid,
  TableAmount,
  TableBalance,
  PaginationsWrapper,
} from "../myPoint.style";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import Paginations01 from "../../../../commons/paginations/01/paginations01.container";

export default function LodingPageUi(props: any) {
  return (
    <>
      <DataLodingWrapper>
        <TableTitle>
          <TableLodindDate>{"충전일"}</TableLodindDate>
          <TableLodingimpUid>{"결제ID"}</TableLodingimpUid>
          <TableLodingAmount>{"충전 내역"}</TableLodingAmount>
          <TableLodingBalance>{"충전 후 잔액"}</TableLodingBalance>
        </TableTitle>
        {props.data?.fetchPointTransactions
          .filter((el: any) => el.status === "충전")
          .map((data: any) => (
            <TableList key={uuidv4()}>
              <TableDate>{getDate(data.createdAt)}</TableDate>
              <TableimpUid>{data.impUid}</TableimpUid>
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
      </DataLodingWrapper>
    </>
  );
}
