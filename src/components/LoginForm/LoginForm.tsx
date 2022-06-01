import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <LoginFormStyled>
      <form action="#" method="POST" autoComplete="off" noValidate>
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
            />
          </label>
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-20 py-2.5 text-white font-medium leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Log In
            </button>
          </div>
          <p>Do you have an account?</p>
        </div>
      </form>
    </LoginFormStyled>
  );
};
export default LoginForm;
