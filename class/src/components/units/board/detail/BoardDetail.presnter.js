export default function BoardDetailUi(props) {
  return (
    <>
      <div>작성자 {props.gql?.fetchBoard.writer}님</div>
      <div>글제목:{props.gql?.fetchBoard.title}</div>
      <div>글내용:{props.gql?.fetchBoard.contents}</div>
      <button onClick={props.onClickEdit}>수정하기</button>
      {/* <div>상세보기{router.query.boardId} 화면입니다.</div> */}
    </>
  );
}
