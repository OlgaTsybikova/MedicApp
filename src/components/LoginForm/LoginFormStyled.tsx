import styled from "styled-components";

const LoginFormStyled = styled.div`
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  .register-form {
    background: #ffffff;
    box-shadow: 0px 9px 28px 6px rgba(138, 149, 158, 0.15);
    border-radius: 21px;
    display: flexbox;
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
