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
import { usedMarketEditPageContext } from "../../../../../pages/usedMarket/[usedMarketId]/edit";
import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function UsedMarketListUi(props) {
  const { isEdit } = useContext(usedMarketEditPageContext);
  // const { userInfo } = useContext(GlobalContext);
  return (
    <Contniner>
      <Wrapper>
        <ItemsOfTheBest>
          <ItemsOfTheBestTitle>베스트 상품</ItemsOfTheBestTitle>

          <ItemsOfTheBestList>
            {props.itemOfTheBest?.fetchUseditemsOfTheBest.map((data) => (
              // <BestItem key={uuidv4()} onClick={props.ClickMoveDetail(props.onClickMoveBasket(data))}>
                <BestItem key={uuidv4()} id={data._id} onClick={props.onClickMoveBasket(data)}>
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
                    <BestItemPrice>{`${data.price}원`}</BestItemPrice>
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
        <div>판매중 / 판매완료 라인</div>
        
        <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={props.hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
        >
          {props.data?.fetchUseditems.map((data) => (
            <ItemsList key={uuidv4()} id={data._id} onClick={props.onClickMoveBasket(data)}>
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
                      <SellerImg src="/images/ic_profile-96px.svg"/>
                      <SellerName>{data.seller.name}</SellerName>
                    </SellerInfo>
                    <ItemPickInfo>
                      <ItemPick/>
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
          </InfiniteScroll>
        
        <FooterWrapper>
          <Button01
            type="button"
            onClick={props.onClickMoveList}
            buttonText="상품 등록"
            isActive={isEdit}
          />
        </FooterWrapper>

      </Wrapper>
      <SideListPageUi showItem={props.showItem} />
    </Contniner>
  );
}
