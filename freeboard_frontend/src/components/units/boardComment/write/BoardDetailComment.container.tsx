import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types";
import BoardDetailCommentUi from "./BoardDetailComment.presnter";
import { CREATE_BOARD_COMMENT } from "./BoardDetailComment.queries";

const CommentInputInit = {
    writer: "",
    password: "",
    contents: ""
}


export default function BoardDetailComment(){

    const [commentInput, setCommentInput] = useState(CommentInputInit)

    const [createBoardComment] = useMutation<IMutation,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)


    function onChangeInputs(event){
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
                        rating: 1.1,
                    
                    }}
            })
            alert("등록되었습니다.")
            router.push(`/boards/${router.query.boardId}`)
        } catch (error){
            alert(error.meessage)
        }
        

    }

    return(
        <BoardDetailCommentUi 
            onChangeInputs={onChangeInputs}
            onClickSumit={onClickSumit}
        />
    )
}