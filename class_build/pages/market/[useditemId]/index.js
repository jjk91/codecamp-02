import { request, gql } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export default function MarketPage() {
  return <div></div>;
}

export const getServerSideProps = (context) => {
  request("https://backend02.codebootcamp.co.kr/graphql", FETCH_USEDITEM, {
    useditemId: context.query.useditemId,
  });
};
