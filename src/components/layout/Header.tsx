import Head from "next/head";
import { FC } from "react";

import { META } from "@/constant/meta";

const Header: FC = () => {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon/favicon.png" />
      <title>{META.title}</title>
    </Head>
  );
};

export default Header;
