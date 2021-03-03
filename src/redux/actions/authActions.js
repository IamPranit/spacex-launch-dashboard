import axios from "axios";
import { SERVER_URL } from "../../constants/Constants";
import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "./authTypes";

export const userLogin = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;

    const user = await axios.post(
      `${SERVER_URL}/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    const auth = user.data.success;

    localStorage.setItem("loggedIn", auth);

    const payloadData = localStorage.getItem("loggedIn");

    dispatch({
      type: USER_LOGIN,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await axios.get(`${SERVER_URL}/auth/logout`, {
      withCredentials: true,
    });

    localStorage.removeItem("loggedIn");

    const payloadData = localStorage.getItem("loggedIn");

    dispatch({
      type: USER_LOGOUT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
export const userRegister = (userData) => async (dispatch) => {
  try {
    const { firstName, lastName, email, password } = userData;
    const user = await axios.post(`${SERVER_URL}/users`, {
      firstName,
      lastName,
      email,
      password,
    });

    const payloadData = user.data;

    dispatch({
      type: USER_REGISTER,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
