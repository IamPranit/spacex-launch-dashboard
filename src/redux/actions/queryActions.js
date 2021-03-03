import { SET_QUERY } from "./queryTypes";

export const setQuery = (queryObj) => async (dispatch) => {
  try {
    const { query, options } = queryObj;
    const payload = {
      query: query && query,
      options: options && options,
    };

    await dispatch({ type: SET_QUERY, payload });
    return true;
  } catch (err) {
    console.log(err);
  }
};
