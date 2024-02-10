import React from "react";
import { LogoImage } from "@/assets/images/index";
import ImageRender from "./ImageRender";

const Logo = () => {
  return (
    <>
      <ImageRender alt="logo" src={LogoImage} rounded size="xl" />
    </>
  );
};

export default Logo;
