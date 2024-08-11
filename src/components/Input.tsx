import React from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  handle: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error?: string;
};

const Input = ({ name, type, value, handle, placeholder, error }: Props) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handle}
        placeholder={placeholder}
        className="p-2 bg-transparent border-t-2 border-white-standard border-opacity-10 outline-none focus:border-2 focus:border-blue-primary w-full"
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Input;
