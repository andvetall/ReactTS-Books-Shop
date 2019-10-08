import { put, takeEvery, call } from "redux-saga/effects";
// import {reQuest} from './request.get'
import {request} from '../../services/request'
import axios from 'axios';

export function* showBooks(): IterableIterator<any> {
  yield takeEvery(`SHOW_BOOKS`, function*(action: any) {
    try {
       let books = yield call(request,'books', 'GET')
      console.log(books);
      
      yield put({
        type: `SHOW_BOOKS_SUCCESS`,
        payload: {
          books: books
        }
      });
      } catch (error) {
        yield put({
          type: `SHOW_BOOKS_FAILED`,
          payload: {
            error: error.message
          }
        });
      }
  });
}

export function* updateBook(): IterableIterator<any> {
  yield takeEvery(`UPDATE_BOOK`, function*(action: any) {
    try {
      yield call(request, "PUT", `books/${action.id}`, action.body)
    yield put({
      type: `SHOW_BOOKS`
    });
    } catch (error) {
      yield put({
        type: `UPDATE_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

export function* addBook(): IterableIterator<any> {
  yield takeEvery(`ADD_BOOK`, function*(action: any) {
    try {
      const { body } = action
      yield call(request, 'books', "POST",  body)
    yield put({
      type: `SHOW_BOOKS`,
    });
    } catch (error) {
      yield put({
        type: `ADD_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
export function* moveBook(): IterableIterator<any> {
  yield takeEvery(`MOVE_BOOK`, function*(action: any) {
    try {
      const { body } = action
      let bookS:any = yield call(request, 'books',  'GET')
      let arr:any = []
      bookS.map((book:any) => {
          if(action.body.find((title:any) => title == book.title)){
            arr.push(book._id);
          }
        })
      yield arr.forEach((item:any) =>  request("DELETE" , `books/${+item}`))
    yield put({
      type: `SHOW_BOOKS`,
    });
      
    } catch (error) {
      yield put({
        type: `MOVE_BOOK_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}

