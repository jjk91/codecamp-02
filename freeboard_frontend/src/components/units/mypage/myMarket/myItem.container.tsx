import { useQuery } from "@apollo/client";
import { useState } from "react";
// import { useRouter } from "next/router";
import MyItemPageUi from "./myItem.presenter";
import {
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_ISOLD,
} from "./myItem.queries";

export default function MyItemPage() {
  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_ISOLD);
  
  const { data: PickData, refetch: PickRefetch } = useQuery(
    FETCH_USED_ITEMS_IPICKED
  );
  const [isActive, setIsActive] = useState(false);

  const dataCount = isActive
    ? data?.fetchUseditemsISold
    : PickData?.fetchUseditemsIPicked;

  const onClickMyItemPage = () => {
    setIsActive(true);
  };

  const onClickMyPick = () => {
    setIsActive(false);
  };

  return (
    <MyItemPageUi
      data={data}
      PickData={PickData}
      refetch={refetch}
      PickRefetch={PickRefetch}
      page={page}
      setPage={setPage}
      dataCount={dataCount}
      isActive={isActive}
      setIsActive={setIsActive}
      onClickMyItemPage={onClickMyItemPage}
      onClickMyPick={onClickMyPick}
    />
  );
}
