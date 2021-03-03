import React from "react";
import LaunchModal from "./LaunchModal";
import { getLaunch } from "../../redux/actions/launchActions";
import { useDispatch, useSelector } from "react-redux";

const LaunchCard = ({ cardTitle, cardSubTitle, cardText, flightId }) => {
  const launchDate = new Date(cardSubTitle);

  const launchData = useSelector((state) => state.launches.launch);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getLaunch(flightId));
  };

  return (
    <div className="container">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {launchDate.toLocaleString()}
          </h6>
          <p className="card-text">{cardText}</p>
          <button
            type="button"
            className="btn btn-link btn-sm"
            style={{ padding: 0 }}
            data-toggle="modal"
            data-target="#launchModal"
            onClick={handleClick}
          >
            Learn More
          </button>
          <div
            className="modal fade"
            id="launchModal"
            tabIndex="-1"
            aria-labelledby="launchModal"
            aria-hidden="true"
          >
            <LaunchModal flightData={launchData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
