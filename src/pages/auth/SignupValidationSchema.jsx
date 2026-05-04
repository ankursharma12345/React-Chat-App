import * as Yup from "yup";

export const SignupValidationSchema = Yup.object({
  Name: Yup.string().required("Name is required").nullable(true),
  Password: Yup.string().required("Password is required").nullable(true),
  confirmPassword: Yup.string().required("Confirm Password is required").nullable(true)
})