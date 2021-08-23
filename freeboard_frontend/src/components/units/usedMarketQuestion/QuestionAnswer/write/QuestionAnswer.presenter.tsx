import {
  Wrapper,
  WrapperAnswer,
  QuestionMoveAnswer,
  MoveImg,
  WrapperGroup,
  AnswerWrapper,
  AnswerContents,
  WrapperFooterAnswer,
  AnswerText,
  AnswerSubmit,
} from "./QuestionAnswer.style";

export default function UesdMarketQuestionAnswerUi(props: any) {
  return (
    <Wrapper>
      <WrapperAnswer>
        <QuestionMoveAnswer>
          <MoveImg src="/images/move.svg" />
        </QuestionMoveAnswer>
        <WrapperGroup>
          <AnswerWrapper>
            {!props.isEdit && (
              <AnswerContents
                onChange={props.onChangeInputs}
                name="contents"
                // value={props.createUseditemQuestionInput.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            )}

            {props.isEdit && (
              <AnswerContents
                onChange={props.onChangeInputs}
                name="contents"
                defaultValue={props.data?.contents}
              />
            )}
          </AnswerWrapper>
          <WrapperFooterAnswer>
            <AnswerText>0/100</AnswerText>
            {!props.isEdit && (
              <AnswerSubmit onClick={props.onClickSumbit}>
                등록하기
              </AnswerSubmit>
            )}
            {props.isEdit && (
              <AnswerSubmit
                id={props.data?._id}
                onClick={props.onClickUpdate}
                // @ts-ignore
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
