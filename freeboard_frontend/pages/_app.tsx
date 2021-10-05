import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { onError } from "@apollo/client/link/error";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import Home from "./index";

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
}

// @ts-ignore
export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [layout, setLayout] = useState("Home");
  const [accessToken, setAccessToken] = useState("");

  const [userInfo, setUserInfo] = useState();

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    if (localStorage.getItem("userInfoData"))
      setUserInfo(JSON.parse(localStorage.getItem("userInfoData") || "{}"));
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. 발급받은 accessToken 으로 방금 실패했던  쿼리 재실행하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authroization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql01",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {layout === "Home" ? (
          <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </>
        ) : (
          <Layout>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
