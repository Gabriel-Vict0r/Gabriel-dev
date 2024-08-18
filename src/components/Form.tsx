"use client";
import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { schemaForm } from "@/utils/validateData";
import ErrorMessage from "./ErrorMessage";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
type Props = {};

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
    validationSchema: schemaForm,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const templateParams = {
        from_name: values.name,
        message: values.message,
        email: values.email,
        subject: values.subject,
        contact: values.phone,
      };
      try {
        const sendEmail = await emailjs.send(
          "service_i88yk2u",
          "template_j4usb0r",
          templateParams,
          "dnO6L1lAESXXK9Now"
        );
        if (sendEmail.status === 200) {
          Swal.fire({
            title: "Enviado!",
            text: "Seu e-mail foi enviado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        formik.resetForm();
      } catch (error) {
        Swal.fire({
          title: "Erro",
          text: `Ocorreu um erro ao enviar o seu email ${String(error)}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="py-5 bg-bg-secondary flex flex-col rounded-3xl relative xl:mx-36"
      method="POST"
    >
      <h3 className="text-center text-xl font-semibold pb-4">Contate-me</h3>
      <Input
        name="name"
        type="text"
        value={formik.values.name}
        placeholder="Digite seu nome"
        handle={formik.handleChange}
        error={formik.errors.name}
      />
      <Input
        name="email"
        type="email"
        value={formik.values.email}
        placeholder="Informe seu email"
        handle={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="subject"
        type="text"
        value={formik.values.subject}
        placeholder="Assunto"
        handle={formik.handleChange}
        error={formik.errors.subject}
      />
      <Input
        name="phone"
        type="phone"
        value={formik.values.phone}
        placeholder="Telefone"
        handle={formik.handleChange}
        error={formik.errors.phone}
      />
      <div>
        <textarea
          className="p-2 bg-transparent border-t-2 border-white-standard border-opacity-10 outline-none focus:border-2 focus:border-blue-primary w-full"
          name="message"
          placeholder="Digite sua mensagem"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <ErrorMessage message={formik.errors.message} />
        )}
      </div>
      <input
        type="submit"
        value="Enviar"
        className="font-semibold text-xl bg-gradient-to-r from-blue-primary to-blue-secondary py-3 px-5 rounded-b-3xl absolute -bottom-8 w-full hover:cursor-pointer hover:brightness-150 transition-all"
      />
    </form>
  );
};

export default Form;
