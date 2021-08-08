import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      constents
      price
    }
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        name
        picture
      }
    }
  }
`;
