import FunctionalcomponentUi from "./Functionalcomponent.presenter";

export default function Functionalcomponent() {
  // return <FunctionalcomponentUi count={123} school="토기초등학교" />;   // presnter 에서 함수형 컴포넌트를 불러오는 방식

  return <>{FunctionalcomponentUi({ count: 456, school: "다람쥐초등학교" })}</>; // 함수 자체를 불러오는 방식
}
