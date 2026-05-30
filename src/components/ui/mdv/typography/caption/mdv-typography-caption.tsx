import React from "react";

const MdvTypographyCaption = (props: MdvTypographyCaptionProps) => {
  return <p>{props.children}</p>;
};

export default MdvTypographyCaption;

export type MdvTypographyCaptionProps = React.PropsWithChildren<{
  overline?: boolean;
}>;
