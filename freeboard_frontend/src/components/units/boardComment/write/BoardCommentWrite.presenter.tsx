import {
  Wrapper,
  WrapperComment,
  WrapperHeadComment,
  CommentTop,
  CommentMid,
  CommentEdit,
  CommentEditClose,
  StarRate,
  CommentImg,
  CommentTitle,
  CommentWriter,
  CommentPassword,
  CommentContents,
  CommentText,
  CommentSubmit,
  WrapperGroup,
  WrapperFooterComment,
} from "./BoardCommentWrite.style";

export default function BoardCommentWriteUi(props: any) {
  return (
    // @ts-ignore
    <Wrapper isEdit={props.isEdit}>
      <WrapperComment>
        <WrapperHeadComment>
          {!props.isEdit && (
            <CommentTop>
              <CommentImg src="/images/Vector.png" />
              <CommentTitle>댓글</CommentTitle>
            </CommentTop>
          )}
          {props.isEdit && ""}

          <CommentMid>
            <CommentEdit>
              {!props.isEdit && (
                <CommentWriter
                  onChange={props.onChangeInputs}
                  name="writer"
                  type="text"
                  value={props.commentInput.writer}
                  // defaultValue={props.isEdit?.fetchBoardComment?.writer}
                  // readOnly={props.isEdit?.fetchBoardComment?.writer}
                  placeholder="작성자"
                />
              )}
              {props.isEdit && (
                <CommentWriter
                  onChange={props.onChangeInputs}
                  name="writer"
                  type="text"
                  defaultValue={props.data?.writer}
                  // readOnly={props.isEdit?.fetchBoardComment?.writer}
                  placeholder="작성자"
                />
              )}

              <CommentPassword
                onChange={props.onChangeInputs}
                name="password"
                type="password"
                value={props.commentInput.password}
                placeholder="비밀번호"
              />
              <StarRate onChange={props.onChangerate} />
            </CommentEdit>
            {props.isEdit && (
              <CommentEditClose
                // @ts-ignore
                isEdit={false}
                src="/images/clear-24px 2.png"
                onClick={props.onClickClose}
              />
            )}
          </CommentMid>
        </WrapperHeadComment>
        <WrapperGroup>
          {!props.isEdit && (
            <CommentContents
              onChange={props.onChangeInputs}
              name="contents"
              value={props.commentInput.contents}
              // defaultValue={props.isEdit?.fetchBoardComment?.contents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
          )}

          {props.isEdit && (
            <CommentContents
              onChange={props.onChangeInputs}
              name="contents"
              // value={props.commentInput.contents}
              defaultValue={props.data?.contents}
              placeholder="1개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
          )}
          <WrapperFooterComment>
            <CommentText>0/100</CommentText>
            {!props.isEdit && (
              // @ts-ignore
              <CommentSubmit onClick={props.onClickSumit} isEdit={false}>
                등록하기
              </CommentSubmit>
            )}
            {props.isEdit && (
              <CommentSubmit
                id={props.data?._id}
                onClick={props.onClickUpdate}
                // @ts-ignore
                isEdit={true}
              >
                수정하기
              </CommentSubmit>
            )}
          </WrapperFooterComment>
        </WrapperGroup>
      </WrapperComment>
    </Wrapper>
  );
}
