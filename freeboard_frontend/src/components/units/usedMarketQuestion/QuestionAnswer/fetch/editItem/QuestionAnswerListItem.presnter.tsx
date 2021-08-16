import {
  Wrapper,
  QuestionHead,
  QuestionInfo,
  QuestionImg,
  QuestionDate,
  QuestionUser,
  QuestionContents,
  QuestionCreateAt,
  QuestionIcon,
  Update,
  Delet,
  QuestionMain,
} from "../QuestionAnswerList.style";
import { getDate } from "../../../../../../commons/libraries/utils";

import UsedMarketQuestion from "../../../write/usedMarketQuestionWrite.container";

export default function AnswerListItemUi(props) {
  // isEdit ===>  false

  return (
    <>
      {!props.isEdit && (
        <Wrapper>
          <QuestionInfo>
            <QuestionImg src="/images/ic_profile-96px.png" />
          </QuestionInfo>
          <QuestionMain>
            <QuestionHead>
              <QuestionDate>
                <QuestionUser>{props.data.user.name}</QuestionUser>
              </QuestionDate>

              <QuestionIcon>
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
              </QuestionIcon>
            </QuestionHead>

            <QuestionContents>{props.data.contents}</QuestionContents>

            <QuestionCreateAt>{getDate(props.data.createdAt)}</QuestionCreateAt>
          </QuestionMain>
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
