import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginPage from "../LoginPage/LoginPage";
import DetailsMedicationPage from "./DetailsMedicationPage";

describe("Given a login page component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a details page", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <DetailsMedicationPage />
          </Provider>
        </BrowserRouter>
      );
      const detail = screen.getByText("Read Prospect here");
      expect(detail).toBeInTheDocument();
    });
  });
});
