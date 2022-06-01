import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a Register Page Component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a register form", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );
      const form = screen.getByLabelText("Username");
      expect(form).toBeInTheDocument();
    });
  });
});
