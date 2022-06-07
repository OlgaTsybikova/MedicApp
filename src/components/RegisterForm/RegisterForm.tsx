import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <RegisterFormStyled className="sm:px-6 lg:px-8">
      <form
        className="mt-8 space-y-6 max-w-md"
        action="#"
        method="POST"
        autoComplete="off"
        noValidate
      >
        <h1 className="text-3xl text-cyan-800 font-bold">Create Account</h1>
        <div className="relative group">
          <input
            name="name"
            className="register-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="text"
            id="name"
            placeholder=" "
            onChange={updateData}
            value={formData.name}
            required
          />
          <label
            htmlFor="name"
            className="transform transition-all absolute top-0 left-0 h-full flex text-gray-500 items-center pl-2 text-lg group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Name
          </label>
        </div>
        <div className="relative group">
          <input
            name="username"
            className="register-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="text"
            id="username"
            placeholder=" "
            onChange={updateData}
            value={formData.username}
            required
          />
          <label
            htmlFor="username"
            className="transform transition-all absolute top-0 left-0 h-full flex text-gray-500 items-center pl-2 text-lg group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Username
          </label>
        </div>
        <div className="relative group">
          <input
            name="password"
            className="register-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="password"
            id="password"
            placeholder=" "
            onChange={updateData}
            value={formData.password}
            required
          />
          <label
            htmlFor="password"
            className="transform transition-all absolute top-0 left-0 h-full flex text-gray-500 items-center pl-2 text-lg group-focus-within:text-lg peer-valid:text-lg group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Password
          </label>
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            type="submit"
            className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={register}
          >
            Register
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-1 text-cyan-800 font-bold">
            Login
          </Link>
        </p>
      </form>
    </RegisterFormStyled>
  );
};
export default RegisterForm;
