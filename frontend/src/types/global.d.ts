type classesToPaddingAndMargin = { padding: string; margin: string };

type PropsChildrenNotOptional<P = unknown> = P & {
  children: ReactNode | undefined;
};
