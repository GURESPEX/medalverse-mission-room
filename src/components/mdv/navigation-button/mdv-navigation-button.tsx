"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Goal } from "lucide-react";

const MdvNavigationButton = (props: MdvNavigationButtonProps) => {
  const { icon, color = "primary", ...elementProps } = props;

  return (
    <button
      {...elementProps}
      className={variants({
        color,
        className: elementProps.className,
      })}
    >
      {icon ? <div className="size-6">{icon}</div> : null}
      <span className="text-mdv-xs leading-4 font-semibold">
        {elementProps.children}
      </span>
    </button>
  );
};

export default React.memo(MdvNavigationButton);

// --- Variants ---

const variants = cva(
  "flex flex-col justify-center items-center gap-mdv-md px-mdv-xs py-mdv-md w-16 h-20 select-none hover:cursor-pointer",
  {
    variants: {
      color: {
        primary:
          "bg-transparent text-mdv-neutral-400 hover:bg-mdv-neutral-100 active:bg-mdv-neutral-200 active:text-mdv-neutral-500 rounded-mdv-md",
        secondary:
          "bg-transparent text-mdv-blue-400 hover:bg-mdv-blue-100 active:bg-mdv-blue-200 active:text-mdv-blue-500 rounded-mdv-md",
      },
    },
  },
);

type MdvNavigationButtonVariantProps = VariantProps<typeof variants>;

export type MdvNavigationButtonProps = React.PropsWithChildren<
  React.ComponentProps<"button"> &
    MdvNavigationButtonVariantProps & {
      icon?: React.ReactNode;
      loading?: boolean;
      loadingIcon?: React.ReactNode;
    }
>;
