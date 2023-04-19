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
    invoiceDate: "2023-04-01T16:34:48.893",
    no: "1",
    forMonth: "1",
    totalAmount: "170",
    gstAmount: "10%",
    grandTotal: "1000",
    status: "ok",
  },
  {
    id: "6a0d3e76-ac01-45f3-9674-9da39b683122",
    invoiceDate: "2023-04-01T01:05:15.097",
    no: "2",
    forMonth: "2",
    totalAmount: "270",
    gstAmount: "20%",
    grandTotal: "2000",
    status: "ok",
  },
  {
    id: "d3fde5c8-1c8a-4822-9931-68911d7ee5651",
    invoiceDate: "2023-04-01T16:34:48.893",
    no: "3",
    forMonth: "3",
    totalAmount: "370",
    gstAmount: "30%",
    grandTotal: "3000",
    status: "notOk",
  },
  {
    id: "6a0d3e76-ac11-45f3-9674-9da39b6831222",
    invoiceDate: "2023-04-01T01:05:15.097",
    no: "4",
    forMonth: "4",
    totalAmount: "470",
    gstAmount: "40%",
    grandTotal: "4000",
    status: "notOk",
  },
  {
    id: "d3fde5c8-1c8a-4822-9931-68911d7ee56513",
    invoiceDate: "2023-04-01T16:34:48.893",
    no: "5",
    forMonth: "5",
    totalAmount: "570",
    gstAmount: "50%",
    grandTotal: "5000",
    status: "ok",
  },
  {
    id: "6a0d3e76-ac11-45f3-9674-9da39b68312223",
    invoiceDate: "2023-04-01T01:05:15.097",
    no: "6",
    forMonth: "6",
    totalAmount: "670",
    gstAmount: "60%",
    grandTotal: "6000",
    status: "notOk",
  },
];

const InvoiceManagement = () => {
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
    const ele = document.querySelectorAll(".invoiceCheckBox");

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
    const ele = document.querySelectorAll(".invoiceCheckBox:checked");
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
              className="invoiceCheckBox form-check-input"
              value={cellProps.row.original._id}
            />
          );
        },
        id: "#",
      },
      {
        Header: "Invoice Date",
        Cell: (invoice) => (
          <>
            {handleValidDate(invoice.row.original.invoiceDate)},{" "}
            <small className="text-muted">
              {handleValidTime(invoice.row.original.invoiceDate)}
            </small>
          </>
        ),
      },
      {
        Header: "For Month",
        accessor: "forMonth",
        filterable: false,
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
        filterable: false,
      },
      {
        Header: "GST Amount (%)",
        accessor: "gstAmount",
        filterable: false,
      },
      {
        Header: "Grand Total",
        accessor: "grandTotal",
        filterable: false,
      },
      {
        Header: "PAYMENT STATUS",
        accessor: "status",
        Cell: (cell) => {
          switch (cell.value) {
            case "ok":
              return (
                <span className="badge text-uppercase badge-soft-success">
                  {" "}
                  {cell.value}{" "}
                </span>
              );
            case "notOk":
              return (
                <span className="badge text-uppercase badge-soft-danger">
                  {" "}
                  {cell.value}{" "}
                </span>
              );
            default:
              return (
                <span className="badge text-uppercase badge-soft-info">
                  {" "}
                  {cell.value}{" "}
                </span>
              );
          }
        },
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
          <BreadCrumb title="Invoice Management" pageTitle="Ecommerce" />
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
                    <h5 className="card-title mb-0 flex-grow-1">Invoices</h5>
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
                        isInvoiceFilter
                        SearchPlaceholder="Search for invoices"
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

export default InvoiceManagement;
