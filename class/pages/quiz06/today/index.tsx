import { gql, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

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

export default function TodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const date = new Date();

  const onClickDate = (clickDate) => () => {
    const clickBaskets = JSON.parse(
      localStorage.getItem(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      ) || "[]"
    );
    let isExists = false;
    clickBaskets.forEach((data) => {
      if (data._id === clickDate._id) isExists = true;
    });
    if (isExists) return;
    clickBaskets.push(clickDate);
    localStorage.setItem(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      JSON.stringify(clickBaskets)
    );
  };

  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div
          key={uuidv4()}
          onClick={onClickDate(data)}
          style={{
            cursor: "pointer",
            display: "flex",
          }}
        >
          작성자:<span>{data.writer}</span>
          제목:<span>{data.title}</span>
          내용:<span>{data.contents}</span>
        </div>
      ))}
    </>
  );
}
