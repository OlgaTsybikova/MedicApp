import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../features/medicationsSlice";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import medicationByIdReducer from "../features/medicationByIdSlice/medicationByIdSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    medications: medicationsReducer,
    ui: uiReducer,
    medication: medicationByIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
