export interface UserData {
  username: String;
  password: String;
}

export interface DataResponse {
  username: String;
  password: String;
}

export interface UserInfoLogin {
  name: string;
  username: string;
}

export interface LoginData {
  username: string;
  password: string;
}
export interface UserSliceState {
  username: string;
  name?: string;
  logged: boolean;
  id?: string;
}

export interface RegisterPayload {
  username: string;
}

export interface LogInPayload {
  id: string;
  username: string;
  name: string;
}

export interface IRegisterForm {
  username: string;
  password: string;
  name: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}
