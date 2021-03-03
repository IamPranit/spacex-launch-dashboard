import React, { useEffect } from "react";
import { getAllLaunches } from '../../redux/actions/launchActions';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from "../../redux/actions/queryActions";


const LaunchPagination = ({ launches }) => {
  const cookieStatus = document.cookie.startsWith("userAuth=");

  const { hasNextPage, hasPrevPage } = launches && launches;
  const queryState = useSelector((state) => state.query);
  const { query, options } = queryState && queryState;

  const dispatch = useDispatch();

  useEffect(() => {
    const waitForLaunches = async () => {
      await launches;
      await queryState;
    }
    waitForLaunches();
  });

  const handlePage = (pageQuery) => {
    switch (pageQuery) {
      case "next":
      dispatch(setQuery({ query, options: { limit: 10, page: options.page + 1 } }))
        break;

      case "previous":
      dispatch(setQuery({ query, options: { limit: 10, page: options.page - 1 } }));
        break;
    
      default:
        dispatch(setQuery({ query, options: { limit: 10, page: 1 } }));
        break;
    }

    dispatch(getAllLaunches(queryState));
  }

  return cookieStatus && (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <nav aria-label="Dashboard Launches Pagination">
        <ul className="pagination">
          <li className={`page-item ${hasPrevPage ? "" : "disabled"}`}>
            <div className="page-link" onClick={() => handlePage("previous")}>
              Previous
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" onClick={() => dispatch(setQuery({ query, options: { limit: 10, page: options.page + 1 } }))}>
              { options.page + 1 }
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" onClick={() => dispatch(setQuery({ query, options: { limit: 10, page: options.page + 2 } }))}>
              { options.page + 2 }
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" onClick={() => dispatch(setQuery({ query, options: { limit: 10, page: options.page + 3 } }))}>
              { options.page + 3 }
            </div>
          </li>
          <li className={`page-item ${hasNextPage ? "inherit" : "disabled"}`}>
            <div className="page-link" onClick={() => handlePage("next")}>
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LaunchPagination;

