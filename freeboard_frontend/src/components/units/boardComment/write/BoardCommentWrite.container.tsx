import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import BoardCommentWriteUi from "./BoardCommentWrite.presnter"
import { CREATE_BOARD_COMMENT,FETCH_BOARD_COMMENTS } from "./BoardCommentWrite.queries"

const CommentInputInit = {
    writer: "",
    password: "",
    contents: ""
}


export default function BoardCommentWrite(props){

    const router = useRouter()
  
  
    const [commentInput, setCommentInput] = useState(CommentInputInit)

    const [createBoardComment] = useMutation<IMutation,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)


    function onChangeInputs(event:any){
        const newCommentInput = {
            ...commentInput,
            [event.target.name] : event.target.value
        }
        setCommentInput(newCommentInput)
    }

    async function onClickSumit(){
        try {
            const result = await createBoardComment({
                variables:{
                    boardId: String( router.query.boardId),
                    createBoardCommentInput: {
                        writer: commentInput.writer,                    
                        contents: commentInput.contents,
                        rating: 5,

                    }},
                    refetchQueries:[
                        { query: FETCH_BOARD_COMMENTS, variables:{
                            boardId: router.query.boardId
                        }}]
            })

            
            alert("등록되었습니다.")
            setCommentInput({writer:"", contents:"", password:""})
            // router.push(`/boards/${router.query.boardId}`) 
            // BoardDetail 페이지를 전체적으로 새로고침 비효율적
        } catch (error){
            alert(error.meessage)
        }
        

    }

    return(
        <BoardCommentWriteUi 
            commentInput = {commentInput}
            onChangeInputs={onChangeInputs}
            onClickSumit={onClickSumit}
            isEdit={props.isEdit}
        />
    )
}