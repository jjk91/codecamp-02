import {
  Wrapper,
  PageListWarpper,
  FetchPoint,
  FetchPoingOfLoding,
  FetchPointOfBuying,
  FetchPoingOfSelling,
  TableWrapper,
} from "./myPoint.style";
import BuyingPageUi from "./pagePresetner/buying.presenter";
import FetchPageUi from "./pagePresetner/fetching.presenter";
import LodingPageUi from "./pagePresetner/loding.presenter";
import SellingPageUi from "./pagePresetner/selling.presenter";

export default function MyPointPageUi(props: any) {
  return (
    <>
      <Wrapper>
        <PageListWarpper>
          <FetchPoint
            onClick={props.onClickMoveFetch}
            // @ts-ignore
            isActive={props.myMenu === "AllData"}
          >
            {"전체내역"}
          </FetchPoint>
          |
          <FetchPoingOfLoding
            onClick={props.onClickMoveLoding}
            // @ts-ignore
            isActive={props.myMenu === "LodingData"}
          >
            {"충전내역"}
          </FetchPoingOfLoding>
          |
          <FetchPointOfBuying
            onClick={props.onClickMoveBuying}
            // @ts-ignore
            isActive={props.myMenu === "BuyingData"}
          >
            {"구매내역"}
          </FetchPointOfBuying>
          |
          <FetchPoingOfSelling
            onClick={props.onClickMoveSeller}
            // @ts-ignore
            isActive={props.myMenu === "SellingData"}
          >
            {"판매내역"}
          </FetchPoingOfSelling>
        </PageListWarpper>
        {props.myMenu === "AllData" && (
          <TableWrapper>
            <FetchPageUi
              data={props.data}
              page={props.page}
              refetch={props.refetch}
            />
          </TableWrapper>
        )}
        {props.myMenu === "LodingData" && (
          <TableWrapper>
            <LodingPageUi
              data={props.data}
              page={props.page}
              setStartPage={props.setPage}
              refetch={props.refetch}
              dataCount={props.logingData?.fetchPointTransactionsCountOfLoading}
            />
          </TableWrapper>
        )}
        {props.myMenu === "BuyingData" && (
          <TableWrapper>
            <BuyingPageUi
              data={props.data}
              page={props.page}
              setStartPage={props.setPage}
              refetch={props.refetch}
              dataCount={props.buyingData?.fetchPointTransactionsCountOfBuying}
            />
          </TableWrapper>
        )}
        {props.myMenu === "SellingData" && (
          <TableWrapper>
            <SellingPageUi
              data={props.data}
              page={props.page}
              setStartPage={props.setPage}
              refetch={props.refetch}
              dataCount={
                props.sellingData?.fetchPointTransactionsCountOfSelling
              }
            />
          </TableWrapper>
        )}
      </Wrapper>
    </>
  );
}
