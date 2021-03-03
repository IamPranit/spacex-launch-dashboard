import React, { useEffect, useState } from "react";
import { getAllLaunches } from "../../redux/actions/launchActions";
import { useDispatch, useSelector } from "react-redux";
import LaunchCard from "./LaunchCard";
import LaunchPagination from "../layout/LaunchPagination";

const LaunchList = () => {
  const launches = useSelector((state) => state.launches.launches);
  const queryState = useSelector((state) => state.query);

  const [isLoading, setIsLoading] = useState(false);

  

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const dispatchAction = async () => {
      await dispatch(getAllLaunches(queryState));
      setIsLoading(false);
    };
    dispatchAction();
  }, [dispatch, queryState]);

  return !isLoading ? (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {launches &&
            launches.docs &&
            launches.docs.length &&
            launches.docs.map((launch, index) => (
              <LaunchCard
                key={index}
                flightNumber={launch.flight_number}
                flightId={launch.id}
                cardTitle={launch.name}
                cardSubTitle={launch.date_utc}
                cardText={launch.details}
              />
            ))}
        </div>
        <LaunchPagination launches={launches && launches} />
      </div>
    </div>
  ) : (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LaunchList;
