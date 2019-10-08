
import { ShowUsersActions, MoveUserActions, UpdateUserActions } from "./types";




export function showUsers() {
  return { 
    type: `${ShowUsersActions.SHOW_USERS}`
  };
}
export function updateUser(id:number, body:object) {
  return { 
    type: `${UpdateUserActions.UPDATE_USER}`,
    id,
    body
  };
}
export function moveUser( body:object) {
  return { 
    type: `${MoveUserActions.MOVE_USER}`,
    body
  };
}


