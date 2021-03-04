import React from "react";
import LaunchModal from "./LaunchModal";
import { getLaunch } from "../../redux/actions/launchActions";
import { connect } from "react-redux";

class LaunchCard extends React.Component {
  launchDate = new Date(this.props.cardSubTitle);

  handleClick = async (id) => {
    await getLaunch(id);
  };

  render() {
    const { cardTitle, launchDate, flightId, launchData, cardText } = this.props && this.props;
    return (
      <div className="container">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              { launchDate && launchDate.toLocaleString()}
            </h6>
            <p className="card-text">{cardText}</p>
            <button
              type="button"
              className="btn btn-link btn-sm"
              style={{ padding: 0 }}
              data-toggle="modal"
              data-target="#launchModal"
              onClick={() => this.handleClick(flightId)}
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
  }
}

const mapStateToProps = (state) => {
  return {
    launchData: state.launches.launch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLaunch: async () => await dispatch(getLaunch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchCard);
