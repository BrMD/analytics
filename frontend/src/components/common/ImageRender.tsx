import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { sizesImages } from "@/constants";
import { ImageRenderType } from "@/types/global";

const ImageRender = (props: ImageRenderType) => {
  const { src, alt, classes, size, rounded } = props;
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={clsx(rounded && "rounded-full", classes && classes)}
        width={sizesImages[size].width}
        height={sizesImages[size].height}
      />
    </>
  );
};

export default ImageRender;
