import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import UsedMarketQuestionListUi from "./usedMarketQuestionList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./usedMarketQuestionList.queries";

export default function UsedMarketQuestionList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.usedMarketId },
  });

  return <UsedMarketQuestionListUi data={data} />;
}
