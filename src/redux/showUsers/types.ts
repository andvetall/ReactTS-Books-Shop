


export enum ShowUsersActions{
  SHOW_USERS = "SHOW_USERS",
  SHOW_USERS_SUCCESS = "SHOW_USERS_SUCCESS",
  SHOW_USERS_FAILED = "SHOW_USERS_FAILED"
}

export interface ShowUsersState {
  Users: any[]
}

export interface ShowUsersProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface ShowUsersRequest {
  title: string;
  price: number
}

export interface ShowUsersResult {
  token: string;
}


export enum UpdateUserActions{
  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILED = "UPDATE_USER_FAILED"
}

export interface UpdateUserState {
  Users: any[]
}

export interface UpdateUserProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface UpdateUserRequest {
  title: string;
  price: number
}

export interface UpdateUserResult {
  token: string;
}



export enum MoveUserActions{
  MOVE_USER = "MOVE_USER",
  MOVE_USER_SUCCESS = "MOVE_USER_SUCCESS",
  MOVE_USER_FAILED = "MOVE_USER_FAILED"
}

export interface MoveUserState {
  Users: any[]
}

export interface MoveUserProps {
  title: string;
  price: number
  payloadFunc: Function;
}
export interface MoveUserRequest {
  title: string;
  price: number
}

export interface MoveUserResult {
  token: string;
}