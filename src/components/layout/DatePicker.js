import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setQuery } from "../../redux/actions/queryActions";
import { getAllLaunches } from "../../redux/actions/launchActions";
import { useDispatch, useSelector } from "react-redux";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  const queryState = useSelector((state) => state.query);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (!!end) {
      const dateQuery = {
        query: {
          date_utc: {
            $gte: start && start.toISOString(),
            $lte: end && end.toISOString(),
          },
        },
        options: { limit: 10, page: 1 },
      };

      dispatch(setQuery(dateQuery));
      dispatch(getAllLaunches(queryState));
    }
  };

  return (
    <div className="container">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  );
};

export default DatePickerComponent;
