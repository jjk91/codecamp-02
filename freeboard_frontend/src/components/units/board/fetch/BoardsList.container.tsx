import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import BoardsListUi from "./BoardsList.presnter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";

export default function BoardsList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  // const { data: count } = useQuery(FETCH_BOARD_COUNT);

  function onClickSubmit(event) {
    router.push(`/boards/${event.target.id}`); // router.push 는 페이지 이동을 위함
    // router.push('/boards/'+event.target.id )               // (`/파일위치/$`)
    //target 뒤에 id 값은 BoardsList.presnter.js 파일에 있는 ListTitle 에 있는 id ={data._id} 값
  }

  function onClickCreate() {
    router.push(`/boards/new`);
  }

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <BoardsListUi
      gql={data}
      startPage={startPage}
      lastPage={lastPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      onClickSubmit={onClickSubmit}
      onClickCreate={onClickCreate}
    />
  );
}
