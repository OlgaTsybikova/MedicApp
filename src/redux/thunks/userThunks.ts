import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";
import { DataResponse, UserData, UserInfoLogin } from "../types/userInterface";

export const registerThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post<DataResponse>(url, userData);
  };

export const loginThunk =
  (userData: UserData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      const {
        data: { token },
      } = await axios.post(url, userData);
      if (token) {
        localStorage.setItem("token", token);
        const userInfo: UserInfoLogin = jwtDecode(token);
        dispatch(loginActionCreator(userInfo));
      }
    } catch (error: any) {
      return error.message;
    }
  };
