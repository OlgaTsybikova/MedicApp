import axios from "axios";
import { getMedicationByIdActionCreator } from "../../features/medicationByIdSlice/medicationByIdSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store/store";
import { errorModal } from "../userThunks";

export const medicationByIdThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      dispatch(loadingOnActionCreator({ loading: true }));
      const {
        data: { medicationDetails },
      } = await axios.get(`${url}medications/${id}`, {
        headers: { authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(getMedicationByIdActionCreator(medicationDetails));
    } catch (error) {
      errorModal("Something went wrong, medication was not loaded...");
    }

    dispatch(loadingOffActionCreator({ loading: false }));
  };
