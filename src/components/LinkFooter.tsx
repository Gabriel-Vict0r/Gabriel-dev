import { ILinkFooter } from "@/models/interfaces/all";
import Link from "next/link";
import React from "react";

const LinkFooter = ({ url, children }: ILinkFooter) => {
  return (
    <Link href={url} className="text-xl bg-background p-2 rounded-full">
      {children}
    </Link>
  );
};

export default LinkFooter;
