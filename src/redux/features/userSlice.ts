import { createSlice } from "@reduxjs/toolkit";
import { UserSliceState } from "../types/userInterface";

const initialState: UserSliceState = {
  username: "",
  name: "",
  logged: localStorage.getItem("token") ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logIn: (user, action) => ({
      ...action.payload,
      logged: true,
    }),
    logOut: (user, action) => initialState,
  },
});

export const { logIn: loginActionCreator, logOut: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
