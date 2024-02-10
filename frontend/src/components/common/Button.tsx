import { propsButtonWithChildren } from "@/types/global";
import clsx from "clsx";
import React from "react";

import { sizesBorder, sizesButton } from "@/constants";

const Button = (props: propsButtonWithChildren) => {
  const { size, onClickFunction, classes, children, borderSize, backgorund } =
    props;

  return (
    <button
      onClick={onClickFunction}
      className={clsx(classes, backgorund ? backgorund : "bg-inherit")}
      style={{ width: sizesButton[size], borderWidth: sizesBorder[borderSize] }}
    >
      {children}
    </button>
  );
};

export default Button;
