import React from "react";

const Footer = () => {
  return (
    <div className="h-16 w-[100vw] flex justify-center items-center">
      &copy;
      <a target="_blank" href="https://portfolio-matheusdorigon.vercel.app">
        Matheus Dorigon
      </a>
      <div className="mx-2 h-4 border" />
      <a target="_blank" href="https://hunter.io/search">
        Hunter.io
      </a>
    </div>
  );
};

export default Footer;
