import {} from "./UsedMarketDetail.style";

export default function UsedMarketDetailUi() {
  return (
    <>
      <Wrapper>
        <WrapperHead>
          <SellerInfoLeft>
            <SellerImg />
            <SellerData>
              <SellerName></SellerName>
              <WriterDate></WriterDate>
            </SellerData>
          </SellerInfoLeft>
          <SellerInfoRigth>
            <SellerConnect />
            <Location />
          </SellerInfoRigth>
        </WrapperHead>
      </Wrapper>
    </>
  );
}
