import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($aaa: ID!) {
    deleteBoard(boardId: $aaa)
  }
`;

const Row = styled.div`
  height: 40px;
  border-bottom: 1px solid gray;
  line-height: 40px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 7%;
`;
const Column2 = styled.div`
  width: 25%;
`;

export default function Map3Page() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function ocClickDelete(event) {
    alert("해당 글을 삭제합니다.");

    try {
      await deleteBoard({
        variables: { aaa: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }], // 새로고침
      });
      alert("삭제가 완료되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Row>
        <Column>
          <input type="checkbox" />
        </Column>
        {/* <Column>번호</Column> */}
        <Column2>작성자</Column2>
        <Column2>제목</Column2>
        <Column2>작성일</Column2>
      </Row>

      {data?.fetchBoards.map((data) => (
        <Row key={data._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          {/* <Column>{index}</Column> */}
          <Column2>{data.writer}</Column2>
          <Column2>{data.title}</Column2>
          <Column2>{getDate(data.createdAt)}</Column2>
          <Column>
            <button id={data._id} onClick={ocClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
