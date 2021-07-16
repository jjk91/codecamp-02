import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";


export default function BoardEdit() {
  const isEdit = true;

  return <BoardWrite isEdit={isEdit} />;
}
