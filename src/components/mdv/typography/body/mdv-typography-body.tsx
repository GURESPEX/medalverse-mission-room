"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyBody = (props: MdvTypographyBodyProps) => {
  const { size, bold, ...elementProps } = props;

  return (
    <p
      {...elementProps}
      className={variants({
        size,
        bold,
        className: elementProps.className,
      })}
    >
      {elementProps.children}
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
