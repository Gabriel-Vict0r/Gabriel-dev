"use client";
import React from "react";
import Input from "./Input";

type Props = {};

const Form = (props: Props) => {
  return (
    <form action="" className="py-5 bg-bg-secondary flex flex-col rounded-3xl">
      <h3 className="text-center text-xl font-semibold">Contate-me</h3>
      <Input name="name" type="text" value="teste" handle={() => "test"} />
      <Input name="name" type="text" value="teste" handle={() => "test"} />
      <Input name="name" type="text" value="teste" handle={() => "test"} />
      <Input name="name" type="text" value="teste" handle={() => "test"} />
    </form>
  );
};

export default Form;
