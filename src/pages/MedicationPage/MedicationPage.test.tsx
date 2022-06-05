import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import MedicationPage from "./MedicationPage";

describe("Given a Medication Page component", () => {
  describe("When it is instatiated", () => {
    test("Then it should render an element with the text", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <MedicationPage />
          </Provider>
        </BrowserRouter>
      );

      const medicationCard = screen.getByRole("list", {
        name: "",
      });
      expect(medicationCard).toBeInTheDocument();
    });
  });
});
