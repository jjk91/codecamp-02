import { Wrapper
    , WrapperComment
    , WrapperHeadComment
    , CommentTop
    , CommentMid
    , CommentImg
    , CommentTitle
    , CommentWriter
    , CommentPassword
    , CommentContents
    , CommentText
    , CommentSubmit
    , WrapperBodyComment
    , WrapperGroup
    , WrapperFooterComment  } from "./BoardCommentWrite.style"

export default function BoardCommentWriteUi(props){

    return(
        <Wrapper>
            <WrapperComment>
                <WrapperHeadComment>

                    <CommentTop>
                        <CommentImg  src="/images/Vector.png"/>
                        <CommentTitle>댓글</CommentTitle>
                    </CommentTop>
                    
                    <CommentMid>
                        <CommentWriter
                            onChange={props.onChangeInputs}
                            name="writer" 
                            type="text" 
                            value={props.commentInput.writer}
                            placeholder="작성자"/>
                            
                        <CommentPassword
                            onChange={props.onChangeInputs}
                            name="password"
                            type="password"
                            value={props.commentInput.password}
                            placeholder="비밀번호" />
                    </CommentMid>
                    
                </WrapperHeadComment>
                <WrapperGroup>
                    <WrapperBodyComment>
                        <CommentContents 
                            onChange ={props.onChangeInputs}
                            name="contents"
                            value={props.commentInput.contents}
                            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
                            이에 대한 민형사상 책임은 게시자에게 있습니다."
                            /> 
                    </WrapperBodyComment> 
                    <WrapperFooterComment> 
                        <CommentText>0/100</CommentText>
                        <CommentSubmit onClick={props.onClickSumit}>등록하기</CommentSubmit>
                    </WrapperFooterComment> 
                </WrapperGroup>
            </WrapperComment>
        </Wrapper>


    ) 
}