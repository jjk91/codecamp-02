import CommentListItem from './editItem/BoardCommentListItem.container'

export default function BoardCommentListUi (props : any){


    return(
        <>
            {props.data?.fetchBoardComments.map(data =>

                
                <CommentListItem key={data._id} data={data} />
            )}
        </>
    )
} 