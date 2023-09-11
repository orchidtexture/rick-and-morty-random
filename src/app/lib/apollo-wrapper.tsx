"use client";

import {
  // ApolloClient,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_RNM_URL || "https://rnm.0x5adb01.online/graphql"

function makeClient() {
  const httpLink = new HttpLink({
      uri: GRAPHQL_API_URL,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider 
      makeClient={makeClient} 
    >
      {children}
    </ApolloNextAppProvider>
  )
}