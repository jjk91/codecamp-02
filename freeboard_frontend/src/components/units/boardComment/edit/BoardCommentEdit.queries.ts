import { gql } from "@apollo/client";

export const UPDATE_BOARD_COMMENT = gql`
    mutation updateBoardComment($updateBoardCommentInput : updateBoardCommentInput, password : String, boardCommentId : ID! ){
        updateBoardComment(UpdateBoardCommentInput : $updateBoardCommentInput, )
    }
`;
