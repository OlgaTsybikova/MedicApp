import { UserSliceState } from "../types/userInterface";

import userReducer, { loginActionCreator } from "./userSlice";

describe("Given a usersSlice with a login reducer", () => {
  describe("When we pass a name and a password", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue: UserSliceState = {
        username: "mario",
        logged: false,
      };

      const receivedValue: UserSliceState = {
        username: "mario",
        logged: true,
      };

      const action = loginActionCreator(initialValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
