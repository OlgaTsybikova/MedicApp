import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Navbar from "./Navbar";

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      );

      const navbar = screen.getAllByRole("img", { name: "logo" });

      expect(navbar.length).toEqual(expectedNumberOfElements);
    });
  });
});
