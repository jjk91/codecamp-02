import {
  Wrapper,
  WrapperQuestion,
  WrapperHeadQuestion,
  QuestionTop,
  QuestionDate,
  QuestionMid,
  QuestionUser,
  QuestionUserImg,
  QuestionEdit,
  QuestionEditClose,
  QuestionImg,
  QuestionTitle,
  QuestionContents,
  QuestionText,
  QuestionSubmit,
  WrapperGroup,
  QuestionWrapper,
  WrapperFooterQuestion,
} from "./usedMarketQuestionWrite.style";

export default function UsedMarketQuestionUi(props) {
  return (
    <Wrapper isEdit={props.isEdit}>
      <WrapperQuestion>
        <WrapperHeadQuestion>
          {!props.isEdit && (
            <QuestionTop>
              <QuestionImg src="/images/Vector.png" />
              <QuestionTitle>문의하기</QuestionTitle>
            </QuestionTop>
          )}
          {props.isEdit && ""}

          <QuestionMid>
            <QuestionEdit></QuestionEdit>
            {props.isEdit && (
              <QuestionEditClose
                isEdit={false}
                src="/images/clear-24px 2.png"
                onClick={props.onClickClose}
              />
            )}
          </QuestionMid>
        </WrapperHeadQuestion>
        <WrapperGroup>
          <QuestionWrapper>
            {props.isEdit && (
              <QuestionUserImg src="/images/ic_profile-96px.png" />
            )}
            {!props.isEdit && (
              <QuestionContents
                onChange={props.onChangeInputs}
                name="contents"
                // value={props.createUseditemQuestionInput.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            )}

            {props.isEdit && (
              <QuestionDate>
                <QuestionUser>{props.data.user.name}</QuestionUser>
                <QuestionContents
                  onChange={props.onChangeInputs}
                  name="contents"
                  defaultValue={props.data?.contents}
                />
              </QuestionDate>
            )}
          </QuestionWrapper>
          <WrapperFooterQuestion>
            <QuestionText>0/100</QuestionText>
            {!props.isEdit && (
              <QuestionSubmit onClick={props.onClickSumit} isEdit={false}>
                등록하기
              </QuestionSubmit>
            )}
            {props.isEdit && (
              <QuestionSubmit
                id={props.data?._id}
                onClick={props.onClickUpdate}
                isEdit={true}
              >
                수정하기
              </QuestionSubmit>
            )}
          </WrapperFooterQuestion>
        </WrapperGroup>
      </WrapperQuestion>
    </Wrapper>
  );
}
