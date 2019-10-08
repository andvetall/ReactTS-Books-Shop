import { RootState } from "../root.reducer";
import { ShowUsersState } from "./types";

export const initialState: ShowUsersState = {
  Users: []
};

export function showUsersReducer(state: ShowUsersState = initialState, action: any) {
  switch (action.type) {
    
    case `SHOW_USERS`: { 
      return {
        ...state
      }
    }

    case `SHOW_USERS_FAILED`: {
      const {users} = action.payload;
      return {
        ...state,
        users
      };
    }
    

    case `SHOW_USERS_SUCCESS`: {
      const { users } = action.payload;
      return {
        ...state,
        Users: users
      };
    }


    case `UPDATE_USER`: {
      return {
        ...state
      }
    }

    case `UPDATE_USER_FAILED`: {
      const {users} = action.payload;
      return {
        ...state,
        users
      };
    }
    

    case `UPDATE_USER_SUCCESS`: {
      const { users } = action.payload;
      return {
        ...state,
        Users: users
      };
    }

    

    case `MOVE_USER`: {
      return {
        ...state
      }
    }

    case `MOVE_USER_FAILED`: {
      const {users} = action.payload;
      return {
        ...state,
        users,
      };
    }
    

    case `MOVE_USER_SUCCESS`: {
      const { users } = action.payload;
      return {
        ...state,
        Users: users
      };
    }


    default:
      return state;
  }
}

export const showUsers = (state: RootState) => state.showUsers;
