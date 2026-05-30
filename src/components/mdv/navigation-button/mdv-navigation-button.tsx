"use client";

import React from "react";

const MdvNavigationButton = (props: MdvNavigationButtonProps) => {
  return <button>{props.children}</button>;
};

export default MdvNavigationButton;

export type MdvNavigationButtonProps = React.PropsWithChildren<{}>;
