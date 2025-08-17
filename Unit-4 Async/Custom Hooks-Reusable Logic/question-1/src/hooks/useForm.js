import { useState } from "react";

// Custom Hook
export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Reset form
  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
}
