import { useQuery } from "@apollo/client";
import AnswerListUi from "./QuestionAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "./QuestionAnswerList.queries";

export default function AnswerList(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });

  return <AnswerListUi data={data} dataId={props.data} />;
}
