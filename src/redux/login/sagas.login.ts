import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../services/request'
import * as jwt from "jwt-then";


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function*(action: any) {
    const user = {
      username: action.data.email,
      password: action.data.password
    }
    const requestResult = yield call(request, 'login', 'POST', user);
    localStorage.setItem('token', requestResult.token)
    try {
      const decoded: any = {}
      yield jwt.verify(requestResult.token, "notEasyToGuess!!!").then(res => Object.assign(decoded, res));
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: decoded,
          message: requestResult.message
        }
      });
    } 
    catch (error) {
      yield put({
        type: `@@login/LOGIN_FAILED`,
        payload: {
          message: requestResult.message
        }
      });
    }
  });
}
