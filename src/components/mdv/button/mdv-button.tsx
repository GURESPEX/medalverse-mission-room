"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import { cn } from "@/src/lib/utils";

const MdvButton = (props: MdvButtonProps) => {
  const {
    color,
    size = "medium",
    rounded = false,
    iconStart,
    iconEnd,
    loadingIcon = <Loader />,
    loadingIconVisible = "start",
    loading = false,
    disabled = false,
    ...elementProps
  } = props;

  return (
    <button
      className={cn(variants({ color, size, rounded }), {
        [loadingVariants({ color })]: loading,
        [disabledVariants()]: disabled,
      })}
    >
      {loading &&
      (loadingIconVisible === "start" || loadingIconVisible === "both") ? (
        <div
          className={iconButtonVariants({
            size,
            className: "animate-[spin_2s_linear_infinite]",
          })}
        >
          {loadingIcon}
        </div>
      ) : iconStart ? (
        <div className={iconButtonVariants({ size })}>{iconStart}</div>
      ) : null}
      <div className={textButtonVariants({ size })}>
        {elementProps.children}
      </div>
      {loading &&
      (loadingIconVisible === "end" || loadingIconVisible === "both") ? (
        <div
          className={iconButtonVariants({
            size,
            className: "animate-[spin_2s_linear_infinite]",
          })}
        >
          {loadingIcon}
        </div>
      ) : iconEnd ? (
        <div className={iconButtonVariants({ size })}>{iconEnd}</div>
      ) : null}
    </button>
  );
};

export default React.memo(MdvButton);

// --- Variants ---

const variants = cva(
  "flex items-center w-max select-none hover:cursor-pointer",
  {
    variants: {
      color: {
        primary: "bg-mdv-blue-300 active:bg-mdv-blue-400 text-white",
        secondary: "bg-mdv-neutral-50 active:bg-mdv-neutral-200 text-black",
        danger: "bg-mdv-error-600 active:bg-mdv-error-700 text-white",
      },
      size: {
        large: "h-12 gap-mdv-md p-mdv-lg",
        medium: "h-10 gap-mdv-md px-mdv-lg py-mdv-md",
        small: "h-9 gap-mdv-md px-mdv-lg py-mdv-xs",
      },
      rounded: {
        true: null,
        false: null,
      },
    },
    compoundVariants: [
      {
        rounded: true,
        size: ["small", "medium", "large"],
        className: "rounded-mdv-full",
      },
      {
        rounded: false,
        size: "small",
        className: "rounded-mdv-xl",
      },
      {
        rounded: false,
        size: "medium",
        className: "rounded-mdv-lg",
      },
      {
        rounded: false,
        size: "large",
        className: "rounded-mdv-md",
      },
    ],
    defaultVariants: {
      size: "medium",
      color: "primary",
      rounded: false,
    },
  },
);

const loadingVariants = cva(
  "flex items-center w-max select-none hover:cursor-wait",
  {
    variants: {
      color: {
        primary: "bg-mdv-blue-300 active:bg-mdv-blue-300 text-white",
        secondary: "bg-mdv-neutral-50 active:bg-mdv-neutral-50 text-black",
        danger: "bg-mdv-error-600 active:bg-mdv-error-600 text-white",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  },
);

const disabledVariants = cva(
  "border border-mdv-neutral-300 bg-mdv-neutral-100 active:bg-mdv-neutral-100 text-mdv-neutral-500 hover:cursor-not-allowed",
);

type MdvButtonVariantProps = VariantProps<typeof variants>;

export type MdvButtonProps = React.PropsWithChildren<
  React.ComponentProps<"button"> &
    MdvButtonVariantProps & {
      iconStart?: React.ReactNode;
      iconEnd?: React.ReactNode;
      loading?: boolean;
      loadingIcon?: React.ReactNode;
      loadingIconVisible?: "start" | "end" | "both";
    }
>;

// --- Icon Button Variants ---

const iconButtonVariants = cva("flex items-center", {
  variants: {
    size: {
      large: "size-6",
      medium: "size-4",
      small: "size-4",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

// --- Text Button Variants ---

const textButtonVariants = cva("font-mdv-body font-mdv-semibold leading-0", {
  variants: {
    size: {
      large: "text-mdv-md",
      medium: "text-mdv-md",
      small: "text-mdv-sm",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
