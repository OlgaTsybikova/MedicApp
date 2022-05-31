import "../mocks/server";
import { registerThunk } from "./userThunks";

describe("Given a registerThunk function", () => {
  describe("When it is called", () => {
    test("It should call the dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = registerThunk({
        username: "tata",
        password: "tata",
      });
      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
