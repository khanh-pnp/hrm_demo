import React, { useState } from "react";
import { Col } from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

const OrderGlobalFilter = () => {
  const [orderStatus, setorderStatus] = useState([]);

  function handleorderStatus(orderstatus) {
    setorderStatus(orderstatus);
  }

  const orderstatus = [
    {
      options: [
        { label: "All", value: "all" },
        { label: "Unpaid", value: "unpaid" },
        { label: "Processing", value: "processing" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
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
            options={{
              altInput: true,
              altFormat: "F j, Y",
              mode: "multiple",
              dateFormat: "d.m.y",
            }}
          />
        </div>
      </Col>

      <Col sm={4} className="col-xxl-2">
        <div>
          <Select
            value={orderStatus}
            onChange={(e) => {
              handleorderStatus(e.value);
            }}
            options={orderstatus}
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

export { OrderGlobalFilter };
