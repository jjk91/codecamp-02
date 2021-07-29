import { useEffect, useRef, useState } from "react";
export default function ImagePreloadPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState("");
  // const [on,setOn] = useState(false)
  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img); // img는 태그임 ==> <img src='https://codebootcamp.co.kr/images/main/homeImage1.webp'>
    };
  }, []);
  const onClickButton = () => {
    // setOn(true)
    divRef.current?.appendChild(image);
  };
  return (
    <>
      {/* {on && (<img src='https://codebootcamp.co.kr/images/main/homeImage1.webp'/>)} */}
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
