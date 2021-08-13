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
import { useContext } from "react";
import { usedMarketEditPageContext } from "../../../../../pages/usedMarket/[usedMarketId]/edit";
import KakaoMap from "../../../commons/kakaomap/kakaomap.contaniner";

export default function UsedMarketWriteUi(props) {
  const { isEdit, data } = useContext(usedMarketEditPageContext);
  return (
    <form
      onSubmit={props.handleSubmit(
        isEdit ? props.onWriteUpdate : props.onWriteSubmit
      )}
    >
      <UsedMarketWriteWrapper>
        <UsedMarketWriteTitle>
          {isEdit ? "상품 수정하기" : "상품 등록하기"}
        </UsedMarketWriteTitle>
        <Input01
          inputTitle="상품명"
          name="name"
          type="text"
          placeholder="상품명을 입력해주세요"
          // defaultValue={data?.fetchUseditem.name}
          register={{ ...props.register("name") }}
          errorMessage={props.errors.name?.message}
        />

        <Input01
          inputTitle="한줄요약"
          name="remarks"
          type="text"
          placeholder="상품의 상태를 입력해주세요"
          // defaultValue={data?.fetchUseditem.remarks}
          register={{ ...props.register("remarks") }}
          errorMessage={props.errors.remarks?.message}
        />
        <Input02
          inputTitle="상품설명"
          name="contents"
          placeholder="상품에 대하여 입력해주세요."
          // defaultValue={data?.fetchUseditem.contents}
          register={{ ...props.register("contents") }}
          errorMessage={props.errors.contents?.message}
        />
        <Input01
          inputTitle="판매가격"
          name="price"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          // defaultValue={data?.fetchUseditem.price}
          register={{ ...props.register("price") }}
          errorMessage={props.errors.price?.message}
        />
        <Input01
          inputTitle="태그입력"
          name="tags"
          type="text"
          placeholder="#태그 #태그 #태그"
          // defaultValue={data?.fetchUseditem.tags}
          register={{ ...props.register("tags") }}
          errorMessage={props.errors.tags?.message}
        />
        <LocationWrapper>
          <LocationLeft>
            <LocationText>거래위치</LocationText>
            <KakaoMap
              setAddress={props.setAddress}
              setAddressDetail={props.setAddressDetail}
              name={props.name}
              register={props.register}
            />
          </LocationLeft>
          {/* <LocationRight> */}
          {/* <LocationRightTop> */}
          {/* <LocationText>GPS</LocationText>
              <LocationGps>
                <LocationButton>위도(LAT)</LocationButton>
                <LocationIcon src="/images/ic_location_on-32px.png" />
                <LocationButton>경도(LNG)</LocationButton>
              </LocationGps> */}
          {/* </LocationRightTop> */}
          {/* 
            <LocationRightBottom>
              <Input03
                name="useditemAddress"
                inputTitle={"주소"}
                type="text"
                placeholder=""
              />
            </LocationRightBottom> */}
          {/* </LocationRight> */}
        </LocationWrapper>
        <ItemUploadText>첨부</ItemUploadText>
        <UploadWrapper>
          {new Array(4).fill(1).map((data, index) => (
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
          type="submit"
          buttonText={isEdit ? "수정하기" : "등록하기"}
          isActive={props.isActive}
        />
      </UsedMarketWriteWrapper>
    </form>
  );
}
