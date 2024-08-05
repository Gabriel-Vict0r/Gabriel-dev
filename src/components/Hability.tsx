import { IHabilities } from "@/models/interfaces/all";
import React from "react";

type Props = {};

const Hability = ({ name, icon }: IHabilities) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="text-2xl text-white-standard bg-blue-primary p-2 rounded-full xl:text-4xl">
        {icon}
      </div>
      <span className="font-normal text-base text-wrap xl:text-xl">{name}</span>
    </div>
  );
};

export default Hability;
