import UsedMarketWrite from "../../../../src/components/units/usedMarket/write/UsedMarket.container";
import { gql, useQuery } from "@apollo/client";
import { createContext } from "react";
import { useRouter } from "next/router";

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
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const usedMarketEditPageContext = createContext({});

export default function usedMarketEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.usedMarketId },
  });
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
