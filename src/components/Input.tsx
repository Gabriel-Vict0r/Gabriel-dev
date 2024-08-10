import React from "react";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  handle: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ name, type, value, handle }: Props) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={handle}
      className="p-2 bg-transparent border-y-2 border-white-standard border-opacity-10"
    />
  );
};

export default Input;
