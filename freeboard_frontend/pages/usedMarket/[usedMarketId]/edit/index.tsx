import UsedMarketWrite from "../../../../src/components/units/usedMarket/write/UsedMarket.container";
import { gql, useQuery } from "@apollo/client";
import { createContext } from "react";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
    }
  }
`;

export const usedMarketEditPageContext = createContext({});

export default function usedMarketEdit() {
  const { data } = useQuery(FETCH_USED_ITEM);
  const value = {
    isEdit: true,
    data,
  };
  return (
    <usedMarketEditPageContext.Provider value={value}>
      <UsedMarketWrite />
    </usedMarketEditPageContext.Provider>
  );
}
