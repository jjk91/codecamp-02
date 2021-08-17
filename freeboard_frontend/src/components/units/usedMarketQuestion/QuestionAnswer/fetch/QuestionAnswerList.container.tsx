import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AnswerListUi from "./QuestionAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "./QuestionAnswerList.queries";

export default function AnswerList(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });

  console.log(props.data._id);

  return <AnswerListUi data={data} />;
}
