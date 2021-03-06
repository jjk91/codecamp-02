import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 1. refreshToken으로 새로운 accessToken 을 발급받기
export const getAccessToken = async (setAccessToken: any) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error({ content: error.message });
  }
};
