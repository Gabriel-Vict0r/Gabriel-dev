import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const ContainerHabilities = ({ children, title }: Props) => {
  return (
    <div className="bg-bg-secondary p-5 text-center rounded-3xl border-white border border-opacity-20 shadow-shadow-blue">
      <h3 className="font-semibold text-2xl xl:text-4xl mb-10">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-5">
        {children}
      </div>
    </div>
  );
};

export default ContainerHabilities;
