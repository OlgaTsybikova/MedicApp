import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../features/medicationsSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    medications: medicationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
