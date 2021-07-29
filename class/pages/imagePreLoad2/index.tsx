import { useEffect, useRef, useState } from "react";

export default function ImagePreLoadPage() {
  const divRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [on, setOn] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img); // img는 태크 ==> <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp"/>
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(image);
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
//
