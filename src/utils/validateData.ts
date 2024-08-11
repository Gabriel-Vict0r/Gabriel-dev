import { IFormData } from "@/models/interfaces/all";
import { object, ObjectSchema, setLocale, string } from "yup";
import { ptForm } from 'yup-locale-pt'

setLocale(ptForm)
export const schemaForm: ObjectSchema<IFormData> = object({
    name: string().required().min(4),
    email: string().email().required(),
    subject: string().required().min(4),
    phone: string().required().min(7),
    message: string().required().max(250),
})