import QuestionListItem from "./editItem/usedMarketQuestionListItem.container";

export default function UsedMarketQuestionListUi(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data: any) => (
        <QuestionListItem key={data._id} data={data} />
      ))}
    </>
  );
}
