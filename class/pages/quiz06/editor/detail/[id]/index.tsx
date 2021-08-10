import { gql, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const FETHC_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETHC_BOARD, {
    variables: { boardId: router.query.id },
  });
  if (typeof window === "undefined") return <></>;
  return (
    <>
      작성자: <span>{data?.fetchBoard.writer}</span>
      제목: <span>{data?.fetchBoard.title}</span>
      내용:{" "}
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.fetchBoard.contents),
        }}
      ></span>
    </>
  );
}
