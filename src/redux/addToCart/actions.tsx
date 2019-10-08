
import { AddToCartActions, MoveFromCartActions, } from "./types";


export function addToCart(id:number) {
  return { 
    type: `${AddToCartActions.ADD_TO_CART}`,
    id 
  };
}


export function moveFromCart(id:number) {
  return { 
    type: `${MoveFromCartActions.MOVE_FROM_CART}`,
    id 
  };
}

