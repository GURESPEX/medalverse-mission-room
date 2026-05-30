"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyCaption = (props: MdvTypographyCaptionProps) => {
  const { overline, ...elementProps } = props;

  return (
    <p
      {...elementProps}
      className={variants({
        overline,
        className: elementProps.className,
      })}
    >
      {elementProps.children}
    </p>
  );
};

export default MdvTypographyCaption;

// --- Variants ---

const variants = cva("font-mdv-body text-mdv-xs leading-mdv-xs", {
  variants: {
    overline: {
      true: "font-mdv-semibold",
      false: "font-mdv-regular",
    },
  },
  defaultVariants: {
    overline: false,
  },
});

type MdvTypographyCaptionVariantProps = VariantProps<typeof variants>;

export type MdvTypographyCaptionProps = React.PropsWithChildren<
  React.ComponentProps<"p"> & MdvTypographyCaptionVariantProps
>;
