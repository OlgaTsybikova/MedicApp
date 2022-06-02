import userReducer, { loginActionCreator } from "./userSlice";

describe("Given a usersSlice with a login reducer", () => {
  describe("When we pass a name and a password", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {};
      const receivedValue = { username: "mario", password: "password" };

      const action = loginActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
