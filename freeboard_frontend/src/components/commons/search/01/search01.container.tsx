import { ChangeEvent } from "react";
import SearchPageUi from "./search01.presenter";
import _ from "lodash";

export default function SearchPage(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.setSearch(data);
  }, 500);

  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  return (
    <>
      <SearchPageUi onChangeSearch={onChangeSearch} />
    </>
  );
}
