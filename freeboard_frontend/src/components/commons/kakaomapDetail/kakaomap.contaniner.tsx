import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import KakaoMapDetailUi from "./kakaomap.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapDetail(props) {
  console.log("11번쨰", props);
  useEffect(() => {
    console.log("useeffect", props);
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ecc9f338d4140428f6915924ceaa0b69&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        //=================================================================================================================
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(
              props.data?.useditemAddress.lat,
              props.data?.useditemAddress.lng
            ), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          },
          // 마커가 표시될 위치입니다
          markerPosition = new window.kakao.maps.LatLng(
            props.data?.useditemAddress.lat,
            props.data?.useditemAddress.lng
          );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new window.kakao.maps.Map(
          mapContainer,
          mapOption,
          markerPosition
        );
        marker.setMap(map);
      });
    };
  }, [props.data]);

  return (
    <>
      <KakaoMapDetailUi />
    </>
  );
}
