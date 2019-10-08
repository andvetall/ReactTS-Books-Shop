

export enum ShowBooksActions{
  SHOW_BOOKS = "SHOW_BOOKS",
  SHOW_BOOKS_SUCCESS = "SHOW_BOOKS_SUCCESS",
  SHOW_BOOKS_FAILED = "SHOW_BOOKS_FAILED"
}

export interface ShowBooksState {
  Books: any[]
}

export interface ShowBooksProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface ShowBooksRequest {
  title: string;
  price: number
}

export interface ShowBooksResult {
  token: string;
}


export enum UpdateBookActions{
  UPDATE_BOOK = "UPDATE_BOOK",
  UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS",
  UPDATE_BOOK_FAILED = "UPDATE_BOOK_FAILED"
}

export interface UpdateBookState {
  Books: any[]
}

export interface UpdateBookProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface UpdateBookRequest {
  title: string;
  price: number
}

export interface UpdateBookResult {
  token: string;
}

export enum AddBookActions{
  ADD_BOOK = "ADD_BOOK",
  ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS",
  ADD_BOOK_FAILED = "ADD_BOOK_FAILED"
}

export interface AddBookState {
  Books: any[]
}

export interface AddBookProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface AddBookRequest {
  title: string;
  price: number
}

export interface AddBookResult {
  token: string;
}

export enum MoveBookActions{
  MOVE_BOOK = "MOVE_BOOK",
  MOVE_BOOK_SUCCESS = "MOVE_BOOK_SUCCESS",
  MOVE_BOOK_FAILED = "MOVE_BOOK_FAILED"
}

export interface MoveBookState {
  Books: any[]
}

export interface MoveBookProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface MoveBookRequest {
  title: string;
  price: number
}

export interface MoveBookResult {
  token: string;
}