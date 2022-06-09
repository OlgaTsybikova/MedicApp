import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { loginActionCreator } from "../features/userSlice";
import { DataResponse, UserData, UserInfoLogin } from "../types/userInterface";

const registerred = () =>
  toast.success("Great! Account created!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });
export const registerThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post<DataResponse>(url, userData);
    registerred();
  };

const loggedIn = () =>
  toast.success("Great! You are logged in!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const loginThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      const {
        data: { token },
      } = await axios.post(url, userData);
      if (token) {
        loggedIn();
        localStorage.setItem("token", token);
        const userInfo: UserInfoLogin = jwtDecode(token);
        dispatch(loginActionCreator(userInfo));
      }
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again..");
      return error.message;
    }
  };
