import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockmeds from "../../redux/mocks/mockmeds";
import { store } from "../../redux/store/store";
import Medication from "./Medication";
describe("Given a Medication component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;
      const medication = mockmeds[0];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Medication medtoshow={medication} />
          </Provider>
        </BrowserRouter>
      );

      const givenMedication = screen.getAllByRole("button", {
        name: "Details",
      });

      expect(givenMedication.length).toEqual(expectedNumberOfElements);
    });
  });
});
