import { useMutation } from "@apollo/client"
import CommentListItemUi from "./BoardCommentListItem.presnter"
import { UPDATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "../BoardCommentList.queries"
import { useState } from "react"
import { useRouter } from "next/router"
import { InputBase } from "@material-ui/core"

const inputInit = {
    writer : "",
    password : "",
    contents : ""
}


export default function CommentListItem (props){

    const router = useRouter()
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
    const[isEdit, setIsEdit] = useState(false)
    const[inputs, setInputs] = useState(inputInit)


    async function onClickDelete ( event ){
        alert(event.target.id)
        try{
           await deleteBoardComment({
            variables: {
              boardCommentId: (event.target.id)
            }, 
            refetchQueries :[{ query: FETCH_BOARD_COMMENTS
                , variables:{ boardId: router.query.boardId }}]
          })
          alert("댓글이 삭제되었습니다.")
        } catch (error){
          alert(error.message)
        }
    }
        

    function onClickEdit () {
        setIsEdit(true)
    
    }

    function onClickUpdate (){
        const newInputs = {}
        if(inputs.writer) newInputs.writer = inputs.wirter
        if(inputs.contents) newInputs.contents = inputs.contents

        if(Object.values(newInputs).every( data => data )){
            try {
                updateBoardComment({
                    variables:{
                        boardCommentId : router.query.boardCommentId,
                        password :inputs.password,
                        updateBoardCommentInput: { ...newInputs }
                    }
                })            
                alert("해당 댓글을 수정합니다.")
          } catch (error){
            alert(error.message)
          }

        }

    }

    return(
        <CommentListItemUi 
        data = {props.data}
        onClickUpdate={onClickUpdate}
        onClickEdit = {onClickEdit}
        onClickDelete = {onClickDelete}
        isEdit = {isEdit} />
    )

}