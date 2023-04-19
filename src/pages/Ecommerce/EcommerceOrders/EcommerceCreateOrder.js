import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { orderSummary } from "../../../common/data/ecommerce";

const EcommerceCheckout = () => {
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [pickupModal, setPickupModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);

  const toggleDeletemodal = () => {
    setDeleteModal(!deletemodal);
  };

  const togglemodal = () => {
    setPickupModal(false);
    setDeliveryModal(false);
  };

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Create Order" pageTitle="Ecommerce" />
          <Row>
            <Col xl="8">
              <Card>
                <CardBody className="checkout-tab">
                  <Form action="#">
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                      <Nav
                        className="nav-pills nav-justified custom-nav"
                        role="tablist"
                      >
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 1,
                                done: activeTab <= 4 && activeTab >= 0,
                              },
                              "p-3 fs-15"
                            )}
                            onClick={() => {
                              toggleTab(1);
                            }}
                          >
                            <i className="ri-shopping-bag-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Order Infomation
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 2,
                                done: activeTab <= 4 && activeTab >= 0,
                              },
                              "p-3 fs-15"
                            )}
                            onClick={() => {
                              toggleTab(2);
                            }}
                          >
                            <i className="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Personal Infomation
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 3,
                                done: activeTab <= 4 && activeTab > 1,
                              },
                              "p-3 fs-15"
                            )}
                            onClick={() => {
                              toggleTab(3);
                            }}
                          >
                            <i className="ri-truck-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Shipping Infomation
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 4,
                                done: activeTab <= 4 && activeTab > 3,
                              },
                              "p-3 fs-15"
                            )}
                            onClick={() => {
                              toggleTab(4);
                            }}
                          >
                            <i className="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Finish
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">
                        <div>
                          <Row>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label className="form-label">Name</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Nane"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">Contact</Label>
                                <Input
                                  type="number"
                                  className="form-control"
                                  placeholder="Enter Contact"
                                />
                              </div>
                              <div className="mb-3">
                                <Label
                                  for="addaddress-Name"
                                  className="form-label"
                                >
                                  Postal Code
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Postal Code"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">Address</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Address"
                                  disabled
                                />
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label className="form-label">Unit No</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Unit No"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Parcel Size
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Parcel Size"
                                />
                              </div>
                              <div className="mb-3">
                                <Label className="form-label">
                                  Item Description
                                </Label>
                                <textarea
                                  className="form-control"
                                  placeholder="Enter Description"
                                  rows="5"
                                ></textarea>
                              </div>
                            </Col>
                          </Row>
                          <div className="d-flex align-items-start mt-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                toggleTab(activeTab + 1);
                              }}
                            >
                              <i className="ri-truck-line label-icon align-middle fs-16 ms-2"></i>
                              Proceed to Personal
                            </button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={2} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Billing Information</h5>
                          <p className="text-muted mb-4">
                            Please fill all information below
                          </p>
                        </div>
                        <div>
                          <Row>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="billinginfo-firstName"
                                  className="form-label"
                                >
                                  First Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="billinginfo-firstName"
                                  placeholder="Enter first name"
                                />
                              </div>
                            </Col>

                            <Col sm={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="billinginfo-lastName"
                                  className="form-label"
                                >
                                  Last Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="billinginfo-lastName"
                                  placeholder="Enter last name"
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="billinginfo-email"
                                  className="form-label"
                                >
                                  Email
                                  <span className="text-muted">(Optional)</span>
                                </Label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="billinginfo-email"
                                  placeholder="Enter email"
                                />
                              </div>
                            </Col>

                            <Col sm={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="billinginfo-phone"
                                  className="form-label"
                                >
                                  Phone
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="billinginfo-phone"
                                  placeholder="Enter phone no."
                                />
                              </div>
                            </Col>
                          </Row>
                          <div className="mb-3">
                            <Label
                              htmlFor="billinginfo-address"
                              className="form-label"
                            >
                              Address
                            </Label>
                            <textarea
                              className="form-control"
                              id="billinginfo-address"
                              placeholder="Enter address"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <button
                              type="button"
                              className="btn btn-light btn-label previestab"
                              onClick={() => {
                                toggleTab(activeTab - 1);
                              }}
                            >
                              <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                              Back to Order
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                toggleTab(activeTab + 1);
                              }}
                            >
                              <i className="ri-truck-line label-icon align-middle fs-16 ms-2"></i>
                              Proceed to Shipping
                            </button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={3}>
                        <Row>
                          <Col sm={6} xs={12}>
                            <div className="d-flex flex-row justify-content-between">
                              <h5 className="mb-1">Pickup Information</h5>
                              <button
                                type="button"
                                className="btn btn-sm btn-success mb-3"
                                onClick={() => setPickupModal(true)}
                              >
                                Add Address
                              </button>
                            </div>
                            <div className="card-radio">
                              <Label
                                className="form-check-label"
                                htmlFor="shippingAddress01"
                              >
                                <span className="mb-4 fw-semibold d-block text-muted text-uppercase">
                                  Home Address
                                </span>

                                <span className="fs-14 mb-2 d-block">
                                  Marcus Alfaro
                                </span>
                                <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                  4739 Bubby Drive Austin, TX 78729
                                </span>
                                <span className="text-muted fw-normal d-block">
                                  Mo. 012-345-6789
                                </span>
                              </Label>
                            </div>
                            <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                              <div>
                                <Link
                                  to="#"
                                  className="d-block text-body p-1 px-2"
                                  onClick={() => setPickupModal(true)}
                                >
                                  <i className="ri-pencil-fill text-muted align-bottom me-1"></i>
                                  Edit
                                </Link>
                              </div>
                              <div>
                                <Link
                                  to="#"
                                  className="d-block text-body p-1 px-2"
                                  onClick={toggleDeletemodal}
                                >
                                  <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </Col>
                          <Col sm={6} xs={12}>
                            <div className="d-flex flex-row justify-content-between">
                              <h5 className="mb-1">Delivery Information</h5>
                              <button
                                type="button"
                                className="btn btn-sm btn-success mb-3"
                                onClick={() => setDeliveryModal(true)}
                              >
                                Add Address
                              </button>
                            </div>
                            <div className="card-radio">
                              <Label
                                className="form-check-label"
                                htmlFor="shippingAddress02"
                              >
                                <span className="mb-4 fw-semibold d-block text-muted text-uppercase">
                                  Office Address
                                </span>

                                <span className="fs-14 mb-2 d-block">
                                  James Honda
                                </span>
                                <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                  1246 Virgil Street Pensacola, FL 32501
                                </span>
                                <span className="text-muted fw-normal d-block">
                                  Mo. 012-345-6789
                                </span>
                              </Label>
                            </div>
                            <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                              <div>
                                <Link
                                  to="#"
                                  className="d-block text-body p-1 px-2"
                                  onClick={() => setDeliveryModal(true)}
                                >
                                  <i className="ri-pencil-fill text-muted align-bottom me-1"></i>
                                  Edit
                                </Link>
                              </div>
                              <div>
                                <Link
                                  to="#"
                                  className="d-block text-body p-1 px-2"
                                  onClick={toggleDeletemodal}
                                >
                                  <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Personal
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-label right ms-auto nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            <i className="ri-shopping-basket-line label-icon align-middle fs-16 ms-2"></i>
                            Complete Order
                          </button>
                        </div>
                      </TabPane>
                      <TabPane tabId={4} id="pills-finish">
                        <div className="text-center py-5">
                          <div className="mb-4">
                            <lord-icon
                              src="https://cdn.lordicon.com/lupuorrc.json"
                              trigger="loop"
                              colors="primary:#0ab39c,secondary:#405189"
                              style={{ width: "120px", height: "120px" }}
                            ></lord-icon>
                          </div>
                          <h5>Thank you ! Your Order is Completed !</h5>
                          <p className="text-muted">
                            You will receive an order confirmation email with
                            details of your order.
                          </p>

                          <h3 className="fw-semibold">
                            Order ID:{" "}
                            <a
                              href="apps-ecommerce-order-details"
                              className="text-decoration-underline"
                            >
                              VZ2451
                            </a>
                          </h3>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4}>
              <Card>
                <CardHeader>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Order Summary</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive table-card">
                    <table className="table table-borderless align-middle mb-0">
                      <thead className="table-light text-muted">
                        <tr>
                          <th style={{ width: "90px" }} scope="col">
                            Product
                          </th>
                          <th scope="col">Product Info</th>
                          <th scope="col" className="text-end">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderSummary.map((product, key) => (
                          <React.Fragment key={key}>
                            <tr>
                              <td>
                                <div className="avatar-md bg-light rounded p-1">
                                  <img
                                    src={product.img}
                                    alt=""
                                    className="img-fluid d-block"
                                  />
                                </div>
                              </td>
                              <td>
                                <h5 className="fs-14">
                                  <Link
                                    to="/apps-ecommerce-product-details"
                                    className="text-dark"
                                  >
                                    {product.name}
                                  </Link>
                                </h5>
                                <p className="text-muted mb-0">
                                  $ {product.price} x {product.quantity}
                                </p>
                              </td>
                              <td className="text-end">$ {product.total}</td>
                            </tr>
                          </React.Fragment>
                        ))}

                        <tr>
                          <td className="fw-semibold" colSpan="2">
                            Sub Total :
                          </td>
                          <td className="fw-semibold text-end">$ 359.96</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            Discount{" "}
                            <span className="text-muted">(Team0315)</span>:{" "}
                          </td>
                          <td className="text-end">- $ 50.00</td>
                        </tr>
                        <tr>
                          <td colSpan="2">Shipping Charge :</td>
                          <td className="text-end">$ 24.99</td>
                        </tr>
                        <tr>
                          <td colSpan="2">Estimated Tax (12%): </td>
                          <td className="text-end">$ 18.20</td>
                        </tr>
                        <tr className="table-active">
                          <th colSpan="2">Total (USD) :</th>
                          <td className="text-end">
                            <span className="fw-semibold">$353.15</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* modal Delete Address */}
      <Modal
        isOpen={deletemodal}
        role="dialog"
        autoFocus={true}
        centered
        id="removeItemModal"
        toggle={toggleDeletemodal}
      >
        <ModalHeader
          toggle={() => {
            setDeleteModal(!deletemodal);
          }}
        ></ModalHeader>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#f06548"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you sure ?</h4>
              <p className="text-muted mx-4 mb-0">
                Are you Sure You want to Remove this Address ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button
              type="button"
              className="btn w-sm btn-light"
              onClick={() => {
                setDeleteModal(!deletemodal);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn w-sm btn-danger"
              onClick={() => {
                setDeleteModal(!deletemodal);
              }}
            >
              Yes, Delete It!
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* modal Add Address */}
      <Modal
        isOpen={pickupModal || deliveryModal}
        role="dialog"
        autoFocus={true}
        centered
        toggle={() => togglemodal()}
      >
        <ModalHeader toggle={() => togglemodal()}>
          <h5 className="modal-title">Address</h5>
        </ModalHeader>
        <ModalBody>
          <div>
            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Postal Code
              </Label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter Postal Code"
              />
            </div>
            <div className="mb-3">
              <Label className="form-label">Address</Label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                disabled
              />
            </div>
            <div className="mb-3">
              <Label className="form-label">Unit No</Label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter Unit No"
              />
            </div>
            <div className="mb-3">
              <Label className="form-label">Sub Block</Label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter Sub Block"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => togglemodal()}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => togglemodal()}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EcommerceCheckout;
