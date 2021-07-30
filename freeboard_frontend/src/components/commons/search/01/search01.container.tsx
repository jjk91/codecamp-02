import { useQuery } from "@apollo/client";
import { ChangeEvent } from "react";
import { FETCH_BOARDS } from "./search01.querise";
import SearchPageUi from "./search01.presenter";
import { useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  }, 500);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce({ search: search, page: event.target.id });
  }
  return (
    <>
      <SearchPageUi data={data} onChangeSearch={onChangeSearch} />
    </>
  );
}
