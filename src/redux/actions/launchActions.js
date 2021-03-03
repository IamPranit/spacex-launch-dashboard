import axios from "axios";
import { GET_LAUNCHES, GET_LAUNCH } from "./launchTypes";
import { SERVER_URL } from "../../constants/Constants";

axios.defaults = { withCredentials: true }

export const getAllLaunches = (queryObj) => async (dispatch) => {
  try {
    let launches;
    const { query, options } = queryObj;

    launches = await axios.post(`${SERVER_URL}/spacex`, {
      query: query && query,
      options: options && options
    }, {
      withCredentials: true
    });

    const payload = launches.data.data;

    await dispatch({ type: GET_LAUNCHES, payload });
    return true;
  } catch (err) {
    console.log(err);
  }
};

export const getLaunch = (flightNumber) => async (dispatch) => {
  try {
    const launch = await axios.get(`${SERVER_URL}/spacex/${flightNumber}`, {
      withCredentials: true
    });
    
    const payload = launch.data.data;

    payload && dispatch({ type: GET_LAUNCH, payload });
  } catch (err) {
    console.log(err);
  }
};
