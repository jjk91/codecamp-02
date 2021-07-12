

export default function BoardDetailUi(props){
    return (
        <>
            <div>작성자 {props.qqq?.fetchBoard.writer}님</div>         
            <div>글제목:{props.qqq?.fetchBoard.title}</div>
            <div>글내용:{props.qqq?.fetchBoard.contents}</div>
            {/* <div>상세보기{router.query.boardId} 화면입니다.</div> */}
        </>
    )
}