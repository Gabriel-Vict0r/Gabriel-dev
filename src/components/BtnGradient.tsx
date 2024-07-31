import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  url: string;
};

const BtnGradient = (props: Props) => {
  return (
    <Link
      href={props.url}
      className="font-semibold text-xl bg-gradient-to-r from-blue-primary to-blue-secondary py-3 px-5 rounded-full"
    >
      {props.label}
    </Link>
  );
};

export default BtnGradient;
