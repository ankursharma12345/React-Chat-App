import { useState } from "react";
import SignupForm from "./SignupForm";
import ValidationLayer from "./ValidationLayer";

const SignupFormHandler = () => {
    const [formData, setFormData] = useState({});
    const updateFieldValue = (id, value) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))
    };
    const handleSave = () => {
        debugger;
    }
    const propsForForm = {
        formData,
        updateFieldValue,
        handleSave
    }
    return (
        <ValidationLayer {...propsForForm} />
    )
}
export default SignupFormHandler;