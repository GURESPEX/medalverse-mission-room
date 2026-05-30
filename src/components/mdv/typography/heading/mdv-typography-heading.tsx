"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyHeading = (props: MdvTypographyHeadingProps) => {
  const { size, ...elementProps } = props;

  switch (size) {
    case "heading-1":
      return (
        <h1
          {...elementProps}
          className={variants({
            size,
            className: elementProps.className,
          })}
        >
          {elementProps.children}
        </h1>
      );
    case "heading-2":
      return (
        <h2
          {...elementProps}
          className={variants({
            size,
            className: elementProps.className,
          })}
        >
          {elementProps.children}
        </h2>
      );
    case "heading-3":
      return (
        <h3
          {...elementProps}
          className={variants({
            size,
            className: elementProps.className,
          })}
        >
          {elementProps.children}
        </h3>
      );
    case "heading-4":
      return (
        <h4
          {...elementProps}
          className={variants({
            size,
            className: elementProps.className,
          })}
        >
          {elementProps.children}
        </h4>
      );
    default:
      return (
        <h1
          {...elementProps}
          className={variants({
            size,
            className: elementProps.className,
          })}
        >
          {elementProps.children}
        </h1>
      );
  }
};

export default React.memo(MdvTypographyHeading);

// --- Variants ---

const variants = cva("font-mdv-display", {
  variants: {
    size: {
      "heading-1": "font-mdv-semibold text-mdv-4xl leading-mdv-2xl",
      "heading-2": "font-mdv-semibold text-mdv-3xl leading-mdv-2xl",
      "heading-3": "font-mdv-medium text-mdv-2xl leading-mdv-xl",
      "heading-4": "font-mdv-medium text-mdv-xl leading-mdv-lg",
    },
  },
  defaultVariants: {
    size: "heading-1",
  },
});

type MdvTypographyHeadingVariantProps = VariantProps<typeof variants>;

export type MdvTypographyHeadingProps = React.PropsWithChildren<
  React.ComponentProps<"h1" | "h2" | "h3" | "h4"> &
    MdvTypographyHeadingVariantProps
>;
