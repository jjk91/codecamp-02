import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"



const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            title
            contents
        }
    }
`

export default function BoardEdit (){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId }
    })
    const isEdit = (true)

    return(
        <BoardWrite
        isEdit={isEdit}
        data={data}/>
    )

}