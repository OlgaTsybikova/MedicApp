import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  loginThunk: jest.fn(),
}));

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one textbox input, one password input and one button", () => {
      const expectedTextInputs = 1;
      const expectedPasswordInputs = 1;
      const expectedButtons = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const textInputs = screen.getAllByRole("textbox", { name: "Username" });
      const passwordInputs = screen.getAllByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(textInputs).toHaveLength(expectedTextInputs);
      expect(passwordInputs).toHaveLength(expectedPasswordInputs);
      expect(buttons).toHaveLength(expectedButtons);
    });
  });
  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch login Thunk", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedFormData = {
        username: "mario",
        password: "password",
      };
      const usernameField = screen.getByLabelText("Username");
      const passwordField = screen.getByLabelText("Password");
      const button = screen.getByText("Log In");

      userEvent.type(usernameField, "mario");
      userEvent.type(passwordField, "password");
      userEvent.click(button);

      expect(loginThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenLastCalledWith(
        loginThunk(expectedFormData)
      );
    });
  });
});
