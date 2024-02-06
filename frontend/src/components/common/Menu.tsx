import React from "react";
import { UserImage } from "@/assets/images";
import ImageRender from "./ImageRender";
import PaddingAndMargin from "./PaddingMargin";

const Menu = () => {
  return (
    <div className="flex items-center justify-between">
      <div>Menu</div>
      <div>
        <PaddingAndMargin padding="pl-6" margin="">
          <ImageRender alt="foto" src={UserImage} classes="" rounded size="s" />{" "}
        </PaddingAndMargin>
      </div>
    </div>
  );
};

export default Menu;
