import React from "react";

type Props = {};

const DivSeparator = (props: Props) => {
  return (
    <div className="my-20 bg-gradient-to-r from-blue-primary to-blue-secondary p-5 text-center flex flex-col gap-3 xl:p-7">
      <h2 className="font-semibold text-2xl xl:text-4xl">Serviços</h2>
      <p className="font-light text-base xl:text-xl">
        Como eu posso te ajudar?
      </p>
    </div>
  );
};

export default DivSeparator;
