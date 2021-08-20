import { gql, useQuery } from "@apollo/client";

import { useRouter } from "next/router";

import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WepEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  // if (typeof window === "undefined") return <></>;
  return (
    <>
      <div>
        작성자:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {data?.fetchBoard.writer}
        </span>
        제목:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {data?.fetchBoard.title}
        </span>
        내용:{" "}
        {typeof window === "undefined" ? ( // 22번째 내용 수정
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          ></div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
