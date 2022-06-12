import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../features/medicationsSlice";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice/uiSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    medications: medicationsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
