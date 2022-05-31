import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  interface FormData {
    name: string;
    username: string;
    password: string;
  }

  const initialForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initialForm);
  const dispatch = useAppDispatch();

  const updateData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(initialForm);
  };

  return (
    <RegisterFormStyled>
      <form
        className="mt-8 space-y-6"
        action="#"
        method="POST"
        autoComplete="off"
        noValidate
      >
        <h1 className="text-3xl text-cyan-800 font-bold">Create Account</h1>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
            <input
              name="name"
              className="register-form relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-verde focus:z-10"
              type="text"
              id="name"
              value={formData.name}
              onChange={updateData}
            />
          </label>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
            <input
              name="name"
              className="register-form relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-verde focus:z-10"
              type="text"
              id="username"
              value={formData.username}
              onChange={updateData}
            />
          </label>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
            <input
              name="password"
              className="register-form relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-verde focus:z-10"
              type="password"
              id="password"
              value={formData.password}
              onChange={updateData}
            />
          </label>
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={register}
            >
              Register
            </button>
          </div>
          <p>Do you have an account?</p>
        </div>
      </form>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
