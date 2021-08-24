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
  query fetchUseditemsISold {
    fetchUseditemsISold {
      _id
      name
      remarks
      contents
      price
      soldAt
      createdAt
    }
  }
`;
