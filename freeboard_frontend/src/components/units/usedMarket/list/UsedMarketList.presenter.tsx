import {
  Contniner,
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
  SellerInfo,
  SellerImg,
  SellerName,
  ItemPick,
  ItemPickInfo,
  ItemCount,
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
import Button01 from "../../../commons/button/01/button";
import SideListPageUi from "./sideItem/UsedMarketListSideList.presenter";

export default function UsedMarketListUi(props) {
  // const { userInfo } = useContext(GlobalContext);
  return (
    <Contniner>
      <Wrapper>
        <ItemsOfTheBest>
          <ItemsOfTheBestTitle>베스트 상품</ItemsOfTheBestTitle>

          <ItemsOfTheBestList>
            {props.itemOfTheBest?.fetchUseditemsOfTheBest.map((data) => (
              // <BestItem key={uuidv4()} onClick={props.ClickMoveDetail(props.onClickMoveBasket(data))}>
                <BestItem key={uuidv4()} id={data._id} onClick={props.ClickMoveDetail(data)}>
                <Img>
                  <BestItemImg
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${data.images.[0]}`}
                  />
                </Img>
                <BestItemName>{data.name}</BestItemName>
                <BestItemInfo>
                  <BestItemInfoLeft>
                    <BestItemRemarks>{data.renarks}</BestItemRemarks>
                    <BestItemPrice>{data.price}</BestItemPrice>
                  </BestItemInfoLeft>

                  <BestItemInfoRight>
                    <BestItemPick/>
                    <BestItemCount>{data.pickedCount}</BestItemCount>
                  </BestItemInfoRight>
                </BestItemInfo>
              </BestItem>
            ))}
          </ItemsOfTheBestList>
        </ItemsOfTheBest>
          {props.data?.fetchUseditems.map((data) => (
            <ItemsList key={uuidv4()} id={data._id} onClick={props.ClickMoveDetail(data)}>
              {/* // <ItemsList key={uuidv4()} onClick={props.ClickMoveDetail(props.onClickMoveBasket(data))}> */}
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
                    <SellerInfo>
                      <SellerImg/>
                      <SellerName>{data.seller.name}</SellerName>
                    </SellerInfo>
                    <ItemPickInfo>
                      <ItemPick>{"★"}</ItemPick>
                      <ItemCount>{data.pickedCount}</ItemCount>
                    </ItemPickInfo>
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
      <SideListPageUi baskets={props.baskets} />
    </Contniner>
  );
}
