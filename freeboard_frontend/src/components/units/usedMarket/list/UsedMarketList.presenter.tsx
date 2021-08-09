import {
  Wrapper,
  ItemsOfTheBest,
  ItemsOfTheBestTitle,
  ItemsOfTheBestList,
  ItemsList,
  ItemListLeft,
  ImgWrapper,
  Img,
  ItemImg,
  ItemInfo,
  ItemInfoTop,
  ItemName,
  ItemRemarks,
  ItemTags,
  ItemInfoBottom,
  ItemSeller,
  ItemPick,
  ItemListRigth,
  ItemPrice,
  BestItemImg,
  BestItemName,
  BestItemInfo,
  BestItemInfoLeft,
  BestItemRemarks,
  BestItemPrice,
  BestItemInfoRight,
  BestItemPick,
  BestItemCount,
  BestItem,
  FooterWrapper,
} from "./UsedMarketList.style";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import Button01 from "../../../commons/button/01/button";

export default function UsedMarketListUi(props) {
  const { userInfo } = useContext(GlobalContext);
  return (
    <>
      <Wrapper>
        <ItemsOfTheBest>
          <ItemsOfTheBestTitle>베스트 상품</ItemsOfTheBestTitle>

          <ItemsOfTheBestList>
            {props.itemOfTheBest?.fetchUseditemsOfTheBest.map((data) => (
              <BestItem>
                <Img>
                  <BestItemImg
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${data.images}`}
                  />
                </Img>
                <BestItemName>{"이름"}</BestItemName>
                <BestItemInfo>
                  <BestItemInfoLeft>
                    <BestItemRemarks>{"remarks"}</BestItemRemarks>
                    <BestItemPrice>{"100"}</BestItemPrice>
                  </BestItemInfoLeft>

                  <BestItemInfoRight>
                    <BestItemPick>{"★"}</BestItemPick>
                    <BestItemCount>{"20"}</BestItemCount>
                  </BestItemInfoRight>
                </BestItemInfo>
              </BestItem>
            ))}
          </ItemsOfTheBestList>
        </ItemsOfTheBest>
        {props.data?.fetchUseditems.map((data) => (
          <ItemsList key={uuidv4()} onClick={props.ClickMoveDetail(data._id)}>
            <ItemListLeft>
              <ImgWrapper>
                {/* {props.data?.fetchUseditems.images?.map((data) => ( */}
                <ItemImg
                  key={data}
                  src={`https://storage.googleapis.com/${data.images[0]}`}
                />
                {/* ))} */}
              </ImgWrapper>
              <ItemInfo>
                <ItemInfoTop>
                  <ItemName>{data.name}</ItemName>
                  <ItemRemarks>{data.remarks}</ItemRemarks>
                  <ItemTags>{data.tags}</ItemTags>
                </ItemInfoTop>
                <ItemInfoBottom>
                  <ItemSeller>{data.seller.name}</ItemSeller>
                  <ItemPick>{"★20"}</ItemPick>
                </ItemInfoBottom>
              </ItemInfo>
            </ItemListLeft>
            <ItemListRigth>
              <ItemPrice>{data.price}</ItemPrice>
            </ItemListRigth>
          </ItemsList>
        ))}
        <FooterWrapper>
          <Button01
            type="button"
            onClick={props.onClickMoveList}
            buttonText="상품등록하기"
          />
        </FooterWrapper>
        {/* <FooterWrapper> </FooterWrapper> */}
        {/* <ItemsList key={uuidv4()}>
          <ItemListLeft>
            <ItemImg></ItemImg>
            <ItemInfo>
              <ItemInfoTop>
                <ItemName>{"삼성전자 갤럭시탭A 10.1"}</ItemName>
                <ItemRemarks>{"2019 LTE 32GB"}</ItemRemarks>
                <ItemTags>{"#삼성전자 #갤럭시탭 #갓성비"}</ItemTags>
              </ItemInfoTop>
              <ItemInfoBottom>
                <ItemSeller>{"판매자"}</ItemSeller>
                <ItemPick>{"20"}</ItemPick>
              </ItemInfoBottom>
            </ItemInfo>
          </ItemListLeft>
          <ItemListRigth>
            <ItemPrice>{"상품가격"}</ItemPrice>
          </ItemListRigth>
        </ItemsList> */}
      </Wrapper>
    </>
  );
}
