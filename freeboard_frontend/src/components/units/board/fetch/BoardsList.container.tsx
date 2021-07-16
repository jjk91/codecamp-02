import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from '../detail/BoardDetail.queries'
import BoardsListUi from './BoardsList.presnter'
import { FETCH_BOARDS } from './BoardsList.queries'

export default function BoardsList (){

    // const { data } = useQuery(
    //     FETCH_BOARDS, refetchQueries [{query:FETCH_BOARDS}]
    //     )
    // const [board] = useQuery(FETCH_BOARD)

    
    const router = useRouter()
    

    const { data } = useQuery(
        FETCH_BOARDS ,
        FETCH_BOARD,
            {variables: {boardId: router.query.boardId}}
    )

    function onClickSubmit(event){
        router.push(`/boards/${event.target.id}`)  // router.push 는 페이지 이동을 위함
        // router.push('/boards/'+event.target.id )               // (`/파일위치/$`)
        //target 뒤에 id 값은 BoardsList.presnter.js 파일에 있는 ListTitle 에 있는 id ={data._id} 값
    }
    function onClickCreate(){
        router.push(`/boards/new`)
    }


    return(
        <BoardsListUi 
        gql={data}
        onClickSubmit={onClickSubmit}
        onClickCreate={onClickCreate}
        />
    )
}