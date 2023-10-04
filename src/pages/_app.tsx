import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, MutationCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import { useEffect, useState } from "react";
import LayoutComponents from "../shared/components/Layout";
import { CheckIsPrivateRoute } from "../shared/helpers/route";
import { useRouter } from "next/router";
import Loading from "../shared/components/Loading.component";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1m
            retry: false,
          },
        },
        mutationCache: new MutationCache({
          onError: (err) => {
            console.log(err);
          },
        }),
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <Loading /> */}
        <LayoutComponents isShow={CheckIsPrivateRoute(router.route)}>
          <Component {...pageProps} />
        </LayoutComponents>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
