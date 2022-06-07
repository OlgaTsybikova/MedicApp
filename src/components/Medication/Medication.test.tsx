import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Medication from "./Medication";

describe("Given a Medication component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Medication id={""} />
          </Provider>
        </BrowserRouter>
      );

      const medication = screen.getAllByRole("button", {
        name: "Add",
      });

      expect(medication.length).toEqual(expectedNumberOfElements);
    });
  });
});
