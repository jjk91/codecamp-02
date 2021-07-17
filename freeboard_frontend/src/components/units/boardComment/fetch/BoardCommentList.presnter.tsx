import { getDate } from '../../../../commons/libraries/utils'
import {Wrapper
    , Comment
    , CommentHead
    , CommentInfo
    , CommentImg
    , CommentDate
    , CommentWiter
    , CommentContents 
    , CommentCreateAt
    , CommentIcon
    , Update
    , Close
    , CommentMain } from './BoardCommentList.style'

export default function BoardCommentListUi (props){


    return(
        <>
            <Wrapper>
                {props.data?.fetchBoardComments.map(data =>
                <Comment key={data._id}>
                    <CommentInfo>
                        <CommentImg src="/images/ic_profile-96px.png"/>
                    </CommentInfo>
                    <CommentMain>
                        <CommentHead>

                            <CommentDate>
                                <CommentWiter>{data.writer}</CommentWiter> 
                            </CommentDate>

                            <CommentIcon>
                                <Update onClick={props.onClickEdit} src="/images/mode-24px.png" />
                                <Close id={data._id} onClick={props.onClickDelete} src="/images/clear-24px 2.png" />
                            </CommentIcon>

                        </CommentHead>

                        <CommentContents>{data.contents}</CommentContents>

                        <CommentCreateAt>{getDate(data.createdAt)}</CommentCreateAt>
                    </CommentMain>
                </Comment>
                )}
            </Wrapper>
        </>
    )
} 