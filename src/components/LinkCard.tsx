import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
};

const LinkCard = ({ children, link }: Props) => {
  return (
    <Link
      href={link}
      className="p-2 rounded-full hover:bg-blue-primary transition-all"
    >
      {children}
    </Link>
  );
};

export default LinkCard;
