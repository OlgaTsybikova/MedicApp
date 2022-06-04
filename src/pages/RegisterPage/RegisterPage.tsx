import RegisterForm from "../../components/RegisterForm/RegisterForm";
import registerImage from "../../utils/register-image.png";
const RegisterPage = () => {
  return (
    <>
      <img
        src={registerImage}
        alt="register"
        className="mt-8 space-y-6 object-contain md:object-scale-down"
      />
      <RegisterForm />;
    </>
  );
};

export default RegisterPage;
