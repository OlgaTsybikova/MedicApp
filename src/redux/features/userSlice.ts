import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPayload } from "../types/userInterface";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action: PayloadAction<UserPayload>) => ({
      ...action.payload,
    }),
  },
});

export const { logIn: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
