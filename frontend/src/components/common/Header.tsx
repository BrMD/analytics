import React from "react";
import PaddingAndMargin from "./PaddingMargin";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-max-full bg-turquoise">
      <PaddingAndMargin padding="pt-0 px-10" margin="">
        <div className="flex justify-between h-20 items-center">
          <div>
            <Logo />
          </div>
          <div>foto/menulateral</div>
        </div>
      </PaddingAndMargin>
    </header>
  );
};

export default Header;
