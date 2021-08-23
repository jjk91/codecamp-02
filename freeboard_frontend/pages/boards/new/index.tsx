import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function Home() {
  const isEdit = false;

  return <BoardWrite isEdit={isEdit} />;
}
