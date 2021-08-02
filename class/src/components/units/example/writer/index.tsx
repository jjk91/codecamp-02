import { useContext } from "react";
import { Editcontext } from "../../../../../pages/example/context/edit";

export default function WriterPage() {
  const { isEdit } = useContext(Editcontext);

  return (
    <>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </>
  );
}
