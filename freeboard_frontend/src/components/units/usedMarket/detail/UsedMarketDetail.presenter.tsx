import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
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
  ItemContents,
  ItemTags,
  ItemInfoFooter,
} from "./UsedMarketDetail.style";

export default function UsedMarketDetailUi(props) {
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
                <ItemLike src="/images/ic_thumb_up_off_alt-24px.png" />
                <ItemLikeCount>
                  {props.data?.fetchUseditem.pickedCount}
                </ItemLikeCount>
              </ItemInfoHeadRigth>
            </ItemInfoHead>
            <ItemPrice>{props.data?.fetchUseditem.price}</ItemPrice>
            <ItemInfoBody>
              <ItemInfoBodyTop>
                <ItemImg></ItemImg>
                <ItemContents>
                  {props.data?.fetchUseditem.contents}
                </ItemContents>
              </ItemInfoBodyTop>
              <ItemTags>{props.data?.fetchUseditem.tags}</ItemTags>
              <ItemInfoBodyBottom>
                <UseditemAddress>
                  <ItemMap></ItemMap>
                </UseditemAddress>
              </ItemInfoBodyBottom>
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
            </ItemInfoBody>
          </ItemsInfo>
        </WrapperBody>
      </Wrapper>
    </>
  );
}
