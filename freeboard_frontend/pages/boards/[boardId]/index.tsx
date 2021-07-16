import BoardDetail from '../../../src/components/units/board/detail/BoardDetail.container'
import BoardDetailComment from '../../../src/components/units/boardComment/write/BoardCommentWrite.container'
import BoardCommentList from '../../../src/components/units/boardComment/fetch/BoardCommentList.container'



export default function DetailPage(){

    return( 
        <>
            <BoardDetail />
            <BoardDetailComment />
            <BoardCommentList/>
        </>
    )
    
}