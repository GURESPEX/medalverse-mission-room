"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvButton = (props: MdvButtonProps) => {
  const { size, ...elementProps } = props;

  return (
    <button className={variants({ size })}>{elementProps.children}</button>
  );
};

export default MdvButton;

// --- Variants ---

const variants = cva("font-mdv-display", {
  variants: {
    size: {
      large: "",
      medium: "",
      small: "",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type MdvButtonVariantProps = VariantProps<typeof variants>;

export type MdvButtonProps = React.PropsWithChildren<
  React.ComponentProps<"button"> & MdvButtonVariantProps
>;
