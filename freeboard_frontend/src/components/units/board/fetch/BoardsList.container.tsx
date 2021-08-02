import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardsListUi from "./BoardsList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";

export default function BoardsList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  function onClickBoardDetail(event) {
    router.push(`/boards/${(event.target as Element).id}`);
  }

  // router.push 는 페이지 이동을 위함
  // router.push('/boards/'+event.target.id )
  // (`/파일위치/$`)
  //target 뒤에 id 값은 BoardsList.presnter.js 파일에 있는 ListTitle 에 있는 id ={data._id} 값

  function onClickCreate() {
    router.push(`/boards/new`);
  }

  // paginations 분리로 주석처리

  // function onClickPage(event) {
  //   refetch({ page: Number(event.target.id) });
  // }

  // function onClickPrevPage() {
  //   if (startPage <= 1) return;
  //   setStartPage((prev) => prev - 10);
  // }

  // function onClickNextPage() {
  //   if (startPage + 10 > lastPage) return;
  //   setStartPage((prev) => prev + 10);
  // }

  // function onChangeSearch() {
  //   setGetSearch(getSearch);
  // }

  return (
    <BoardsListUi
      data={data}
      startPage={startPage}
      setStartPage={setStartPage}
      dataBoardsCount={dataBoardsCount}
      search={search}
      setSearch={setSearch}
      refetch={refetch}
      onClickBoardDetail={onClickBoardDetail}
      onClickCreate={onClickCreate}
      // lastPage={lastPage}
      // onClickPrevPage={onClickPrevPage}  // paginations 분리로 주석처리
      // onClickNextPage={onClickNextPage}  // paginations 분리로 주석처리
      // onClickPage={onClickPage}  // paginations 분리로 주석처리
    />
  );
}
