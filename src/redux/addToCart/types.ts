

export enum AddToCartActions {
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAILED = "ADD_TO_CART_FAILED"
}

export interface AddToCartState {
  id: number,
  selectedBooks: any[],
  qantity: number
}

export interface AddToCartProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface AddToCartRequest {
  title: string;
  price: number
}

export interface AddToCartResult {
  token: string;
}



export enum MoveFromCartActions{
  MOVE_FROM_CART = "MOVE_FROM_CART",
  MOVE_FROM_CART_SUCCESS = "MOVE_FROM_CART_SUCCESS",
  MOVE_FROM_CART_FAILED = "MOVE_FROM_CART_FAILED"
}

export interface MoveFromCartState {
  id: number,
  selectedBooks: any[],
  qantity: number
}

export interface MoveFromCartProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface MoveFromCartRequest {
  title: string;
  price: number
}

export interface MoveFromCartResult {
  token: string;
}
