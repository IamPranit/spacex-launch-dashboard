import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../actions/authTypes";

const initialState = {
  isLoggedIn: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
