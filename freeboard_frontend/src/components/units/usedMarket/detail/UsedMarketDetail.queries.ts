import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
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
      seller {
        _id
        name
        picture
      }
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

// export const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn
//   }
// `;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING= gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId:ID!){
    createPointTransactionOfBuyingAndSelling(useritemId:$useritemId){
      _id
      name
      price
      buyer{
        _id
        name
      }
      seller{
        _id
        name
      }
    }
  }

`