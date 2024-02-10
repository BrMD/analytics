import React from "react";
import { UserImage } from "@/assets/images";
import ImageRender from "./ImageRender";
import PaddingAndMargin from "./PaddingMargin";

const User = () => {
  return (
    <div>
      <PaddingAndMargin padding="pl-6">
        <ImageRender alt="foto" src={UserImage} classes="" rounded size="s" />{" "}
      </PaddingAndMargin>
    </div>
  );
};

const MenuOptions = () => {
  return <div>Menu</div>;
};

const Menu = () => {
  return (
    <div className="flex items-center justify-between">
      <MenuOptions />
      <User />
    </div>
  );
};

export default Menu;
