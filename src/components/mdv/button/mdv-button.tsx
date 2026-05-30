"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

const MdvButton = (props: MdvButtonProps) => {
  const {
    color,
    variant = "solid",
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
      {...elementProps}
      className={variants({
        color,
        variant,
        size,
        rounded,
        loading,
        disabled,
        iconOnly: !elementProps.children,
        className: elementProps.className,
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
      {elementProps.children ? (
        <div className={textButtonVariants({ size })}>
          {elementProps.children}
        </div>
      ) : null}
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

const variants = cva("flex items-center w-max select-none", {
  variants: {
    iconOnly: {
      true: null,
      false: null,
    },
    color: {
      primary: null,
      secondary: null,
      dark: null,
      danger: null,
    },
    size: {
      large: "gap-mdv-md",
      medium: "gap-mdv-md",
      small: "gap-mdv-md",
    },
    variant: {
      solid: null,
      outline: null,
      ghost: null,
    },
    rounded: {
      true: null,
      false: null,
    },
    loading: {
      true: null,
      false: null,
    },
    disabled: {
      true: null,
      false: null,
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: "large",
      className: "p-mdv-lg",
    },
    {
      iconOnly: true,
      size: "medium",
      className: "p-mdv-md",
    },
    {
      iconOnly: true,
      size: "small",
      className: "p-mdv-sm",
    },
    {
      iconOnly: false,
      size: "large",
      className: "h-12 p-mdv-lg",
    },
    {
      iconOnly: false,
      size: "medium",
      className: "h-10 px-mdv-lg py-mdv-md",
    },
    {
      iconOnly: false,
      size: "small",
      className: "h-9 px-mdv-lg py-mdv-xs",
    },
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
    {
      loading: false,
      disabled: false,
      className: "hover:cursor-pointer",
    },
    {
      loading: true,
      disabled: false,
      className: "hover:cursor-wait",
    },
    {
      loading: [true, false],
      disabled: true,
      className: "hover:cursor-not-allowed",
    },
    {
      variant: "solid",
      loading: [true, false],
      disabled: true,
      className:
        "border border-mdv-neutral-300 bg-mdv-neutral-100 text-mdv-neutral-500",
    },
    {
      variant: "solid",
      color: "primary",
      loading: false,
      disabled: false,
      className: "bg-mdv-blue-300 active:bg-mdv-blue-400 text-white",
    },
    {
      variant: "solid",
      color: "primary",
      loading: true,
      disabled: false,
      className: "bg-mdv-blue-300 text-white",
    },
    {
      variant: "solid",
      color: "dark",
      loading: false,
      disabled: false,
      className: "bg-mdv-neutral-900 active:bg-mdv-neutral-900 text-white",
    },
    {
      variant: "solid",
      color: "dark",
      loading: true,
      disabled: false,
      className: "bg-mdv-neutral-900 active:bg-mdv-neutral-900 text-white",
    },
    {
      variant: "solid",
      color: "secondary",
      loading: false,
      disabled: false,
      className:
        "bg-white border border-mdv-neutral-100 active:border-mdv-neutral-200 text-black active:bg-mdv-neutral-100",
    },
    {
      variant: "solid",
      color: "secondary",
      loading: true,
      disabled: false,
      className: "bg-white border border-mdv-neutral-100 text-black",
    },
    {
      variant: "solid",
      color: "danger",
      loading: false,
      disabled: false,
      className: "bg-mdv-error-600 active:bg-mdv-error-700 text-white",
    },
    {
      variant: "solid",
      color: "danger",
      loading: true,
      disabled: false,
      className: "bg-mdv-error-600 active:bg-mdv-error-600 text-white",
    },

    {
      variant: "outline",
      loading: [true, false],
      disabled: true,
      className: "border border-mdv-neutral-300 text-mdv-neutral-500",
    },
    {
      variant: "outline",
      color: "primary",
      loading: false,
      disabled: false,
      className:
        "bg-white border border-mdv-blue-300 text-mdv-blue-300 active:bg-mdv-blue-100",
    },
    {
      variant: "outline",
      color: "primary",
      loading: true,
      disabled: false,
      className: "bg-white border border-mdv-blue-300 text-mdv-blue-300",
    },
    {
      variant: "outline",
      color: "dark",
      loading: false,
      disabled: false,
      className:
        "bg-white border border-mdv-neutral-900 text-mdv-neutral-900 active:bg-mdv-error-100",
    },
    {
      variant: "outline",
      color: "dark",
      loading: true,
      disabled: false,
      className: "bg-white border border-mdv-neutral-900 text-mdv-neutral-900",
    },
    {
      variant: "outline",
      color: "secondary",
      loading: false,
      disabled: false,
      className:
        "bg-white border border-mdv-neutral-100 active:border-mdv-neutral-200 text-black active:bg-mdv-neutral-100",
    },
    {
      variant: "outline",
      color: "secondary",
      loading: true,
      disabled: false,
      className: "bg-white border border-mdv-neutral-100 text-black",
    },
    {
      variant: "outline",
      color: "danger",
      loading: false,
      disabled: false,
      className:
        "bg-white border border-mdv-error-600 text-mdv-error-600 active:bg-mdv-error-100",
    },
    {
      variant: "outline",
      color: "danger",
      loading: true,
      disabled: false,
      className: "bg-white border border-mdv-error-600 text-mdv-error-600",
    },

    {
      variant: "ghost",
      loading: [true, false],
      disabled: true,
      className: "text-mdv-neutral-500",
    },
    {
      variant: "ghost",
      color: "primary",
      loading: false,
      disabled: false,
      className: "bg-white text-mdv-blue-300 active:bg-mdv-blue-100",
    },
    {
      variant: "ghost",
      color: "primary",
      loading: true,
      disabled: false,
      className: "bg-white text-mdv-blue-300",
    },
    {
      variant: "ghost",
      color: "dark",
      loading: false,
      disabled: false,
      className: "bg-white text-mdv-neutral-900",
    },
    {
      variant: "ghost",
      color: "dark",
      loading: true,
      disabled: false,
      className: "bg-white text-mdv-neutral-900",
    },
    {
      variant: "ghost",
      color: "secondary",
      loading: false,
      disabled: false,
      className: "bg-white text-black active:bg-mdv-neutral-100",
    },
    {
      variant: "ghost",
      color: "secondary",
      loading: true,
      disabled: false,
      className: "bg-white text-black",
    },
    {
      variant: "ghost",
      color: "danger",
      loading: false,
      disabled: false,
      className: "bg-white text-mdv-error-600 active:bg-mdv-error-100",
    },
    {
      variant: "ghost",
      color: "danger",
      loading: true,
      disabled: false,
      className: "bg-white text-mdv-error-600",
    },
  ],
  defaultVariants: {
    iconOnly: false,
    size: "medium",
    color: "primary",
    variant: "solid",
    rounded: false,
    loading: false,
    disabled: false,
  },
});

type MdvButtonVariantProps = VariantProps<typeof variants>;

export type MdvButtonProps = React.PropsWithChildren<
  React.ComponentProps<"button"> &
    MdvButtonVariantProps & {
      iconStart?: React.ReactNode;
      iconEnd?: React.ReactNode;
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
