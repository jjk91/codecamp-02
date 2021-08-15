import UsedMarketDetail from "../../../src/components/units/usedMarket/detail/UsedMarketDetail.contaniner";
import UsedMarketQuestionList from "../../../src/components/units/usedMarketQuestion/fetch/usedMarketQuestionList.container";
import UsedMarketQuestion from "../../../src/components/units/usedMarketQuestion/write/usedMarketQuestionWrite.container";

export default function usedMarketDetail() {
  return (
    <>
      <UsedMarketDetail />
      <UsedMarketQuestion />
      <UsedMarketQuestionList />
    </>
  );
}
