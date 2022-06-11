import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createMedicationActionCreator,
  deleteMedicationsActionCreator,
  loadMedicationsActionCreator,
  updateMedicationActionCreator,
} from "../features/medicationsSlice";
import { AppDispatch } from "../store/store";
import { errorModal } from "./userThunks";

export const loadMedicationsThunk = () => async (dispatch: Dispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}medications/list`;
  const token = localStorage.getItem("token");

  try {
    const { data, status } = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(loadMedicationsActionCreator(data));
    }
  } catch (error: any) {
    return error.message;
  }
};
export const deleteMedicationsThunk =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URL}medications/${id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        dispatch(deleteMedicationsActionCreator(id));
      }
    } catch (error) {}
  };

export const createMedicationThunk =
  (newMedication: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const url: string = `${process.env.REACT_APP_API_URL}medications/create`;
    try {
      const { data: medication, status } = await axios.post(
        url,
        newMedication,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (status === 201) {
        dispatch(createMedicationActionCreator(medication));
      }
    } catch (error) {
      errorModal("Something went wrong, medication was not created...");
    }
  };

export const updateMedicationThunk =
  (medicationId: string, MedicationData: FormData) =>
  async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const {
        data: { updatedMedication },
      } = await axios.put(
        `${url}medications/update/${medicationId}`,
        MedicationData,
        {
          headers: {
            authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (updatedMedication) {
        dispatch(updateMedicationActionCreator(updatedMedication));
      }
    } catch (error: any) {
      errorModal("Unable to update medication infomation");
      return error.message;
    }
  };
