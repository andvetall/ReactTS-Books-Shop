
import { ShowBooksActions, UpdateBookActions, AddBookActions, MoveBookActions } from "./types";



export function showBooks() {
  return { 
    type: `${ShowBooksActions.SHOW_BOOKS}`
  };
}
export function updateBook(id:number, body:object) {
  return { 
    type: `${UpdateBookActions.UPDATE_BOOK}`,
    id,
    body
  };
}
export function addBook( body:object) {
  return { 
    type: `${AddBookActions.ADD_BOOK}`,
    body
  };
}
export function moveBook( body:object) {
  return { 
    type: `${MoveBookActions.MOVE_BOOK}`,
    body
  };
}


