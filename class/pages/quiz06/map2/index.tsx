import { useRouter } from "next/router";

export default function Map2page() {
  const router = useRouter();

  const onClickMovePage = () => {
    router.push("/quiz06/map1");
  };

  return <button onClick={onClickMovePage}>이동하기</button>;
}
