"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MdvSideBar = (props: MdvSideBarProps) => {
  return (
    <div className="flex h-full bg-white rounded-2xl">
      <div className="flex flex-col w-20">
        <div className="flex flex-col p-2">
          <div className="w-full h-15.75 flex justify-center items-center">
            <Link href="/">
              <Image
                src="/app/assets/images/medalverse-logo.svg"
                alt="medalverse-logo"
                width={33}
                height={37}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-2 flex-1">
          <div className="w-full h-20">body</div>
        </div>
        <div className="flex flex-col p-2">
          <div className="w-full h-15.75 flex justify-center items-center">
            footer
          </div>
        </div>
      </div>
      <div className="w-px h-full bg-mdv-neutral-200" />
      <div className="flex flex-col w-51.5">menu</div>
    </div>
  );
};

export default React.memo(MdvSideBar);

export type MdvSideBarProps = {};
