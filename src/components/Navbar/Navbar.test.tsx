import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render 4 li elements", () => {
      const expectedNumberOfElements = 4;

      render(<Navbar />, { wrapper: MemoryRouter });

      const navbar = screen.getAllByRole("listitem");

      expect(navbar.length).toEqual(expectedNumberOfElements);
    });
  });
});
