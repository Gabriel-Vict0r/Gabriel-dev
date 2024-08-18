import { Types } from "@/models/enums/all";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
  type: Types;
};

const LinkCard = ({ children, link, type }: Props) => {
  return (
    <Link
      href={link}
      className="p-2 rounded-full hover:bg-blue-primary transition-all"
      aria-label={type}
    >
      {children}
    </Link>
  );
};

export default LinkCard;
