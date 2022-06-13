import { createSlice } from "@reduxjs/toolkit";
import { IMedication } from "../../types/medicationInterfaces";

const initialState: IMedication = {
  title: "",
  image: "",
  category: "",
  prospect: "",
  description: "",
  uses: "",
  dosis: "",
  treatment: false,
  id: "",
  owner: "",
  defaultImage: "",
};
const medicationByIdSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    getMedicationById: (medication, action) => ({
      ...action.payload,
    }),
  },
});
export const { getMedicationById: getMedicationByIdActionCreator } =
  medicationByIdSlice.actions;
export default medicationByIdSlice.reducer;
