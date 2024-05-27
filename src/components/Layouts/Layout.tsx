import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Hero = dynamic(() => import("../Hero/Hero"), { ssr: false });

const Header = dynamic(() => import("./Header"), { ssr: false });

const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
