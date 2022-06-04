import LoginForm from "../../components/LoginForm/LoginForm";
import login from "../../utils/login-image.png";
const LoginPage = () => {
  return (
    <>
      <img
        src={login}
        alt="login"
        className="mt-8 space-y-6 object-contain md:object-scale-down"
      />
      <LoginForm />;
    </>
  );
};

export default LoginPage;
