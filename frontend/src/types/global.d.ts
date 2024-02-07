import { SizesImages } from "@/interfaces";
import { sizesImages } from "@/constants";
import React from "react";

type classesToPaddingAndMargin = { padding: string; margin: string };

type PropsChildrenNotOptional<P = unknown> = P & {
  children: ReactNode;
};

type asProps = { as: string };

type ImageRenderType = {
  src: string | StaticImageData;
  alt: string;
  size: keyof SizesImages;
  classes?: string;
  rounded?: boolean;
};

type commonHeaderAndFooterType = {
  as: T;
  className: string;
  component: React.Element;
};

type chidrenProps = { children: React.ReactNode };

type childrenDefault = {
  children: React.ReactNode;
};
