import React, { useState } from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import { getAllLaunches } from "../../redux/actions/launchActions";
import { setQuery } from "../../redux/actions/queryActions";
import { useDispatch, useSelector } from "react-redux";
import DatePickerComponent from "../layout/DatePicker";

const NavBar = () => {
  const cookieStatus = document.cookie.startsWith("userAuth=");
  const history = useHistory();
  const dispatch = useDispatch();
  const [datePicker, setdatePicker] = useState(false);

  const queryState = useSelector((state) => state.query);

  const [path] = useState(history.location.pathname);

  const handleClick = (route) => {
    history.push(route);
  };

  const handleLaunches = (query) => {
    dispatch(setQuery(query));
    dispatch(getAllLaunches(queryState));
  };

  const upcomingQuery = {
    query: {
      date_utc: {
        $gte: new Date().toISOString(),
      },
    },
    options: { limit: 10, page: 1 },
  };

  const pastQuery = {
    query: {
      date_utc: {
        $lte: new Date().toISOString(),
      },
    },
    options: { limit: 10, page: 1 },
  };

  const defaultQuery = {
    query: {},
    options: {
      limit: 10,
      page: 1,
    },
  };

  // const handleDatePicker = () => {
  //   return (<DatePickerComponent />)
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark btnGap navMargin">
        <div className="brandText">
          <div className="navbar-brand">SpaceX Launch Dashboard</div>
        </div>
        <div
          className="navbar-nav"
          style={{ display: `${path === "/dashboard" && cookieStatus ? "inherit" : "none"}` }}
        >
          <div
            className="nav-link text-white"
            onClick={() => handleLaunches(defaultQuery)}
          >
            All Launches
          </div>
          <div
            className="nav-link text-white"
            onClick={() => handleLaunches(pastQuery)}
          >
            Past Launches
          </div>
          <div
            className="nav-link text-white"
            onClick={() => handleLaunches(upcomingQuery)}
          >
            Upcoming Launches
          </div>
          <div className="nav-link text-white">
            <span onClick={() => setdatePicker(!datePicker)}>Date</span>
            {datePicker && <DatePickerComponent />}
          </div>
        </div>
        <div
          className="navbar-nav"
          style={{ display: `${!cookieStatus ? "inherit" : "none"}` }}
        >
          <div className="nav-link" onClick={() => handleClick(`/login`)}>
            Login
          </div>
          <div className="nav-link" onClick={() => handleClick(`register`)}>
            Register
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
