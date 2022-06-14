import axios from "axios";
import {
  createMedicationActionCreator,
  deleteMedicationsActionCreator,
  loadMedicationsActionCreator,
  updateMedicationActionCreator,
} from "../features/medicationsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../features/uiSlice/uiSlice";
import { AppDispatch } from "../store/store";
import { errorModal, successModal } from "./userThunks";

const url = process.env.REACT_APP_API_URL;

export const loadMedicationsThunk = () => async (dispatch: AppDispatch) => {
  const loadUrl = `${url}medications`;
  const token = localStorage.getItem("token");
  try {
    dispatch(loadingOnActionCreator({ loading: true }));
    const { data, status } = await axios.get(loadUrl, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(loadMedicationsActionCreator(data));
    }
  } catch (error: any) {
    return error.message;
  }
  dispatch(loadingOffActionCreator({ loading: false }));
};
export const deleteMedicationsThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingOnActionCreator({ loading: true }));
      const token = localStorage.getItem("token");
      const { status } = await axios.delete(`${url}medications/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (status === 200) {
        dispatch(deleteMedicationsActionCreator(id));
        dispatch(loadMedicationsThunk());
      }
    } catch (error) {
      errorModal("Oops.. somehting went wrong, Try again...");
    }
    successModal("Great! The medication has been deleted!");
    dispatch(loadingOffActionCreator({ loading: false }));
  };

export const createMedicationThunk =
  (newMedication: any) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const createUrl = `${url}medications/create`;
      dispatch(loadingOnActionCreator({ loading: true }));
      const { data: medication, status } = await axios.post(
        createUrl,
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
        dispatch(loadMedicationsThunk());
      }
    } catch (error) {
      errorModal("Something went wrong, medication was not created...");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
    successModal("Great! The medication has been created!");
  };

export const updateMedicationThunk =
  (id: string, MedicationData: FormData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingOnActionCreator({ loading: true }));

      const {
        data: { updatedMedication },
      } = await axios.put(`${url}medications/update/${id}`, MedicationData, {
        headers: {
          authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (updatedMedication) {
        dispatch(updateMedicationActionCreator(updatedMedication));
        await dispatch(loadMedicationsThunk());
      }
    } catch (error: any) {
      errorModal("Unable to update medication infomation");
      return error.message;
    }
    dispatch(loadingOffActionCreator({ loading: false }));
    successModal("Great! The medication has been edited!");
  };
