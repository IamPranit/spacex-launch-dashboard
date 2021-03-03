import { SET_QUERY } from "../actions/queryTypes";

const initialState = {
  query: {},
  options: {
      limit: 10,
      page: 1
  },
};

export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      console.log("SET-QUERY = ", action.payload);
      return {
        ...state,
        query: action.payload.query ? action.payload.query : state.query,
        options: action.payload.options ? action.payload.options : state.options
      };

    default:
      return state;
  }
};
