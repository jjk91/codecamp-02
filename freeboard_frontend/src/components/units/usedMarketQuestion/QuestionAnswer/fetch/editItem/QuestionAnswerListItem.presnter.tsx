import {
  Wrapper,
  QuestionMoveAnswer,
  MoveImg,
  AnswerHead,
  AnswerInfo,
  AnswerImg,
  AnswerDate,
  AnswerUser,
  AnswerContents,
  AnswerCreateAt,
  AnswerIcon,
  Update,
  Delet,
  AnswerMain,
} from "../QuestionAnswerList.style";
import { getDate } from "../../../../../../commons/libraries/utils";

import UsedMarketQuestion from "../../../write/usedMarketQuestionWrite.container";

export default function AnswerListItemUi(props) {
  // isEdit ===>  false

  return (
    <>
      {!props.isEdit && (
        <Wrapper>
          <QuestionMoveAnswer>
            <MoveImg src="/images/move.png" />
          </QuestionMoveAnswer>
          <AnswerInfo>
            <AnswerImg src="/images/ic_profile-96px.png" />
          </AnswerInfo>
          <AnswerMain>
            <AnswerHead>
              <AnswerDate>
                <AnswerUser>{props.data.user.name}</AnswerUser>
              </AnswerDate>

              <AnswerIcon>
                <Update
                  id={props.data._id}
                  onClick={props.onClickEdit}
                  src="/images/mode-24px.png"
                />
                <Delet
                  id={props.data._id}
                  onClick={props.onClickDelete}
                  src="/images/clear-24px 2.png"
                />
              </AnswerIcon>
            </AnswerHead>

            <AnswerContents>{props.data.contents}</AnswerContents>

            <AnswerCreateAt>{getDate(props.data.createdAt)}</AnswerCreateAt>
          </AnswerMain>
        </Wrapper>
      )}
      {props.isEdit && (
        <UsedMarketQuestion
          isEdit={true}
          data={props.data}
          handleUpdate={props.handleUpdate}
          onClickClose={props.onClickClose}
        />
      )}
    </>
  );
}
