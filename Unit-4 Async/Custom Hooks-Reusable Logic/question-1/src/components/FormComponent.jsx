import React from "react";
import { useForm } from "../hooks/useForm";

export default function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nUsername: ${values.username}\nEmail: ${values.email}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <h2>Custom Hook Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={values.username}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
