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

  const [myMenu, setMyMenu] = useState("AllData");

  const { data, refetch } = useQuery(FETCH_POINT_TRANSACTION, {
    variables: { page: page },
  });

  const [fetchData, setFetchData] = useState(data);

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
    setMyMenu("AllData");
  };
  const onClickMoveLoding = () => {
    // setFetchData(logingData);
    setFetchData(data);
    setMyMenu("LodingData");
  };
  const onClickMoveBuying = () => {
    setFetchData(data);
    // setFetchData(buyingData);
    setMyMenu("BuyingData");
  };
  const onClickMoveSeller = () => {
    // setFetchData(sellingData);
    setFetchData(data);
    setMyMenu("SellingData");
  };

  return (
    <MyPointPageUi
      page={page}
      setPage={setPage}
      refetch={refetch}
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
      myMenu={myMenu}
    />
  );
}
