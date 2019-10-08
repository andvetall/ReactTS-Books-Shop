import { RootState } from "../root.reducer";
import { ShowBooksState } from "./types";

export const initialState: ShowBooksState = {
  Books: []
};

export function showBooksReducer(state: ShowBooksState = initialState, action: any) {
  switch (action.type) {
    
    case `SHOW_BOOKS`: {
      return {
        ...state
      }
    }

    case `SHOW_BOOKS_FAILED`: {
      const {books} = action.payload;
      return {
        ...state,
        books
      };
    }
    

    case `SHOW_BOOKS_SUCCESS`: {
      const { books } = action.payload;
      return {
        ...state,
        Books: books
      };
    }

    case `UPDATE_BOOK`: {
      return {
        ...state
      }
    }

    case `UPDATE_BOOK_FAILED`: {
      const {books} = action.payload;
      return {
        ...state,
        books
      };
    }
    

    case `UPDATE_BOOK_SUCCESS`: {
      const { books } = action.payload;
      return {
        ...state,
        Books: books
      };
    }

    case `ADD_BOOK`: {
      return {
        ...state
      }
    }

    case `ADD_BOOK_FAILED`: {
      const {books} = action.payload;
      return {
        ...state,
        books
      };
    }
    

    case `ADD_BOOK_SUCCESS`: {
      const { books } = action.payload;
      return {
        ...state,
        Books: books
      };
    }

    case `MOVE_BOOK`: {
      return {
        ...state
      }
    }

    case `MOVE_BOOK_FAILED`: {
      const {} = action.payload;
      return {
        ...state,
    
      };
    }
    

    case `MOVE_BOOK_SUCCESS`: {
      const { books } = action.payload;
      return {
        ...state,
        Books: books
      };
    }


    default:
      return state;
  }
}

export const showBooks = (state: RootState) => state.showBooks;
