import { SizesImages, SizesButton, SizesBorder } from "@/interfaces";
import React from "react";

type classesToPaddingAndMargin = { padding?: string; margin?: string };

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

type propsButtonWithChildren = {
  variant?: string;
  size: keyof SizesButton;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
  children: React.ReactNode;
  borderSize: keyof SizesBorder;
  backgorund?: string;
};

type propsSetUsestateGeneric = {
  GenericValue: T;
  onSetStateFunctionGeneric: React.Dispatch<React.SetStateAction<T>>;
};

type usestateButtons = "domainSearch" | "emailFinder" | "emailVerifier";

type inputProps = {
  placeholder: "Email Finder" | "Domain Search" | "Email Verifier";
};
