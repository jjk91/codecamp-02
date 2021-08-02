interface IProps {
  count: number;
  school: string;
}

export default function FunctionalcomponentUi(props: IProps) {
  return (
    <>
      <div>컴포넌트 프리젠터 입니다</div>
      <div>{props.count}</div>
      <div>{props.school}</div>
    </>
  );
}
