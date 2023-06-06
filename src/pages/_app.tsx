import { AppProps } from "next/app";

import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";

// import axiosClient from "@/lib/axios";

// import DismissableToast from "@/components/DismissableToast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <DismissableToast />

      <SWRConfig
        value={{
          fetcher: (url) => axiosClient.get(url).then((res) => res.data),
        }}
      > */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </SWRConfig> */}
    </>
  );
}

export default MyApp;
