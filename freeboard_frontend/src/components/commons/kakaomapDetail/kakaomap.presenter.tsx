import styled from "@emotion/styled";

const WarpperMap = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const Map = styled.div`
  width: 500px;
  height: 400px;
  margin-bottom: 16px;
`;

export default function KakaoMapDetailUi(props) {
  return (
    <>
      <WarpperMap>
        <Map id="map"></Map>
      </WarpperMap>
    </>
  );
}
