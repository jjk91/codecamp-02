import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentListUi from './BoardCommentList.presnter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'

export default function BoardCommentList (){

  const router = useRouter()
  
  const { data } = useQuery(
    FETCH_BOARD_COMMENTS,
    {variables:{ boardId: router.query.boardId }}
    )
    
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
  
  


  // async function onClickDelete (event){
  //   alert(event.target.id)
  //   try{
  //      await deleteBoardComment({
  //       variables: {
  //         boardCommentId: (event.target.id)
  //       }, 
  //       refetchQueries :[
  //         { query: FETCH_BOARD_COMMENTS, variables:{
  //           boardId: router.query.boardId
  //       }}]
        
  //     })
  //     alert("댓글이 삭제되었습니다.")
  //   } catch (error){
  //     alert(error.message)

  //   }
  // }




    return(
    <BoardCommentListUi
     data={data}
    />
      
    )
}