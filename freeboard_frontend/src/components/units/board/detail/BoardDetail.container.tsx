import { useRouter } from "next/router"
import { useQuery, useMutation } from "@apollo/client"
import BoardDetailUi from "./BoardDetail.presnter";
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'




export default function BoardDetail (){

    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(
        FETCH_BOARD,
        {variables: { boardId: router.query.boardId }}
    )

    async function onClickDelete(){
        try { 
            await deleteBoard({
                variables:{ boardId: router.query.boardId }
            })
            alert("해당 글을 삭제합니다.")
            router.push(`/boards/list/`)
        } catch(error){
            alert(error.message)
        }
    }
    
    async function onClickUpdate(){
        alert("해당 글을 수정합니다.")
            router.push(`/boards/${router.query.boardId}/edit`)
    }
    
    function onClickList (){
        router.push(`/boards/list/`)
    }



    return (
        <BoardDetailUi 
        data={data}
        onClickList = {onClickList}
        onClickDelete={onClickDelete}
        onClickUpdate={onClickUpdate}
        />
    )
}