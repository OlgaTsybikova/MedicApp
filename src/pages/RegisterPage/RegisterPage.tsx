import RegisterForm from "../../components/RegisterForm/RegisterForm";
import registerImage from "../../utils/register-image.png";
const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={registerImage}
          alt="register"
          className="mt-8 space-y-6 h-68 w-96 md:object-scale-down"
        />
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
