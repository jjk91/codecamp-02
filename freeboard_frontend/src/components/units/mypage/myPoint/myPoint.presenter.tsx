import {
  Wrapper,
  PageListWarpper,
  FetchPoint,
  FetchPoingOfLoding,
  FetchPointOfBuying,
  FetchPoingOfSelling,
  TableWrapper,
} from "./myPoint.style";
import FetchPageUi from "./pagePresetner/fetching.presenter";

export default function MyPointPageUi(props: any) {
  return (
    <>
      <Wrapper>
        <PageListWarpper>
          <FetchPoint
            onClick={props.onClickMoveFetch}
            isActive={props.myMenu === "AllData"}
          >
            {"전체내역"}
          </FetchPoint>
          |
          <FetchPoingOfLoding
            onClick={props.onClickMoveLoding}
            isActive={props.myMenu === "LodingData"}
          >
            {"충전내역"}
          </FetchPoingOfLoding>
          |
          <FetchPointOfBuying
            onClick={props.onClickMoveBuying}
            isActive={props.myMenu === "BuyingData"}
          >
            {"구매내역"}
          </FetchPointOfBuying>
          |
          <FetchPoingOfSelling
            onClick={props.onClickMoveSeller}
            isActive={props.myMenu === "SellingData"}
          >
            {"판매내역"}
          </FetchPoingOfSelling>
        </PageListWarpper>
        {props.fetchData === props.data && (
          <TableWrapper>
            <FetchPageUi data={props.data} page={props.page} />
          </TableWrapper>
        )}
        {props.fetchData === props.logingData && <TableWrapper></TableWrapper>}
        {props.fetchData === props.buyingData && <div>buying</div>}
        {props.fetchData === props.sellingData && <div>selling</div>}
      </Wrapper>
    </>
  );
}
