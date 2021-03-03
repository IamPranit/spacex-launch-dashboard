import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === verifyPassword) {
      dispatch(userRegister(state));
      setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword: "",
      });
    } else {
      setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword: "",
      });
    }
  };
  
  const { firstName, lastName, email, password, verifyPassword } = state;
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Register</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="verifyPassword">Verify Password</label>
              <input
                type="password"
                className="form-control"
                id="verifyPassword"
                name="verifyPassword"
                value={verifyPassword}
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

export default Register;
