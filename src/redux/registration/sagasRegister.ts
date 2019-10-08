import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../services/request'


export function* doRegister(): IterableIterator<any> {
  yield takeEvery(`@@register/DO_REGISTER`, function*(action: any) {
    try {
    const {
      data: { login, email, password, passwordComfirm }
    } = action;
    let user = {
          login: login,
          email: email,
          password: password,
          passwordComfirm: passwordComfirm,
          country: "No data yet",
          city: "No data yet",
          street: "No data yet",
          house: "No data yet",
          appartment: "No data yet",  
          mobile:"No data yet",
          website: "No data yet",
          userImg: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
          
    }
    let requestResult:any = {}
    if(user.login.length && user.email.length && user.password.length){
      requestResult =  yield call(request,  "login/register" , "POST", user)
    }else Object.assign(requestResult, {
      success: false,
      message: "Data is not compeleted"
    })
        if(requestResult.success){
          yield put({
            type: `@@register/REGISTER_SUCCESS`,
            payload: {
              isRegistred: true,
              message: requestResult.message,
            }
          });
        }else{
          yield put({
            type: `@@register/REGISTER_FAILED`,
            payload: {
              message: requestResult.message
            }
          });
        }
    } catch (error) {
      yield put({
        type: `@@register/REGISTER_FAILED`,
        payload: {
          message: "Something goes wrong"
        }
      });
    }
  });
}
