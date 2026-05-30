"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyBody = (props: MdvTypographyBodyProps) => {
  return (
    <p
      {...props}
      className={variants({
        size: props.size,
        bold: props.bold,
        className: props.className,
      })}
    >
      {props.children}
    </p>
  );
};

export default MdvTypographyBody;

// --- Variants ---

const variants = cva("font-mdv-body", {
  variants: {
    size: {
      large: "text-mdv-lg",
      medium: "text-mdv-md",
      small: "text-mdv-sm",
    },
    bold: {
      true: "font-mdv-bold",
      false: "font-mdv-regular",
      bold: "font-mdv-bold",
      semibold: "font-mdv-semibold",
      medium: "font-mdv-medium",
      regular: "font-mdv-regular",
    },
  },
  defaultVariants: {
    bold: false,
    size: "medium",
  },
});

type MdvTypographyBodyVariantProps = VariantProps<typeof variants>;

export type MdvTypographyBodyProps = React.PropsWithChildren<
  React.ComponentProps<"p"> & MdvTypographyBodyVariantProps
>;
