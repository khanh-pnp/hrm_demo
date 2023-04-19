import React, { useState, useEffect, useMemo } from "react";
import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as moment from "moment";
import CountUp from "react-countup";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import DeleteModal from "../../Components/Common/DeleteModal";
import FeatherIcon from "feather-icons-react";
import { invoiceWidgets } from "../../common/data/invoiceList";
import {
  getInvoices as onGetInvoices,
  deleteInvoice as onDeleteInvoice,
} from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/Common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DATA = [
  {
    id: "d3fde5c8-1c8a-4822-9931-68911d7ee565",
    jobDate: "2023-04-01T16:34:48.893",
    trackingNumber: 17.0,
    name: "a-0",
    contact: "000-000-000",
    address: "HCM city 0",
    type: "",
    date: "",
    status: "Completed",
    driver: "Huper 0",
    pkts: "",
  },
  {
    id: "6a0d3e76-ac01-45f3-9674-9da39b683122",
    jobDate: "2023-04-01T01:05:15.097",
    trackingNumber: 17.0,
    name: "a-1",
    contact: "000-000-000",
    address: "HCM city 1",
    type: "",
    date: "",
    status: "Completed",
    driver: "Huper 1",
    pkts: "",
  },
  {
    id: "d3fde5c8-1c8a-4822-9931-68911d7ee5651",
    jobDate: "2023-04-01T16:34:48.893",
    trackingNumber: 17.0,
    name: "a-2",
    contact: "000-000-000",
    address: "HCM city 2",
    type: "",
    date: "",
    status: "Not Complete",
    driver: "Huper 2",
    pkts: "",
  },
  {
    id: "6a0d3e76-ac11-45f3-9674-9da39b6831222",
    jobDate: "2023-04-01T01:05:15.097",
    trackingNumber: 17.0,
    name: "a-3",
    contact: "000-000-000",
    address: "HCM city 3",
    type: "",
    date: "",
    status: "Not Complete",
    driver: "Huper 3",
    pkts: "",
  },
  {
    id: "d3fde5c8-1c8a-4822-9931-68911d7ee56513",
    jobDate: "2023-04-01T16:34:48.893",
    trackingNumber: 17.0,
    name: "a-4",
    contact: "000-000-000",
    address: "HCM city 4",
    type: "",
    date: "",
    status: "Completed",
    driver: "Huper 4",
    pkts: "",
  },
  {
    id: "6a0d3e76-ac11-45f3-9674-9da39b68312223",
    jobDate: "2023-04-01T01:05:15.097",
    trackingNumber: 17.0,
    name: "a-5",
    contact: "000-000-000",
    address: "HCM city 5",
    type: "",
    date: "",
    status: "Completed",
    driver: "Huper 5",
    pkts: "",
  },
];

