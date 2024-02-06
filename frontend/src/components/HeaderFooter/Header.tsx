import React from "react";
import Logo from "../common/Logo";
import Menu from "../common/Menu";

const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center">
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
