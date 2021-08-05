import Input01 from "../../../commons/inputs/01/input";
import Input02 from "../../../commons/inputs/02/input";
import Input03 from "../../../commons/inputs/03/input";
import Input04 from "../../../commons/inputs/04/input";
import Uploads01 from "../../../commons/uploads/01/uploads01.container";
import Button01 from "../../../commons/button/01/button";
import {
  UsedMarketWriteWrapper,
  UsedMarketWriteTitle,
  LocationWrapper,
  LocationLeft,
  LocationText,
  LocationMap,
  LocationRight,
  LocationRightTop,
  LocationGps,
  LocationButton,
  Input,
  LocationIcon,
  LocationRightBottom,
  ItemUploadText,
  UploadWrapper,
  MainImgSetting,
  ImgText,
  CheckBox,
  Error,
} from "./UsedMarket.style";

export default function UsedMarketWriteUi(props) {
  return (
    <>
      <UsedMarketWriteWrapper>
        <UsedMarketWriteTitle>상품등록하기</UsedMarketWriteTitle>
        <Input01
          inputTitle={"상품명"}
          name="name"
          type="text"
          placeholder="상품명을 입력해주세요"
          onChangeInputs={props.onChangeInputs}
        />
        <Error>{props.setInputsErrors["name"]}</Error>
        <Input01
          inputTitle={"한줄요약"}
          name="remarks"
          type="text"
          placeholder="상품의 상태를 입력해주세요"
          onChangeInputs={props.onChangeInputs}
        />
        <Error>{props.setInputsErrors.remarks}</Error>
        <Input02
          inputTitle={"상품설명"}
          name="contents"
          placeholder="상품에 대하여 입력해주세요."
          onChangeInputs={props.onChangeInputs}
        />
        <Error>{props.setInputsErrors.contents}</Error>
        <Input01
          inputTitle={"판매가격"}
          name="price"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          onChangeInputs={props.onChangeInputs}
        />
        <Error>{props.setInputsErrors.price}</Error>
        <Input01
          inputTitle={"태그입력"}
          name="tags"
          type="text"
          placeholder="#태그 #태그 #태그"
          onChangeInputs={props.onChangeInputs}
        />
        <Error>{props.setInputsErrors.tags}</Error>
        <LocationWrapper>
          <LocationLeft>
            <LocationText>거래위치</LocationText>
            <LocationMap />
          </LocationLeft>
          <LocationRight>
            <LocationRightTop>
              <LocationText>GPS</LocationText>
              <LocationGps>
                <LocationButton>위도(LAT)</LocationButton>
                <LocationIcon src="/images/ic_location_on-32px.png" />
                <LocationButton>경도(LNG)</LocationButton>
              </LocationGps>
            </LocationRightTop>

            <LocationRightBottom>
              <Input03
                name="useditemAddress"
                inputTitle={"주소"}
                type="text"
                placeholder=""
              />
              <Input type="text" placeholder="" />
            </LocationRightBottom>
          </LocationRight>
        </LocationWrapper>
        <ItemUploadText>첨부</ItemUploadText>
        <UploadWrapper>
          {new Array(2).fill(1).map((data, index) => (
            <Uploads01
              key={`${data}_${index}`}
              index={index}
              onChangeFile={props.onChangeFile}
            />
          ))}
        </UploadWrapper>
        <MainImgSetting>
          <ImgText>대표사진</ImgText>
          <CheckBox>
            <Input04 inputTitle={"사진1"} type="radio" />
            <Input04 inputTitle={"사진2"} type="radio" />
          </CheckBox>
        </MainImgSetting>
        <Button01
          buttonText={"등록하기"}
          onClickItemSubmit={props.onClickItemSubmit}
        />
      </UsedMarketWriteWrapper>
    </>
  );
}
