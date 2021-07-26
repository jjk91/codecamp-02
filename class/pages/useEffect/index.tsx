import { useEffect, useState } from "react";

export default function useEffectPage() {
  const [count, setCount] = useState(0);
  console.log("시작합니다.");

  // useEffect(() => {
  //   // console.log("그려진 뒤 입니다.");
  //   console.log("업데이트 완료");
  // }, [count]);
  console.log("그리기 직전~~!!!");

  //주의사항1 : state가 반복할때마다 페이지가 그려진다.
  // useEffect(() => {
  //   setCount(1);
  // }, []);

  //주의사항2 : 의존성배열에 count 가 들어갈 경우 무한루프에 들어간다.
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>컴포넌트예요~</div>
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>카운트 +1</button>
    </>
  );
}
