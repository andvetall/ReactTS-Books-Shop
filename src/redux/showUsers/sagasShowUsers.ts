import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../services/request'
import * as jwt from "jwt-then";



export function* showUsers(): IterableIterator<any> {
  yield takeEvery(`SHOW_USERS`, function*(action: any) {
    try {
      let users = yield call (request, "users", "GET")
    yield put({
      type: `SHOW_USERS_SUCCESS`,
      payload: {
        users,
      }
    });
      
    } catch (error) {
      yield put({
        type: `SHOW_USERS_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* updateUser(): IterableIterator<any> {
  yield takeEvery(`UPDATE_USER`, function*(action: any) {
    try { 
      yield call(request,`users/${action.id}`, "PUT", action.body)
      yield put({
        type: `SHOW_USERS`,
      });
      yield put({
        type: `@@login/LOGIN_SUCCESS`,
        payload: {
          data: action.body
        }
      });
    
    } catch (error) {
      yield put({
        type: `UPDATE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}


export function* moveUser(): IterableIterator<any> {
  yield takeEvery(`MOVE_USER`, function*(action: any) {
    try {
      let requestResult = yield call(request,`users/${action.body}`, 'DELETE' )
      if(requestResult.success){
        yield put({
          type: `SHOW_USERS`,
        });
      }
    } catch (error) {
      yield put({
        type: `MOVE_USER_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

