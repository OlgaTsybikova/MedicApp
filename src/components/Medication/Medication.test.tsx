import { render, screen } from "@testing-library/react";
import Medication from "./Medication";

describe("Given a Medication component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one div element", () => {
      const expectedNumberOfElements = 1;

      render(<Medication id={""} />);

      const medication = screen.getAllByRole("button", {
        name: "Add to your Aid Kit",
      });

      expect(medication.length).toEqual(expectedNumberOfElements);
    });
  });
});
