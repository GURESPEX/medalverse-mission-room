import React from "react";

const MdvTypographyBody = (props: MdvTypographyBodyProps) => {
  return <p>{props.children}</p>;
};

export default MdvTypographyBody;

export type MdvTypographyBodyProps = React.PropsWithChildren<{
  size: "small" | "medium" | "large";
  bold: boolean | "regular" | "meduim" | "semibold" | "bold";
}>;
