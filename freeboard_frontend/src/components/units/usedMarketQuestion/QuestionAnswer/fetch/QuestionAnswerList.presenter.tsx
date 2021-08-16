import AnswerListItem from "./editItem/QuestionAnswerListItem.container";

export default function AnswerListUi(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data) => (
        <AnswerListItem key={data._id} data={data} />
      ))}
    </>
  );
}
