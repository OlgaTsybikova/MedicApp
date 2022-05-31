import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a Register form function", () => {
  describe("When its called on", () => {
    test("Then it should render two textbox inputs, one password input and one button", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );
      const textInput = screen.getByRole("textbox", { name: "Username" });

      expect(textInput).toBeInTheDocument();
    });
  });
});
