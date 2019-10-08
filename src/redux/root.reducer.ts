import { Reducer, combineReducers } from "redux";
import { RegisterState } from "./registration/types";
import { registerReducer } from "./registration/reducer";
import { loginReducer } from "./login/reducer";
import { LoginState } from "./login/types";
import { AddToCartState } from "./addToCart/types";
import { addToCartReducer } from "./addToCart/reducer";
import { ShowBooksState } from "./showBooks/types";
import { showBooksReducer } from "./showBooks/reducer"
import { ShowUsersState } from "./showUsers/types";
import { showUsersReducer } from "./showUsers/reducer";

export interface RootState {
  register: RegisterState;
  login: LoginState;
  addToCart: AddToCartState;
  showBooks: ShowBooksState;
  showUsers: ShowUsersState
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  register: registerReducer,
  login: loginReducer,
  addToCart: addToCartReducer,
  showBooks: showBooksReducer,
  showUsers: showUsersReducer,
});

export default rootReducer;
