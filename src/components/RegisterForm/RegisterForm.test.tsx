import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  registerThunk: jest.fn(),
}));

describe("Given a Register form function", () => {
  describe("When its called on", () => {
    test("Then it should render two textbox inputs, one password input and one button", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );
      const textInput = screen.getByRole("textbox", { name: "Username" });
      const buttonRegister = screen.getByRole("button", { name: "Register" });
      const nameText = screen.getByLabelText("Name");

      expect(textInput).toBeInTheDocument();
      expect(buttonRegister).toBeInTheDocument();
      expect(nameText).toBeInTheDocument();
    });

    describe("When the user clicks on the button with all fields filled", () => {
      test("Then it should call on thunk", () => {
        render(
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        );
        const userData = {
          name: "Marisco",
          username: "marisco",
          password: "marisco",
        };

        const nameInput = screen.getByPlaceholderText("Name");
        const usernameInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");
        const button = screen.getByRole("button");

        userEvent.type(nameInput, "Marisco");
        userEvent.type(usernameInput, "marisco");
        userEvent.type(passwordInput, "marisco");
        userEvent.click(button);

        expect(registerThunk).toHaveBeenCalledWith(userData);
        expect(mockDispatch).toHaveBeenLastCalledWith(registerThunk(userData));
      });
    });
  });
});
