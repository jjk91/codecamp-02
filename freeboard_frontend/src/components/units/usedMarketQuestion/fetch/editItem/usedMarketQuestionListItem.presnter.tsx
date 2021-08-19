import {
  Wrapper,
  QuestionAnswer,
  Question,
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
  Answer,
} from "../usedMarketQuestionList.style";
import { getDate } from "../../../../../commons/libraries/utils";

import UsedMarketQuestion from "../../write/usedMarketQuestionWrite.container";
import UesdMarketQuestionAnswer from "../../QuestionAnswer/write/QuestionAnswer.container";
import AnswerList from "../../QuestionAnswer/fetch/QuestionAnswerList.container";

export default function QuestionListItemUi(props) {
  // isEdit ===>  false

  return (
    <>
      {!props.isEdit && (
        <Wrapper>
          <Question>
            <QuestionInfo>
              <QuestionImg src="/images/ic_profile-96px.png" />
            </QuestionInfo>
            <QuestionMain>
              <QuestionHead>
                <QuestionDate>
                  <QuestionUser>{props.data.user.name}</QuestionUser>
                </QuestionDate>

                <QuestionIcon>
                  <Answer
                    id={props.data._id} // data={props.data} => Questions_Data
                    onClick={props.onClickAnswer}
                    src="/images/Answer.png"
                  />
                  <Update
                    id={props.data._id} // data={props.data} => Questions_Data
                    onClick={props.onClickEdit}
                    src="/images/mode-24px.png"
                  />
                  <Delet
                    id={props.data._id} // data={props.data} => Questions_Data
                    onClick={props.onClickDelete}
                    src="/images/clear-24px 2.png"
                  />
                </QuestionIcon>
              </QuestionHead>

              <QuestionContents>{props.data.contents}</QuestionContents>

              <QuestionCreateAt>
                {getDate(props.data.createdAt)}
              </QuestionCreateAt>
            </QuestionMain>
          </Question>
        </Wrapper>
      )}
      <AnswerList data={props.data} />
      {props.isEdit && (
        <UsedMarketQuestion
          isEdit={true}
          data={props.data}
          handleUpdate={props.handleUpdate}
          onClickClose={props.onClickClose}
        />
      )}

      {props.answer && (
        <UesdMarketQuestionAnswer
          data={props.data}
          setAnswer={props.setAnswer}
        />
      )}
    </>
  );
}
