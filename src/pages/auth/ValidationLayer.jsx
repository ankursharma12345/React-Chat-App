import { useFormik } from "formik";
import SignupForm from "./SignupForm";
import { SignupValidationSchema } from "./SignupValidationSchema";


const ValidationLayer = (props) => {
  debugger;
  const { handleSubmit, errors } = useFormik({
    initialValues: props.formData,
    validationSchema: SignupValidationSchema,
    enableReinitialize: true,
    onSubmit: () => { props.handleSave() }
  })
  const propsForForm = {
    ...props,
    error: errors,
    handlePreSubmit: handleSubmit
  }
  const handlePreSubmit = () => {
    handleSubmit();
  }
  return (
    <SignupForm {...propsForForm} />
  )
}
export default ValidationLayer;