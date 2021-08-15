import {
  Wrapper,
  WrapperAnswer,
  WrapperHeadAnswer,
  AnswerTop,
  AnswerImg,
  AnswerTitle,
  AnswerMid,
  AnswernEdit,
  AnswerEditClose,
  WrapperGroup,
  AnswerWrapper,
  AnswerUserImg,
  AnswerContents,
  AnswerDate,
  AnswerUser,
  WrapperFooterAnswer,
  AnswerText,
  AnswerSubmit,
} from "./QuestionAnswer.style";

export default function UesdMarketQuestionAnswerUi(props) {
  return (
    <Wrapper isEdit={props.isEdit}>
      <WrapperAnswer>
        <WrapperHeadAnswer>
          <AnswerMid>
            {props.isEdit && (
              <AnswerEditClose
                isEdit={false}
                src="/images/clear-24px 2.png"
                onClick={props.onClickClose}
              />
            )}
          </AnswerMid>
        </WrapperHeadAnswer>
        <WrapperGroup>
          <AnswerWrapper>
            {props.isEdit && (
              <AnswerUserImg src="/images/ic_profile-96px.png" />
            )}
            {!props.isEdit && (
              <AnswerContents
                onChange={props.onChangeInputs}
                name="contents"
                // value={props.createUseditemQuestionInput.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            )}

            {props.isEdit && (
              <AnswerDate>
                <AnswerUser>{props.data.user.name}</AnswerUser>
                <AnswerContents
                  onChange={props.onChangeInputs}
                  name="contents"
                  defaultValue={props.data?.contents}
                />
              </AnswerDate>
            )}
          </AnswerWrapper>
          <WrapperFooterAnswer>
            <AnswerText>0/100</AnswerText>
            {!props.isEdit && (
              <AnswerSubmit onClick={props.onClickSumit} isEdit={false}>
                등록하기
              </AnswerSubmit>
            )}
            {props.isEdit && (
              <AnswerSubmit
                id={props.data?._id}
                onClick={props.onClickUpdate}
                isEdit={true}
              >
                수정하기
              </AnswerSubmit>
            )}
          </WrapperFooterAnswer>
        </WrapperGroup>
      </WrapperAnswer>
    </Wrapper>
  );
}
