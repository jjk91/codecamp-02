import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTION = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      amount
      balance
      status
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTION_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

export const FETCH_POINT_TRANSACTION_COUNT_OF_LODING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_POINT_TRANSACTION_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;
