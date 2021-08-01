import { getDate } from "../../../../commons/libraries/utils";
import SearchPage from "../../../commons/search/01/search01.container";
import {
  Wrapper,
  WrapperTitleList,
  TitleNumber,
  TitleTitle,
  TitleWriter,
  TitleDate,
  WrapperList,
  ListNumber,
  ListTitle,
  ListWriter,
  ListDate,
  WrapperFooter,
  BoardPagination,
  Pagination,
  PagePrev,
  PageNext,
  NewBoradWiter,
  NewBoardImg,
  NewBoardSubmit,
} from "./BoardsList.style";
import Paginations01 from "../../../commons/paginations/01/paginations01.container";

export default function BoardDetailUi(props: IBoardDetailUiProps) {
  return (
    <Wrapper>
      <SearchPage
        data={props.data}
        refetch={props.refetch}
        search={props.search}
        setSearch={props.setSearch}
      />
      <WrapperTitleList>
        <TitleNumber>번호</TitleNumber>
        <TitleTitle>제목</TitleTitle>
        <TitleWriter>작성자</TitleWriter>
        <TitleDate>날짜</TitleDate>
      </WrapperTitleList>
      {props.data?.fetchBoards.map((data, index) => (
        <WrapperList>
          <ListNumber>{10 - index}</ListNumber>
          <ListTitle id={data._id} onClick={props.onClickBoardDetail}>
            {data.title}
          </ListTitle>
          <ListWriter>{data.writer}</ListWriter>
          <ListDate>{getDate(data.createdAt)}</ListDate>
        </WrapperList>
      ))}
      <WrapperFooter>
        <Paginations01
          refetch={props.refetch}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          dataBoardsCount={props.dataBoardsCount?.fetchBoardsCount}
        />
        {/* <BoardPagination>
          <PagePrev
            src="/images/Vector (1).png"
            onClick={props.onClickPrevPage}
          />
          {new Array(10).fill(1).map((_, index) => {
            const currentPage = props.startPage + index;
            return (
              currentPage <= props.lastPage && (
                <Pagination
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                >
                  {currentPage}
                </Pagination>
              )
            );
          })}
          <PageNext
            src="/images/Vector (2).png"
            onClick={props.onClickNextPage}
          />
        </BoardPagination> */}
        <NewBoradWiter>
          <NewBoardSubmit onClick={props.onClickCreate}>
            <NewBoardImg src="/images/mode-24px.png" />
            등록하기
          </NewBoardSubmit>
        </NewBoradWiter>
      </WrapperFooter>
    </Wrapper>
  );
}
