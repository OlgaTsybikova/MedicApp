import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;

      render(<Navbar />, { wrapper: MemoryRouter });

      const navbar = screen.getAllByRole("img", { name: "logo" });

      expect(navbar.length).toEqual(expectedNumberOfElements);
    });
  });
});
