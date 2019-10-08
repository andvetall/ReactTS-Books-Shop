import { put, takeEvery, call } from "redux-saga/effects";
import { request } from '../../services/request'


export function* addToCart(): IterableIterator<any> {
  yield takeEvery(`ADD_TO_CART`, function*(action: any) {
    try {
    const id = action.id
      let books = yield call(request, 'books', 'GET') 
      let selectedBook = books.find((book: any) => book._id === id)
      let quantity = 1
      selectedBook.quantity = quantity
      let localSorageBook = JSON.parse(localStorage.getItem("state") as any).addToCart.selectedBooks
      let arr = Object.values(localSorageBook)
      let checkId :any = arr.find((item:any) => item._id === selectedBook._id)
      if(checkId){
        checkId.quantity += 1
      }
     else{
      arr.push(selectedBook)
     }
    yield put({
      type: `ADD_TO_CART_SUCCESS`,
      payload: {
        selectedBooks: arr,
      }
    });
    } catch (error) {
      yield put({
        type: `ADD_TO_CART_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* moveFromCart(): IterableIterator<any> {
  yield takeEvery(`MOVE_FROM_CART`, function*(action: any) {
    try {
      const id = action.id
      let arr = Object.values(JSON.parse(localStorage.getItem("state") as any).addToCart.selectedBooks)
      let checkId :any = (arr.find((item:any) => item._id === id))
      if(checkId.quantity > 1){
        checkId.quantity -= 1
      }else{
        arr.splice(arr.indexOf(checkId),1)
      }
      
    yield put({
      type: `MOVE_FROM_CART_SUCCESS`,
      payload: {
        selectedBooks: arr,
      }
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_FROM_CART_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

