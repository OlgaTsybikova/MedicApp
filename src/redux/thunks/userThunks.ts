import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { DataResponse, UserData } from "../types/userInterface";

export const registerThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post<DataResponse>(url, userData);
  };
