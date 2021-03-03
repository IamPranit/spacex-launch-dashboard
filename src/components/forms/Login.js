import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(userLogin(state));

    history.push("/dashboard");
  };

  const { email, password } = state;
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
