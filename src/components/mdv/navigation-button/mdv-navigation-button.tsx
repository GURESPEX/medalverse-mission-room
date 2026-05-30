"use client";

import React from "react";

const MdvNavigationButton = (props: MdvNavigationButtonProps) => {
  return <button>{props.children}</button>;
};

export default React.memo(MdvNavigationButton);

export type MdvNavigationButtonProps = React.PropsWithChildren<{}>;
