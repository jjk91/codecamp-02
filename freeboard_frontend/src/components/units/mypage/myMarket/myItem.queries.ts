import { gql } from "@apollo/client";

// 내가 구매한 상품
// export const FETCH_USED_ITEMS_IBOUGHT = gql`
//   query fetchUseditemsIBought {
//     fetchUseditemsIBought {
//       _id
//       name
//       contents
//       price
//       soldAt
//       createdAt
//     }
//   }
// `;

// 내가 판매하는 상품
export const FETCH_USED_ITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      buyer {
        _id
      }
      soldAt
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

// 내가 찜한 상품
export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int) {
    fetchUseditemsIPicked(page: $page) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      buyer {
        _id
        name
      }
      soldAt
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
