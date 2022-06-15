import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import CreateEditPage from "./CreateEditPage";

describe("Given a Create/edit Page component", () => {
  describe("When it is instatiated", () => {
    test("Then it should render a form to create", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <CreateEditPage />
          </Provider>
        </BrowserRouter>
      );

      const loginForm = screen.getByText("Create Medication");
      expect(loginForm).toBeInTheDocument();
    });
  });
});
