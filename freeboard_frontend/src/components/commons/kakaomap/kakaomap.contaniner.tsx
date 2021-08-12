import { useEffect } from "react";
import KakaoMapUi from "./kakaomap.presenter";

export default function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ecc9f338d4140428f6915924ceaa0b69&autoload=false&libraries=services";
    document.head.appendChild(script)
    script.onload =() => 
  }, []);

  return (
    <>
      <KakaoMapUi />
    </>
  );
}
