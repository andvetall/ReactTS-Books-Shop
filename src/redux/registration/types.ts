

export enum RegisterActions {
  DO_REGISTER = "DO_REGISTER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILED = "REGISTER_FAILED"
}
export interface RegisterState {
  message: string;
  isRegistred: boolean
}
export interface RegisterRequest {
  login: string;
  email: string;
  password: string;
}
