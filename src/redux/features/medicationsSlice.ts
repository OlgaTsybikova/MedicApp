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
    deleteMedications: (medications, action: PayloadAction<string>) =>
      medications.filter((medication) => medication.id !== action.payload),
    createMedication: (medications, action) => [...medications, action.payload],
    updateMedication: (medications, action) =>
      medications.map((medication) =>
        medication.id === action.payload.id ? action.payload : medication
      ),
  },
});

export const {
  loadMedications: loadMedicationsActionCreator,
  deleteMedications: deleteMedicationsActionCreator,
  createMedication: createMedicationActionCreator,
  updateMedication: updateMedicationActionCreator,
} = medicationsSlice.actions;

export default medicationsSlice.reducer;
