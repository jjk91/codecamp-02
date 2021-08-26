import {
  TableWrapper,
  TableTitle,
  TableDate,
  TableStatus,
  TableAmount,
  TableBalance,
} from "../myPoint.style";

export default function FetchPageUi(props: any) {
  return (
    <>
      <TableWrapper>
        <TableTitle>
          <TableDate>{props.data?.createdAt}</TableDate>
          <TableStatus>{props.data?.status}</TableStatus>
          <TableAmount>45</TableAmount>
          <TableBalance>12341234</TableBalance>
        </TableTitle>
      </TableWrapper>
    </>
  );
}
