import { RootState } from "../root.reducer";
import { RegisterState } from "./types";

export const initialState: RegisterState = {
  message: "",
  isRegistred: false,
};

export function registerReducer(state: RegisterState = initialState, action: any) {
  switch (action.type) {
    case `@@register/DO_REGISTER`: {
      return {
        ...state,
      };
    }
    case `@@register/REGISTER_SUCCESS`: {
      const { message } = action.payload;
      return {
        ...state,
        message,
        isRegistred: true,
      };
    }
    case `@@register/REGISTER_FAILED`: {
      const { message} = action.payload;
      return {
        ...state,
        message
      };
    }
    default:
      return state;
  }
}

export const register = (state: RootState) => state.register;
