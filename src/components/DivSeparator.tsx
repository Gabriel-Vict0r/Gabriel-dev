import React from "react";

type Props = {
  id: string;
  title: string;
  text: string;
};

const DivSeparator = ({ id, title, text }: Props) => {
  return (
    <div
      className="my-20 bg-gradient-to-r from-blue-primary to-blue-secondary p-5 text-center flex flex-col gap-3 xl:p-7 items-center"
      id={id}
    >
      <h2 className="font-semibold text-2xl xl:text-4xl">{title}</h2>
      <p className="font-light text-base xl:text-xl md:max-w-[80%]">{text}</p>
    </div>
  );
};

export default DivSeparator;
