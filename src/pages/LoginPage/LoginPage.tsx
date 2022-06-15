import LoginForm from "../../components/LoginForm/LoginForm";
import login from "../../utils/login-image.png";
const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={login}
          alt="login"
          className="mt-8 space-y-6 h-48 w-84 md:object-scale-down"
        />
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
