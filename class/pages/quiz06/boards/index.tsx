import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Colunm = styled.div`
  color: red;
`;
const BoardBasket = styled.button``;

export default function Quiz06Pqge() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (boardDate) => () => {
    const boardBaskets = JSON.parse(
      localStorage.getItem("boardBaskets") || "[]"
    );
    let isExists = false;
    boardBaskets.forEach((data) => {
      if (data._id === boardDate._id) isExists = true;
    });
    if (isExists) return;
    boardBaskets.push(boardDate);
    localStorage.setItem("boardBaskets", JSON.stringify(boardBaskets));
  };

  const onClickDelete = (boardDate) => () => {
    const boardBaskets = JSON.parse(
      localStorage.getItem("boardBaskets") || "[]"
    );
    let ba = boardBaskets.filter((data) => data._id !== boardDate._id);
    boardBaskets.push(boardDate);
    localStorage.setItem("boardBaskets", JSON.stringify(ba));
  };

  return (
    <>
      {data?.fetchBoards.map((data) => (
        <Wrapper key={data._id}>
          작성자: <Colunm>{data.writer}</Colunm>
          제목: <Colunm>{data.title}</Colunm>
          내용: <Colunm>{data.contents}</Colunm>
          <BoardBasket onClick={onClickBasket(data)}>
            {"게시판 담기"}
          </BoardBasket>
          <BoardBasket onClick={onClickDelete(data)}>{"담기 취소"}</BoardBasket>
        </Wrapper>
      ))}
    </>
  );
}
