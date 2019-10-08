
import { RegisterActions, RegisterRequest } from "./types";

const prefix = "@@register";

export function doRegister(data: RegisterRequest) {
  return { 
    type: `${prefix}/${RegisterActions.DO_REGISTER}`,
    data };
}

