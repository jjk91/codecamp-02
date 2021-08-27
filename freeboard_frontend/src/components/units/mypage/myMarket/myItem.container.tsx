import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import MyItemPageUi from "./myItem.presenter";
import {
  FETCH_USED_ITEMS_COUNT_ISOLD,
  FETCH_USED_ITEMS_COUNT_PICKED,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_ISOLD,
} from "./myItem.queries";

export default function MyItemPage() {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(true);

  const { data, refetch } = useQuery<Pick<IQuery, "fetchUseditemsISold">>(
    FETCH_USED_ITEMS_ISOLD,
    { variables: { page: page } }
  );

  const { data: dataCountSold } = useQuery(FETCH_USED_ITEMS_COUNT_ISOLD);

  const { data: PickData, refetch: PickRefetch } = useQuery(
    FETCH_USED_ITEMS_IPICKED,
    { variables: { page: page } }
  );

  const { data: dataCountPick } = useQuery(FETCH_USED_ITEMS_COUNT_PICKED);

  // const dataCount = isActive ? dataCountSold : dataCountPick;

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
      // dataCount={dataCount}
      dataCountSold={dataCountSold}
      dataCountPick={dataCountPick}
      isActive={isActive}
      onClickMyItemPage={onClickMyItemPage}
      onClickMyPick={onClickMyPick}
    />
  );
}
