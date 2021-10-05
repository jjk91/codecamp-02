import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardPage() {
  const isEdit = false;

  return <BoardWrite isEdit={isEdit} />;
}
