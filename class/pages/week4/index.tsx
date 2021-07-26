import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";

export default function Week4Page() {
  const [isChange, setIsChange] = useState(false);
  const Router = useRouter();
  const inputRef = useRef();
  const [test, setTest] = useState(1);

  const onClickChange = () => {
    setIsChange(true);
    console.log(isChange);
    // alert("Changed!!");
  };

  useEffect(() => {
    inputRef.current?.focus();
    // alert(1);
    alert("Rendered!");
    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    if (isChange === true) {
      alert("Changed!");
    }
  }, [isChange]);

  const onClickMove = () => {
    Router.push("/");
  };

  return (
    <>
      <div>컴포넌트 생명주기</div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="button" onClick={() => setTest((prev) => prev + 1)} />
      <input type="password" ref={inputRef} />
    </>
  );
}

// export default function MyComponent() {
// console.log();
//   const [count, setCount] = useState(0);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const Router = useRouter();

//   useEffect(() => {
//     console.log("컴포넌트가 마운트됐습니다~");
//     inputRef.current?.focus();

//     return () => {
//       alert("컴포넌트가 제거됩니다~");
//     };
//   }, [inputRef]);

//   useEffect(() => {
//     console.log("컴포넌트가 변경됐습니다.");
//   });

//   useEffect(() => {
//     console.log("마운트 시작");
//   });
//   const onClickCount = () => {
//     setCount((prev) => prev + 1);
//   };
//   const onClickMove = () => {
//     Router.push("/");
//   };

//   return (
//     <>
//       <input />
//       <div>카운트: {count} </div>
//       <button onClick={onClickCount}>카운트 +1</button>
//       <button onClick={onClickMove}>이동하기</button>
//     </>
//   );
// }
