import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import KakaoMapUi from "./kakaomap.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props) {
  const [search, setSearch] = useState("");
  const [kakaoAddress, setKakaoAddress] = useState("");

  // const [addressDetail, setAddressDetail] = useState("");
  const { register, handleSubmit, formState, setValue } = useForm({
    mode: "onChange",
  });

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onChangeAddressDetail = (event) => {
    props.setAddressDetail(event.target.value);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ecc9f338d4140428f6915924ceaa0b69&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        //=================================================================================================================
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 장소 검색 객체를 생성합니다
        var ps = new window.kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(search, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new window.kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>",
              setKakaoAddress(place.place_name)
            );
            props.setAddress(place.place_name);
            props.setLat(marker.getPosition().getLat());
            props.setLng(marker.getPosition().getLng());
            infowindow.open(map, marker);
          });
        }
      });
    };
  }, [search]);

  return (
    <>
      <KakaoMapUi
        search={search}
        kakaoAddress={kakaoAddress}
        onChangeSearch={onChangeSearch}
        onChangeAddressDetail={onChangeAddressDetail}
      />
    </>
  );
}
