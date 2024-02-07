import React from "react";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import CommonHeaderFooter from "@/components/HeaderFooter/CommonHeaderFooter";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="defaultGrid">
      <CommonHeaderFooter
        as="header"
        className="bg-charcoal"
        component={<Header />}
      />
      {children}
      <CommonHeaderFooter
        as="footer"
        className="bg-mediumDarkRed"
        component={<Footer />}
      />
    </div>
  );
};

export default DefaultLayout;
