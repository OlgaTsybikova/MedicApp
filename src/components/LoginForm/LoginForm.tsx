import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loginThunk } from "../../redux/thunks/userThunks";
import { LoginData } from "../../redux/types/userInterface";
import login from "../../utils/login-image.png";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialFormState: LoginData = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeForm = (event: {
    target: { id: string; value: string };
  }) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(loginThunk(formState));
    setFormState(initialFormState);
  };

  return (
    <LoginFormStyled className="sm:px-6 lg:px-8">
      <img src={login} alt="login" className="mt-8 space-y-6" />
      <form
        className="mt-8 space-y-6"
        action="#"
        method="POST"
        autoComplete="off"
        noValidate
      >
        <h1 className="text-3xl text-cyan-800 font-bold">Welcome Back!</h1>
        <div>
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
              placeholder="Username"
              onChange={handleChangeForm}
              value={formState.username}
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
              placeholder="Password"
              onChange={handleChangeForm}
              value={formState.password}
            />
          </label>
          <div className="flex space-x-2 justify-center">
            <button
              onClick={handleSubmit}
              type="button"
              className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Log In
            </button>
          </div>
          <p>Don't have an account?</p>
          <Link to={"/register"} className="text-1 text-cyan-800 font-bold">
            Create Account
          </Link>
        </div>
      </form>
    </LoginFormStyled>
  );
};
export default LoginForm;
