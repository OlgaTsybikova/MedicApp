import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPayload } from "../types/userInterface";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action: PayloadAction<UserPayload>) => ({
      ...action.payload,
    }),
    logOut: (user, action) => ({}),
  },
});

export const { logIn: loginActionCreator, logOut: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
