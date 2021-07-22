import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListUi from "./BoardsList.presnter";
import { FETCH_BOARDS } from "./BoardsList.queries";

export default function BoardsList() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS);

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
    refetch();
  }

  return (
    <BoardsListUi
      gql={data}
      onClickPage={onClickPage}
      onClickSubmit={onClickSubmit}
      onClickCreate={onClickCreate}
    />
  );
}
