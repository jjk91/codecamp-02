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
    console.log(data)
    async function onClickDelete(){
        alert("해당 글을 삭제합니다.")
        
        try { 
            await deleteBoard({
                variables:{deleteBoard: router.query.boardId}

            })

            router.push(`/boards/list/`)
        } catch(error){
            alert(error.message)


        }
    
    
    
    }



    return (
        <BoardDetailUi 
        gql={data}
        onClickDelete={onClickDelete}
        />
    )
}