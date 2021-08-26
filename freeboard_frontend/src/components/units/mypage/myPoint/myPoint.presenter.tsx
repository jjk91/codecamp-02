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
            isActive={props.isActive}
          >
            {"전체내역"}
          </FetchPoint>
          |
          <FetchPoingOfLoding
            onClick={props.onClickMoveLoding}
            isActive={props.isActive}
          >
            {"충전내역"}
          </FetchPoingOfLoding>
          |
          <FetchPointOfBuying
            onClick={props.onClickMoveBuying}
            isActive={props.isActive}
          >
            {"구매내역"}
          </FetchPointOfBuying>
          |
          <FetchPoingOfSelling
            onClick={props.onClickMoveSeller}
            isActive={props.isActive}
          >
            {"판매내역"}
          </FetchPoingOfSelling>
        </PageListWarpper>
        {props.fetchData !== "" ? (
          <TableWrapper>
            <FetchPageUi data={props.data} />
          </TableWrapper>
        ) : (
          ""
        )}
      </Wrapper>
    </>
  );
}
