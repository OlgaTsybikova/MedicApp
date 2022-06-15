import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockmeds from "../../redux/mocks/mockmeds";
import { store } from "../../redux/store/store";
import DetailsMedication from "./DetailsMedication";

describe("Given a details Medication component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one div element", () => {
      const expectedTextElements = 1;
      const expectedButtons = 1;

      const medication = mockmeds[0];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailsMedication medtoshow={medication} />
          </Provider>
        </BrowserRouter>
      );

      const textInputs = screen.getAllByRole("heading", { name: "Ibuprofen" });
      const buttons = screen.getAllByRole("button");

      expect(textInputs).toHaveLength(expectedTextElements);
      expect(buttons).toHaveLength(expectedButtons);
    });
    describe("When it is invoked with 'delete'", () => {
      test("Then it should delete the selected item", async () => {
        const medication = mockmeds[0];
        render(
          <BrowserRouter>
            <Provider store={store}>
              <DetailsMedication medtoshow={medication} />
            </Provider>
          </BrowserRouter>
        );
        const editButton = screen.getByRole("button", { name: /edit/i });
        userEvent.click(editButton);
      });
    });
  });
});
