import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  children: React.ReactNode;
};

const LinkFooter = ({ url, children }: Props) => {
  return <Link href={url}>{children}</Link>;
};

export default LinkFooter;
