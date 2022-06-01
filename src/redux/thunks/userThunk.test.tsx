import { loginActionCreator } from "../features/userSlice";
import "../mocks/server";
import server from "../mocks/server";
import { loginThunk, registerThunk } from "./userThunks";

afterEach(() => server.resetHandlers());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ surname: "tata", username: "tata" })
);
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

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "Mario",
        password: "password",
      };

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
