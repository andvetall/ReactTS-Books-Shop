import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./root.reducer";
import { doRegister } from "./registration/sagasRegister";

import { all } from "redux-saga/effects";
import { doLogin } from "./login/sagas.login";

import { loadState, saveState } from './local.storage'
import { addToCart, moveFromCart } from "./addToCart/sagas.add.to.cart";
import { showBooks, updateBook, addBook, moveBook } from "./showBooks/sagasShowBooks";
import { showUsers, moveUser, updateUser } from "./showUsers/sagasShowUsers";



export default function configureStore(
  initialState?: RootState
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, enhancer);
  store.subscribe(() => {
    saveState({
      login: store.getState().login,
      addToCart: store.getState().addToCart
    });
  });
  
  sagaMiddleware.run(function* () {
    yield all([
      doRegister(),
      doLogin(),
      addToCart(),
      moveFromCart(),
      showBooks(),
      updateBook(),
      addBook(),
      moveBook(),
      showUsers(),
      moveUser(),
      updateUser()
    ]);
  });

  return store;
}
