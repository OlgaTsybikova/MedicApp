import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../features/uiSlice/uiSlice";
import { loginActionCreator } from "../features/userSlice";
import { DataResponse, UserData, UserInfoLogin } from "../types/userInterface";

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });
export const registerThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    dispatch(loadingOnActionCreator({ loading: true }));
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post<DataResponse>(url, userData);
    successModal("Great!You have been registerred!");
    dispatch(loadingOffActionCreator({ loading: false }));
  };

export const loginThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      dispatch(loadingOnActionCreator({ loading: true }));
      const {
        data: { token },
      } = await axios.post(url, userData);
      if (token) {
        successModal("Great! You are logged in!");
        localStorage.setItem("token", token);
        const userInfo: UserInfoLogin = jwtDecode(token);
        dispatch(loginActionCreator(userInfo));
      }
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again..");
      return error.message;
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };
