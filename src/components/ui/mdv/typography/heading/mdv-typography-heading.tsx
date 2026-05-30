"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const MdvTypographyHeading = (props: MdvTypographyHeadingProps) => {
  switch (props.size ?? "heading-1") {
    case "heading-1":
      return (
        <h1
          {...props}
          className={variants({ size: props.size, className: props.className })}
        >
          {props.children}
        </h1>
      );
    case "heading-2":
      return (
        <h2
          {...props}
          className={variants({ size: props.size, className: props.className })}
        >
          {props.children}
        </h2>
      );
    case "heading-3":
      return (
        <h3
          {...props}
          className={variants({ size: props.size, className: props.className })}
        >
          {props.children}
        </h3>
      );
    case "heading-4":
      return (
        <h4
          {...props}
          className={variants({ size: props.size, className: props.className })}
        >
          {props.children}
        </h4>
      );
  }
};

export default MdvTypographyHeading;

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
