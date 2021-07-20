import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
