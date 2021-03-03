import { GET_LAUNCHES, GET_LAUNCH } from "../actions/launchTypes";

const initialState = {
  launches: [],
  launch: [],

};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNCHES:
      return {
        ...state,
        launches: action.payload,
      };

    case GET_LAUNCH:
      return {
        ...state,
        launch: action.payload,
      };

    default:
      return initialState;
  }
};

export { launchReducer };
