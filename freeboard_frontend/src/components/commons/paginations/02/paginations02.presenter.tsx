import { Paginations, PageMove, Page } from "./paginations02.styles";

export default function Paginations02Ui(props: any) {
  return (
    <Paginations>
      <PageMove onClick={props.onClickPrevPage}>{"<"}</PageMove>

      {props.lastPage &&
        new Array(props.lastPage - props.startPage > 10 ? 10 : props.lastPage)
          .fill(1)
          .map((_, index) => {
            const currentPage =
              props.startPage < 10
                ? index + 1
                : 10 * Math.trunc(props.startPage / 10) + (index + 1);
            return (
              // currentPage <= props.lastPage && (
              <Page
                key={currentPage}
                id={String(currentPage)}
                onClick={props.onClickPage}
                isActive={currentPage === props.activePage}
              >
                {currentPage}
              </Page>
            );
            // );
          })}

      <PageMove onClick={props.onClickNextPage}>{">"}</PageMove>
    </Paginations>
  );
}
