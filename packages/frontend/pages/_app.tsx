import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "jotai";
import { EmotionCache } from "@emotion/react";
import Layout from "@/layout";
import ProtectedRoute from "@/auth";
import React from "react";
import { Amplify } from "aws-amplify";
import { FC } from "react";
import PageProvider from "@/components/layout/PageProvider";
export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// export default function App FC<MUIAppProps> ({ Component, pageProps, emotionCache }: AppProps) {
const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  // return (
  <StoreProvider>
    {/* <ThemeContextProvider> */}
    <PageProvider emotionCache={emotionCache}>
      <Layout>
        {pageProps.protected ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </PageProvider>
    {/* </ThemeContextProvider> */}
  </StoreProvider>
);

// }
export default App;
