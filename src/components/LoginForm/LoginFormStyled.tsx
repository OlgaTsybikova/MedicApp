import styled from "styled-components";

const LoginFormStyled = styled.div`
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  .login-form {
    background: #ffffff;
    box-shadow: 0px 9px 28px 6px rgba(138, 149, 158, 0.15);
    border-radius: 21px;
    flex-direction: column;
  }
  button {
    margin-top: 2rem;
    background: linear-gradient(
      180deg,
      rgba(6, 145, 157, 0.38) 0%,
      #06919d 100%
    );
    box-shadow: 0px 15px 30px -20px rgba(42, 162, 117, 0.519067);
    border-radius: 15px;
  }
`;
export default LoginFormStyled;
