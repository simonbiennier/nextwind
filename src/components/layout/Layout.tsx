import { FC, ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
