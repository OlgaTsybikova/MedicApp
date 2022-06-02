import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a Login Page component", () => {
  describe("When it is instatiated", () => {
    test("Then it should render a register form", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const registerForm = screen.getByText("Password");
      expect(registerForm).toBeInTheDocument();
    });
  });
});
