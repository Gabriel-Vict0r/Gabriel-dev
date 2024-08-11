import React from "react";

type Props = {};

const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <p className="text-base font-extralight text-red-500 p-2">{message}</p>
  );
};

export default ErrorMessage;
