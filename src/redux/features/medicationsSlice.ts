import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MedicationState } from "../types/medicationInterfaces";

const initialState: MedicationState = [];

const medicationsSlice = createSlice({
  name: "medications",
  initialState: initialState,
  reducers: {
    loadMedications: (medications, action: PayloadAction<MedicationState>) => [
      ...action.payload,
    ],
  },
});

export const { loadMedications: loadMedicationsActionCreator } =
  medicationsSlice.actions;
export default medicationsSlice.reducer;
