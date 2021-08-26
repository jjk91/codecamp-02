import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyPointPageUi from "./myPoint.presenter";
import {
  FETCH_POINT_TRANSACTION,
  FETCH_POINT_TRANSACTION_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTION_COUNT_OF_LODING,
  FETCH_POINT_TRANSACTION_COUNT_OF_SELLING,
} from "./myPoint.queries";

export default function MyPointPage() {
  const [page, setPage] = useState(1);
  const [fetchData, setFetchData] = useState();
  const [isActive, setIsActive] = useState(false);

  const { data } = useQuery(FETCH_POINT_TRANSACTION);
  console.log(data);
  const { data: buyingData } = useQuery(
    FETCH_POINT_TRANSACTION_COUNT_OF_BUYING
  );
  const { data: logingData } = useQuery(
    FETCH_POINT_TRANSACTION_COUNT_OF_LODING
  );
  const { data: sellingData } = useQuery(
    FETCH_POINT_TRANSACTION_COUNT_OF_SELLING
  );

  const onClickMoveFetch = () => {
    setFetchData(data);
    console.log(data);
  };
  const onClickMoveLoding = () => {
    setFetchData(buyingData);
    console.log(buyingData);
  };
  const onClickMoveBuying = () => {
    setFetchData(logingData);
    console.log(logingData);
  };
  const onClickMoveSeller = () => {
    setFetchData(sellingData);
    console.log(sellingData);
  };

  return (
    <MyPointPageUi
      page={page}
      setPage={setPage}
      isActive={isActive}
      setIsActive={setIsActive}
      // ===========데이터=========
      fetchData={fetchData}
      // ===========조회=========
      data={data}
      // ===========구매=========
      buyingData={buyingData}
      // ===========충전=========
      logingData={logingData}
      // ===========판매=========
      sellingData={sellingData}
      // =======================
      onClickMoveFetch={onClickMoveFetch}
      onClickMoveLoding={onClickMoveLoding}
      onClickMoveBuying={onClickMoveBuying}
      onClickMoveSeller={onClickMoveSeller}
    />
  );
}
