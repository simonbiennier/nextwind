import { AppProps } from "next/app";

import "@/styles/tailwind.css";

import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
