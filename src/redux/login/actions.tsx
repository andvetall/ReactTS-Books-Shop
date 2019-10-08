
import { LoginActions, LoginRequest } from "./types";

const prefix = "@@login";

export function doLogin(data: LoginRequest) {
  return { 
    type: `${prefix}/${LoginActions.DO_LOGIN}`,
    data };
}

