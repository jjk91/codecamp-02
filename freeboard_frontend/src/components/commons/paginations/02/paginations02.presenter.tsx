import { Paginations, PageMove, Page } from "./paginations02.styles";

export default function Paginations02Ui(props: any) {
  // console.log(props.lastPage);
  return (
    <Paginations>
      <PageMove onClick={props.onClickPrevPage}>{"<"}</PageMove>

      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        // console.log(currentPage);
        return (
          currentPage <= props.lastPage && (
            <Page
              key={currentPage}
              id={currentPage}
              onClick={props.onClickPage}
              isActive={currentPage === props.activePage}
            >
              {currentPage}
            </Page>
          )
        );
      })}

      <PageMove onClick={props.onClickNextPage}>{">"}</PageMove>
    </Paginations>
  );
}
