import ContainerUi from "./props.presenter";

export default function Container() {
  // return (
  //   <>
  //     <ContainerUi child="철수" />
  //   </>
  // );                                             // 기존 presenter 에서 함수 불러오는 방식
  // return <>{ContainerUi({ child: "철수" })}</>;  // 함수 자체를 불러오는 방식 1-1. 1.문제

  return (
    <>
      <ContainerUi child="철수" age={13} />
    </>
  );
}

// 1-1. 3.
// ["철수", "영희", "훈이", "맹구"].map((index) => {
// 	console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
// })
// 1-1. 4.
// const [state, setState] = useState(0)

// setState(qwer => qwer + 1)

// 1-2. 1. "2018.01.01"과 같은 날짜 형식을 검증하는 정규표현식을 만들어 주세요.
// /^\d{4}\.\d{2}\.\d{2}$/.test("2018.01.01")

// 1-2. 2. "010-1234-5678"과 같은 휴대폰 형식을 검증하는 정규표현식을 만들어 주세요.
// /^\d{3}-\d{4}-\d{4}$/.test("010-1234-5678")

// 1-2. 3. "aaa@bbb.com"과 같은 이메일 형식을 검증하는 정규표현식을 만들어 주세요.
// /\w+@\w+\.\w{3}$/.test("abcd@codecamp.com")
