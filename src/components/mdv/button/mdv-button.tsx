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

const variants = cva("flex items-center w-max select-none", {
  variants: {
    color: {
      primary: null,
      secondary: null,
      dark: null,
      danger: null,
    },
    size: {
      large: "h-12 gap-mdv-md p-mdv-lg",
      medium: "h-10 gap-mdv-md px-mdv-lg py-mdv-md",
      small: "h-9 gap-mdv-md px-mdv-lg py-mdv-xs",
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
