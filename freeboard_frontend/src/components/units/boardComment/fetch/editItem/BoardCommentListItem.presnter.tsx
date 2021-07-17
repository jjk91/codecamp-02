import {Wrapper
    , CommentHead
    , CommentInfo
    , CommentImg
    , CommentDate
    , CommentWiter
    , CommentContents 
    , CommentCreateAt
    , CommentIcon
    , Update
    , Delet
    , CommentMain } from '../BoardCommentList.style'
import { getDate } from "../../../../../commons/libraries/utils";

export default function CommentListItemUi (props){

    // isEdit ===>  false

    return(
        <>
            {!props.isEdit && (<Wrapper>
                <CommentInfo>
                    <CommentImg src="/images/ic_profile-96px.png"/>
                </CommentInfo>
                <CommentMain>
                    <CommentHead>

                        <CommentDate>
                            <CommentWiter>{props.data.writer}</CommentWiter> 
                        </CommentDate>

                        <CommentIcon>
                            <Update id={props.data._id} onClick={props.onClickEdit} src="/images/mode-24px.png" />
                            <Delet id={props.data._id} onClick={props.onClickDelete} src="/images/clear-24px 2.png" />
                        </CommentIcon>

                    </CommentHead>

                    <CommentContents>{props.data.contents}</CommentContents>

                    <CommentCreateAt>{getDate(props.data.createdAt)}</CommentCreateAt>
                </CommentMain>
            </Wrapper>)
            }
            {props.isEdit &&  (
                <div>수정화면입니다</div>
            )}
        </>
    )

}