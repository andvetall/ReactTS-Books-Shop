import { RootState } from "../root.reducer";
import { AddToCartState } from "./types";

export const initialState: AddToCartState = {
  id: 0,
  selectedBooks: [],
  qantity: 1,
};

export function addToCartReducer(state: AddToCartState = initialState, action: any) {
  switch (action.type) {
    case `ADD_TO_CART`: {
      return {
        ...state,
        id: state.id,
      };
    }
    case `ADD_TO_CART_FAILED`: {
      const {body} = action.payload;
      return {
        ...state,
        body
      };
    }
    
    case `ADD_TO_CART_SUCCESS`: {
      const { id, selectedBooks, qantity } = action.payload;
      return {
        ...state,
        id: id,
        selectedBooks: selectedBooks,
        qantity: qantity
      };
    }

    case `MOVE_FROM_CART`: {
      return {
        ...state,
        id: state.id
      }
    }

    case `MOVE_FROM_CART_FAILED`: {
      const {body} = action.payload;
      return {
        ...state,
        body
      };
    }
    
    case `MOVE_FROM_CART_SUCCESS`: {
      const { id, selectedBooks, qantity  } = action.payload;
      return {
        ...state,
        id: id,
        selectedBooks: selectedBooks,
        qantity: qantity
      };
    }

    default:
      return state;
  }
}

export const addToCart = (state: RootState) => state.addToCart;
