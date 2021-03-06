import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
const FETHC_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const Column = styled.span`
  margin: 0px 50px;
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer; //page(span)위에 손가락 모양으로 변경
`;
export default function PaginationPage() {
  const { data, refetch } = useQuery<IQuery>(FETHC_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  return (
    <>
      <div>
        {data?.fetchBoards.map((data) => (
          <div key={data._id}>
            <Column>{data.writer}</Column>
            <Column>{data.title}</Column>
          </div>
        ))}

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
          <Page key={data} onClick={onClickPage} id={data}>
            {data}
          </Page>
        ))}
        {/* <Page>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Page>4</Page>
        <Page>5</Page>  */}
      </div>
    </>
  );
}
