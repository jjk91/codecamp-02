import { useState } from "react";
import Paginations01Ui from "./paginations01.presenter";

export default function Paginations01(props: any) {
  const [activePage, setActivePage] = useState(1);
  const lastPage = Math.ceil(props.dataBoardsCount / 10);

  function onClickPage(event: any) {
    setActivePage(Number(event.target.id));
    props.refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    props.setStartPage((prev: any) => prev - 10);
    setActivePage(props.startPage - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    props.setStartPage((prev: any) => prev + 10);
    setActivePage(props.startPage + 10);
  }

  return (
    <>
      <Paginations01Ui
        lastPage={lastPage}
        startPage={props.startPage}
        activePage={activePage}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
      />
    </>
  );
}
