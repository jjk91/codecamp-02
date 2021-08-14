import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/button/01/button";
import {
  Wrapper,
  WrapperHead,
  SellerInfoLeft,
  SellerImg,
  SellerData,
  SellerName,
  WriterDate,
  SellerInfoRigth,
  SellerConnect,
  Location,
  WrapperBody,
  ItemsInfo,
  ItemInfoHead,
  ItemInfoHeadLeft,
  ItemRemarks,
  ItemName,
  ItemPrice,
  ItemInfoHeadRigth,
  ItemLike,
  ItemLikeCount,
  ItemInfoBody,
  ItemInfoBodyTop,
  ItemInfoBodyBottom,
  UseditemAddress,
  ItemMap,
  ItemImg,
  SliderImg,
  ItemContents,
  ItemTags,
  ItemInfoFooter,
  ItemImgPagingWrapper,
  ItemImgPaging,
  ItemImgWrapper,
} from "./UsedMarketDetail.style";
import { v4 as uuidv4 } from "uuid";

export default function UsedMarketDetailUi(props) {
  const setting = {
    customPaging: function (i) {
      return (
        <ItemImgPagingWrapper>
          <ItemImgPaging
            src={`https://storage.googleapis.com/${props.data.fetchUseditem.images[i]}`}
          />
        </ItemImgPagingWrapper>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            // margin: "none",
          }}
        >
          {dots}
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "78px",
            }}
          ></li>
        </ul>
      </div>
    ),
  };
  return (
    <>
      <Wrapper>
        <WrapperHead>
          <SellerInfoLeft>
            <SellerImg src="/images/ic_profile-96px.png" />
            <SellerData>
              <SellerName>{props.data?.fetchUseditem.seller.name}</SellerName>
              <WriterDate>
                {getDate(props.data?.fetchUseditem.createdAt)}
              </WriterDate>
            </SellerData>
          </SellerInfoLeft>
          <SellerInfoRigth>
            <SellerConnect src="/images/ic_link-32px.png" />
            <Location src="/images/ic_location_on-32px.png" />
          </SellerInfoRigth>
        </WrapperHead>
        <WrapperBody>
          <ItemsInfo>
            <ItemInfoHead>
              <ItemInfoHeadLeft>
                <ItemRemarks>{props.data?.fetchUseditem.remarks}</ItemRemarks>
                <ItemName>{props.data?.fetchUseditem.name}</ItemName>
              </ItemInfoHeadLeft>
              <ItemInfoHeadRigth>
                <ItemLike onClick={props.onClickPick} />
                <ItemLikeCount>
                  {props.data?.fetchUseditem.pickedCount}
                </ItemLikeCount>
              </ItemInfoHeadRigth>
            </ItemInfoHead>

            <ItemPrice>{props.data?.fetchUseditem.price}</ItemPrice>

            <ItemInfoBody>
              <ItemInfoBodyTop>
                <SliderImg {...setting}>
                  {props.data?.fetchUseditem.images.map((data) => (
                    <ItemImgWrapper key={uuidv4()}>
                      <ItemImg src={`https://storage.googleapis.com/${data}`} />
                    </ItemImgWrapper>
                  ))}
                </SliderImg>
              </ItemInfoBodyTop>

              <ItemContents>{props.data?.fetchUseditem.contents}</ItemContents>

              <ItemTags>{props.data?.fetchUseditem.tags}</ItemTags>

              <ItemInfoBodyBottom>
                <UseditemAddress>
                  <ItemMap></ItemMap>
                </UseditemAddress>
              </ItemInfoBodyBottom>
            </ItemInfoBody>

            <ItemInfoFooter>
              <Button01
                type="button"
                buttonText="목록으로"
                onClick={props.onClickList}
              />
              <Button01
                type="button"
                buttonText="수정하기"
                onClick={props.onClickUpdate}
              />
            </ItemInfoFooter>
          </ItemsInfo>
        </WrapperBody>
      </Wrapper>
    </>
  );
}
