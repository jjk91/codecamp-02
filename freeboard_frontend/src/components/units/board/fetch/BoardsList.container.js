import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from '../detail/BoardDetail.queries'
import BoardsListUi from './BoardList.presnter'
import { FETCH_BOARDS } from './BoardsList.queries'

export default function BoardsList (){

    // const { data } = useQuery(
    //     FETCH_BOARDS, refetchQueries [{query:FETCH_BOARDS}]
    //     )
    // const [board] = useQuery(FETCH_BOARD)

    const router = useRouter()
    const { data, board } = useQuery(
        FETCH_BOARDS ,
        FETCH_BOARD,
        {variables:{boardId: router.query.boardId}}
        )

    function onClickSubmit(event){
        // try{
        // const result = await board ({
        //     variables : {
        //         createBoardInput : {
        //             writer ,
        //             password ,
        //             title ,
        //             contents 
        //         }
        //       }
        // })
        router.push(`/boards/${event.target.id}`)
    // } catch (error){
    //     alert(error.message)
    // }




    }

    return(
        <BoardsListUi 
        gql={data}
        onClickSubmit={onClickSubmit}
        />
    )
}