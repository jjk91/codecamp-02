import {
  Wrapper,
  TodayItems,
  TodayItemsPick,
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

export default function SideListPageUi() {
  return (
    <>
      <Wrapper>
        <TodayItems>오늘 본 상풒</TodayItems>
        {
          <TodayItemsPick>
            <ItemsWrapper>
              <ItemPickInfo>
                <ItemPick></ItemPick>
                <ItemCoutn></ItemCoutn>
              </ItemPickInfo>
              <ItemPhoto>
                <Photo />
              </ItemPhoto>
              <ItemInfo>
                <ItemName></ItemName>
                <ItemRemarks></ItemRemarks>
                <ItemPrice></ItemPrice>
                <ItemTags></ItemTags>
              </ItemInfo>
            </ItemsWrapper>
          </TodayItemsPick>
        }
      </Wrapper>
    </>
  );
}
