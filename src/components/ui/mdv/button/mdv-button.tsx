"use client";

import React from "react";

const MdvButton = (props: MdvButtonProps) => {
  return <button>{props.children}</button>;
};

export default MdvButton;

export type MdvButtonProps = React.PropsWithChildren<{}>;
