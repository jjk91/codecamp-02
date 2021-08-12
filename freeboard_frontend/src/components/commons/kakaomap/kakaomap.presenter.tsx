export default function KakaoMapUi(props) {
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <input onChange={props.search}></input>
    </>
  );
}
