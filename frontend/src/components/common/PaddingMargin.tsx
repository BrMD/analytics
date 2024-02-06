import React from "react";
import clsx from "clsx";

const PaddingAndMargin = (
  props: PropsChildrenNotOptional<classesToPaddingAndMargin>
) => {
  const { children, padding, margin } = props;
  return <div className={clsx(padding, margin)}>{children}</div>;
};

export default PaddingAndMargin;
