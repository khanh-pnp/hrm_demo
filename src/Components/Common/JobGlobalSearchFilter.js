import React, { useState } from "react";
import { Col } from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

const JobGlobalFilter = () => {
  const [jobStatus, setJobStatus] = useState([]);

  function handleJobStatus(jobstatus) {
    setJobStatus(jobstatus);
  }

  const jobstatus = [
    {
      options: [
        { label: "All", value: "all" },
        { label: "Completed", value: "completed" },
        { label: "UnCompleted", value: "unCompleted" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Col sm={6} className="col-xxl-2">
        <div>
          <Flatpickr
            className="form-control"
            id="datepicker-publish-input"
            placeholder="Select a date"
            // options={{
            //   altInput: true,
            //   altFormat: "F j, Y",
            //   mode: "multiple",
            //   dateFormat: "d.m.y",
            // }}
          />
        </div>
      </Col>

      <Col sm={4} className="col-xxl-2">
        <div>
          <Select
            value={jobStatus}
            onChange={(e) => {
              handleJobStatus(e.value);
            }}
            options={jobstatus}
            name="choices-single-default"
            id="idStatus"
            placeholder="Select status"
          ></Select>
        </div>
      </Col>

      <Col sm={4} className="col-xxl-1">
        <button type="button" className="btn btn-primary w-100">
          {" "}
          <i className="ri-equalizer-fill me-1 align-bottom"></i>
          Filters
        </button>
      </Col>
    </React.Fragment>
  );
};

export { JobGlobalFilter };
