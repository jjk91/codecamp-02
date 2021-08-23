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
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Search = styled.input`
  height: 25px;
  width: 200px;
  margin-bottom: 16px;
  border-radius: 5px;
  padding-left: 16px;
`;
const Address = styled.input`
  height: 52px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  padding-left: 16px;
`;
const AddressDetail = styled.input`
  height: 52px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  padding-left: 16px;
`;

export default function KakaoMapUi(props: any) {
  return (
    <>
      <WarpperMap>
        검색: <Search onChange={props.onChangeSearch} />
        <Map id="map"></Map>
        <InputWrapper>
          주소:
          <Address name="address" defaultValue={props.kakaoAddress} readOnly />
          <AddressDetail
            name="addressDetail"
            onChange={props.onChangeAddressDetail}
            placeholder="상세주소를 입력해주세요"
          />
        </InputWrapper>
      </WarpperMap>
    </>
  );
}
