import { useRouter } from "next/router"; // router 를 이용한다 - 브라우저에서 이동기능

export default function RouterPage() {
  const router = useRouter();

  function onClickMove() {
    router.push("/detail/10"); // router 에서 제공 하는 push 원하는 폴더 위치
  }

  return <button onClick={onClickMove}>이동하기</button>;
}
