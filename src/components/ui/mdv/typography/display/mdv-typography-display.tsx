"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyDisplay = (props: MdvTypographyDisplayProps) => {
  return (
    <h1
      {...props}
      className={variants({ size: props.size, className: props.className })}
    >
      {props.children}
    </h1>
  );
};

export default MdvTypographyDisplay;

// --- Variants ---

const variants = cva("font-mdv-display font-mdv-bold", {
  variants: {
    size: {
      large: "text-mdv-6xl leading-mdv-5xl",
      medium: "text-mdv-5xl leading-mdv-4xl",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

type MdvTypographyDisplayVariantProps = VariantProps<typeof variants>;

export type MdvTypographyDisplayProps = React.PropsWithChildren<
  React.ComponentProps<"h1"> & MdvTypographyDisplayVariantProps
>;
