import React from "react";

const MdvTypographyHeading = (props: MdvTypographyHeadingProps) => {
  switch (props.size ?? "heading-1") {
    case "heading-1":
      return <h1>{props.children}</h1>;
    case "heading-2":
      return <h2>{props.children}</h2>;
    case "heading-3":
      return <h3>{props.children}</h3>;
    case "heading-4":
      return <h4>{props.children}</h4>;
  }
};

export default MdvTypographyHeading;

export type MdvTypographyHeadingProps = React.PropsWithChildren<{
  size: "heading-1" | "heading-2" | "heading-3" | "heading-4";
}>;
