import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteMedicationsActionCreator,
  loadMedicationsActionCreator,
} from "../features/medicationsSlice";

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
