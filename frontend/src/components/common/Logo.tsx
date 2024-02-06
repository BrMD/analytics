import React from "react";
import { LogoImage } from "@/assets/images/index";
import ImageRender from "./ImageRender";

const Logo = () => {
  return (
    <>
      <ImageRender alt="logo" src={LogoImage} rounded size="xxl" />
      {/* <Image alt="logo" src={LogoImage} className="h-14 w-16" /> */}
    </>
  );
};

export default Logo;
