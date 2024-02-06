import React from "react";
import Image from "next/image";
import { LogoImage } from "@/assets/images/index";

const Logo = () => {
  return <Image alt="logo" src={LogoImage} className="h-[3vw] w-[4vw]" />;
};

export default Logo;
