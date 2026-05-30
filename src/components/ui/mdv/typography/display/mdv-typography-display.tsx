import React from "react";

const MdvTypographyDisplay = (props: MdvTypographyDisplayProps) => {
  return <p>{props.children}</p>;
};

export default MdvTypographyDisplay;

export type MdvTypographyDisplayProps = React.PropsWithChildren<{
  size: "medium" | "large";
}>;
