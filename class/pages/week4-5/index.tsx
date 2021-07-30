import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const InputSearch = styled.input``;
const BoardWrapper = styled.div``;
const Board = styled.span`
  padding: 0px 50px;
`;
const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

export default function Week4Page() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  });

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  function onClickPageMove(event: MouseEvent<HTMLSpanElement>) {
    refetch({ search: search, page: Number((event.target as Element).id) });
  }

  return (
    <>
      <InputSearch type="text" onChange={onChangeSearch} />
      <button>검색하기</button>
      {data?.fetchBoards.map((data) => (
        <BoardWrapper key={data._id}>
          <Board>{data.writer}</Board>
          <Board>{data.title}</Board>
          <Board>{data.createdAt}</Board>
        </BoardWrapper>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPageMove}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
