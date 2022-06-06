import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import { loginThunk } from "../../redux/thunks/userThunks";
import { LoginData } from "../../redux/types/userInterface";

import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialFormState: LoginData = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.user);

  const handleChangeForm = (event: {
    target: { id: string; value: string };
  }) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/medications");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(loginThunk(formState));
    setFormState(initialFormState);
  };

  return (
    <LoginFormStyled className="sm:px-6 lg:px-8">
      <form
        className="mt-8 space-y-6"
        action="#"
        method="POST"
        autoComplete="off"
        noValidate
      >
        <h1 className="text-3xl text-cyan-800 font-bold">Welcome Back!</h1>
        <div className="relative group">
          <input
            name="username"
            className="login-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="text"
            id="username"
            placeholder=" "
            onChange={handleChangeForm}
            value={formState.username}
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
            className="login-form w-full h-14 px-4 text-lg peer bg-transparent border border-gray-300 placeholder-gray-500 text-gray-900focus:outline-none focus:ring-verde focus:z-10"
            type="password"
            id="password"
            placeholder=" "
            onChange={handleChangeForm}
            value={formState.password}
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
            onClick={handleSubmit}
            type="button"
            className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Log In
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to={"/register"} className="text-1 text-cyan-800 font-bold">
            Create Account
          </Link>
        </p>
      </form>
    </LoginFormStyled>
  );
};
export default LoginForm;