const JobManagement = () => {
  const dispatch = useDispatch();
  const { invoices, isInvoiceSuccess, error } = useSelector((state) => ({
    invoices: state.Invoice.invoices,
    isInvoiceSuccess: state.Invoice.isInvoiceSuccess,
    error: state.Invoice.error,
  }));

  //delete invoice
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    if (invoices && !invoices.length) {
      dispatch(onGetInvoices());
    }
  }, [dispatch, invoices]);

  useEffect(() => {
    setInvoice(invoices);
  }, [invoices]);

  // Delete Data
  const onClickDelete = (invoice) => {
    setInvoice(invoice);
    setDeleteModal(true);
  };

  const handleDeleteInvoice = () => {
    if (invoice) {
      dispatch(onDeleteInvoice(invoice._id));
      setDeleteModal(false);
    }
  };

  const handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const handleValidTime = (time) => {
    const time1 = new Date(time);
    const getHour = time1.getUTCHours();
    const getMin = time1.getUTCMinutes();
    const getTime = `${getHour}:${getMin}`;
    var meridiem = "";
    if (getHour >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    const updateTime =
      moment(getTime, "hh:mm").format("hh:mm") + " " + meridiem;
    return updateTime;
  };

  // Checked All
  const checkedAll = () => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".jobCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
  };

  // Delete Multiple
  const deleteMultiple = () => {
    const ele = document.querySelectorAll(".jobCheckBox:checked");
    const checkall = document.getElementById("checkBoxAll");
    ele.forEach((element) => {
      dispatch(onDeleteInvoice(element.value));
    });
    checkall.checked = false;
  };

  //Column
  const columns = useMemo(
    () => [
      {
        Header: (
          <input
            type="checkbox"
            id="checkBoxAll"
            className="form-check-input"
            onClick={() => checkedAll()}
          />
        ),
        Cell: (cellProps) => {
          return (
            <input
              type="checkbox"
              className="jobCheckBox form-check-input"
              value={cellProps.row.original._id}
            />
          );
        },
        id: "#",
      },
      {
        Header: "Job Date",
        Cell: (job) => (
          <>
            {handleValidDate(job.row.original.jobDate)},{" "}
            <small className="text-muted">
              {handleValidTime(job.row.original.jobDate)}
            </small>
          </>
        ),
      },
      {
        Header: "Tracking Number",
        accessor: "trackingNumber",
        filterable: false,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: false,
      },
      {
        Header: "Contract",
        accessor: "contract",
        filterable: false,
      },
      {
        Header: "Address",
        accessor: "address",
        filterable: false,
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: false,
      },
      {
        Header: "ICON",
        accessor: "date",
        filterable: false,
      },
      {
        Header: "Status",
        accessor: "status",
        filterable: false,
      },
      {
        Header: "Driver",
        accessor: "driver",
        filterable: false,
      },
      {
        Header: "Pkts",
        accessor: "pkts",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm dropdown"
                tag="button"
              >
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="/apps-invoices-details">
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href="/apps-invoices-create">
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem href="/#">
                  <i className="ri-download-2-line align-bottom me-2 text-muted"></i>{" "}
                  Download
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem
                  href="#"
                  onClick={() => {
                    const invoiceData = cellProps.row.original;
                    onClickDelete(invoiceData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={() => handleDeleteInvoice()}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            deleteMultiple();
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <BreadCrumb title="Job Management" pageTitle="Ecommerce" />
          <Row>
            {invoiceWidgets.map((invoicewidget, key) => (
              <React.Fragment key={key}>
                <Col xl={3} md={6}>
                  <Card className="card-animate">
                    <CardBody>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <p className="text-uppercase fw-medium text-muted mb-0">
                            {invoicewidget.label}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <h5
                            className={
                              "fs-14 mb-0 text-" + invoicewidget.percentageClass
                            }
                          >
                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                            {invoicewidget.percentage}
                          </h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                          <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                            <CountUp
                              start={0}
                              prefix={invoicewidget.prefix}
                              suffix={invoicewidget.suffix}
                              decimals="2"
                              end={invoicewidget.counter}
                              duration={4}
                              className="counter-value"
                            />
                          </h4>
                          <span className="badge bg-warning me-1">
                            {invoicewidget.badge}
                          </span>{" "}
                          <span className="text-muted">
                            {" "}
                            {invoicewidget.caption}
                          </span>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                          <span className="avatar-title bg-light rounded fs-3">
                            <FeatherIcon
                              icon={invoicewidget.feaIcon}
                              className="text-success icon-dual-success"
                            />
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </React.Fragment>
            ))}
          </Row>

          <Row>
            <Col lg={12}>
              <Card id="InvoiceManagement">
                <CardHeader className="border-0">
                  <div className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Jobs</h5>
                    {/* <div className="flex-shrink-0">
                      <div className="d-flex gap-2 flex-wrap">
                        <button
                          className="btn btn-primary me-1"
                          onClick={() => setDeleteModalMulti(true)}
                        >
                          <i className="ri-delete-bin-2-line"></i>
                        </button>
                        <Link
                          to="/apps-invoices-create"
                          className="btn btn-danger"
                        >
                          <i className="ri-add-line align-bottom me-1"></i>{" "}
                          Create Invoice
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div>
                    {isInvoiceSuccess && invoices.length ? (
                      <TableContainer
                        columns={columns}
                        data={DATA || []}
                        isGlobalFilter={true}
                        isAddUserList={false}
                        customPageSize={10}
                        className="custom-header-css"
                        isInvoiceListFilter={true}
                        theadClass="text-muted"
                        isJobFilter
                        SearchPlaceholder="Search for jobs"
                      />
                    ) : (
                      <Loader error={error} />
                    )}
                    <ToastContainer closeButton={false} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default JobManagement;
