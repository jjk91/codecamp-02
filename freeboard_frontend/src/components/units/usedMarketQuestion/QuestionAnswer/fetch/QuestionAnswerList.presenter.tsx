import AnswerListItem from "./editItem/QuestionAnswerListItem.container";

export default function AnswerListUi(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
        <AnswerListItem
          key={data._id}
          dataId={props.dataId}
          data={data} // Answer_Data
        />
      ))}
    </>
  );
}
