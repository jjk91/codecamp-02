
import {
  Wrapper,
  TodayItems,
  ItemsWrapper,
  ItemPickInfo,
  ItemPick,
  ItemCoutn,
  ItemPhoto,
  Photo,
  ItemInfo,
  ItemName,
  ItemRemarks,
  ItemPrice,
  ItemTags,
} from "./UsedMarketListSideList.style";
import { v4 as uuidv4 } from "uuid";

export default function SideListPageUi(props) {
  return (
    <>
      <Wrapper>
        <TodayItems>오늘 본 상품</TodayItems>
        {props.baskets?.map((data) => (
            <ItemsWrapper>
              <ItemPickInfo>
                <ItemPick>{"★"}</ItemPick>
                <ItemCoutn>{"20"}</ItemCoutn>
              </ItemPickInfo>
              <ItemPhoto>
                <Photo key={uuidv4()} 
                 src={`https://storage.googleapis.com/${data.images.[0]}`}/>
              </ItemPhoto>
              <ItemInfo>
                <ItemName>{data.name}</ItemName>
                <ItemRemarks>{data.remarks}</ItemRemarks>
                <ItemPrice>{data.price}</ItemPrice>
                <ItemTags>{data.tags}</ItemTags>
              </ItemInfo>
            </ItemsWrapper>
        ))}
      </Wrapper>
    </>
  );
}
