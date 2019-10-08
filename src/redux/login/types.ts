
export enum LoginActions {
  DO_LOGIN = "DO_LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED"
}

export interface LoginState {
  data: Object,
  message: String
}

export interface DoLoginProps {
  email: string;
  password: string;
  payloadFunc: Function;
}
export interface LoginRequest {
  data: Object
}

export interface LoginResult {
  token: string;
}
