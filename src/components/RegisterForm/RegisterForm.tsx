import React, { useState } from "react";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const initialForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const updateData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <RegisterFormStyled>
      <form className="login-form" autoComplete="off" noValidate>
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={updateData}
            />
          </label>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={updateData}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="text"
              id="password"
              value={formData.password}
              onChange={updateData}
            />
          </label>
          <button>Register</button>
          <p>Do you have an account?</p>
        </div>
      </form>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
