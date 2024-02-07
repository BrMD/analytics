import React from "react";
import Logo from "../common/Logo";
import Menu from "../common/Menu";
import PaddingAndMargin from "../common/PaddingMargin";

const Header = () => {
  return (
    <PaddingAndMargin padding="pt-0 px-10" margin="">
      <div className="flex justify-between h-20 items-center">
        <Logo />
        <Menu />
      </div>
    </PaddingAndMargin>
  );
};

export default Header;
