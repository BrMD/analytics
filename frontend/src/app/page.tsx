import CommonHeaderFooter from "@/components/HeaderFooter/CommonHeaderFooter";
import Header from "@/components/HeaderFooter/Header";
import Main from "@/components/common/Main";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <CommonHeaderFooter as="header" className="w-max-full bg-darkTeal200">
        <Header />
      </CommonHeaderFooter>
      <Main />
      <CommonHeaderFooter as="footer" className="w-max-full bg-mediumDarkRed">
        <Header />
      </CommonHeaderFooter>
    </>
  );
}
