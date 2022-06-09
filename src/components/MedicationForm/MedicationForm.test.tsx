import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import { createMedicationThunk } from "../../redux/thunks/medicationsThunks";
import MedicationForm from "./MedicationForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  createMedicationThunk: jest.fn(),
}));

describe("Given a Medication Form create function", () => {
  describe("When it is invoked", () => {
    test("Then it should render a form with 1 input y 1 button", () => {
      const expectedTextInput = 1;
      const expectedButtons = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MedicationForm />
          </Provider>
        </BrowserRouter>
      );

      const textInputs = screen.getAllByRole("textbox", { name: "Title" });
      const buttons = screen.getAllByRole("button", { name: "Create" });
      expect(textInputs).toHaveLength(expectedTextInput);
      expect(buttons).toHaveLength(expectedButtons);
    });
  });
});
