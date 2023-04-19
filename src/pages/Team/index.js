import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Offcanvas,
  OffcanvasBody,
  Row,
  UncontrolledDropdown,
  FormFeedback,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DeleteModal from "../../Components/Common/DeleteModal";
import { ToastContainer } from "react-toastify";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import userdummyimg from "../../assets/images/users/user-dummy-img.jpg";
import smallImage9 from "../../assets/images/small/img-9.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  getTeamData as onGetTeamData,
  deleteTeamData as onDeleteTeamData,
  addTeamData as onAddTeamData,
  updateTeamData as onUpdateTeamData,
} from "../../store/actions";
import * as Yup from "yup";
import { useFormik } from "formik";

const DATA = [
  {
    date: new Date().getTime(),
    id: "1",
    image: "/static/media/img-11.ee2350a5a6accfd99a8d.jpg",
    state: "wear mask",
    name: "Nancy Martino",
    designation: "Dev",
  },
];

const Team = () => {
  const dispatch = useDispatch();

  const { teamData } = useSelector((state) => ({
    teamData: state.Team.teamData,
  }));

  const [team, setTeam] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [teamList, setTeamlist] = useState([]);

  //Modal
  const [teamMem, setTeamMem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [isModalSend, setIsModalSend] = useState(false);

  useEffect(() => {
    dispatch(onGetTeamData());
  }, [dispatch]);

  useEffect(() => {
    setTeam(teamData);
    setTeamlist(teamData);
  }, [teamData]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setTeamMem(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  // Update To do
  const handleTeamClick = useCallback(
    (arg) => {
      const teamMem = arg;
      setTeamMem({
        id: teamMem.id,
        name: teamMem.name,
        designation: teamMem.designation,
        projectCount: teamMem.projectCount,
        taskCount: teamMem.taskCount,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Add To do
  const handleTeamClicks = () => {
    setTeamMem("");
    setModal(!modal);
    setIsEdit(false);
    toggle();
  };

  // delete
  const onClickData = (team) => {
    setTeam(team);
    setDeleteModal(true);
  };

  const handleDeleteTeamData = () => {
    if (team) {
      dispatch(onDeleteTeamData(team));
      setDeleteModal(false);
    }
  };

  const toggleModalSend = () => {
    setIsModalSend(!isModalSend);
    validationSend.resetForm();
  };

  useEffect(() => {
    const list = document.querySelectorAll(".team-list");
    const buttonGroups = document.querySelectorAll(".filter-button");
    for (let i = 0; i < buttonGroups.length; i++) {
      buttonGroups[i].addEventListener("click", onButtonGroupClick);
    }

    function onButtonGroupClick(event) {
      if (
        event.target.id === "list-view-button" ||
        event.target.parentElement.id === "list-view-button"
      ) {
        document.getElementById("list-view-button").classList.add("active");
        document.getElementById("grid-view-button").classList.remove("active");
        list.forEach(function (el) {
          el.classList.add("list-view-filter");
          el.classList.remove("grid-view-filter");
        });
      } else {
        document.getElementById("grid-view-button").classList.add("active");
        document.getElementById("list-view-button").classList.remove("active");
        list.forEach(function (el) {
          el.classList.remove("list-view-filter");
          el.classList.add("grid-view-filter");
        });
      }
    }
  }, []);

  const searchList = (e) => {
    let inputVal = e.toLowerCase();

    const filterItems = (arr, query) => {
      return arr.filter((el) => {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    };

    let filterData = filterItems(teamData, inputVal);
    setTeamlist(filterData);
    if (filterData.length === 0) {
      document.getElementById("noresult").style.display = "block";
      document.getElementById("teamlist").style.display = "none";
    } else {
      document.getElementById("noresult").style.display = "none";
      document.getElementById("teamlist").style.display = "block";
    }
  };

  //OffCanvas
  const [isOpen, setIsOpen] = useState(false);
  const [sideBar, setSideBar] = useState([]);

  //Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggledropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (teamMem && teamMem.name) || "",
      designation: (teamMem && teamMem.designation) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter team Name"),
      designation: Yup.string().required("Please Enter Your designation"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateTeamData = {
          id: teamMem ? teamMem.id : 0,
          name: values.name,
          designation: values.designation,
          projectCount: values.projectCount,
          taskCount: values.taskCount,
        };
        // save edit Team data
        dispatch(onUpdateTeamData(updateTeamData));
        validation.resetForm();
      } else {
        const newTeamData = {
          id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          name: values.name,
          designation: values.designation,
          projectCount: 0,
          taskCount: 0,
          backgroundImg: smallImage9,
        };
        // save new TeamData
        dispatch(onAddTeamData(newTeamData));
        validation.resetForm();
      }
      toggle();
    },
  });

  // validation send messages
  const validationSend = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.number().required("Please enter name"),
      phoneNumber: Yup.number().required("Please enter phone number"),
    }),
    onSubmit: (values) => {
      // dispatch(onAddTeamData(newTeamData));
      validationSend.resetForm();
      toggle();
    },
  });

  return (
    <React.Fragment>
      <ToastContainer closeButton={false} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => handleDeleteTeamData()}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Team" pageTitle="Pages" />
          <Card>
            <CardBody>
              <Row className="g-2">
                <Col sm={4}>
                  <div className="search-box">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Search for name or designation..."
                      onChange={(e) => searchList(e.target.value)}
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
                <Col className="col-sm-auto ms-auto">
                  <div className="list-grid-nav hstack gap-1">
                    <Button
                      color="info"
                      id="grid-view-button"
                      className="btn btn-soft-info nav-link btn-icon fs-14 active filter-button"
                    >
                      <i className="ri-grid-fill"></i>
                    </Button>
                    <Button
                      color="info"
                      id="list-view-button"
                      className="btn btn-soft-info nav-link  btn-icon fs-14 filter-button"
                    >
                      <i className="ri-list-unordered"></i>
                    </Button>
                    <Dropdown isOpen={dropdownOpen} toggle={toggledropDown}>
                      <DropdownToggle
                        type="button"
                        className="btn btn-soft-info btn-icon fs-14"
                      >
                        <i className="ri-more-2-fill"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <li>
                          <Link className="dropdown-item" to="#">
                            All
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Last Week
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Last Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Last Year
                          </Link>
                        </li>
                      </DropdownMenu>
                    </Dropdown>
                    <Button color="success" onClick={() => handleTeamClicks()}>
                      <i className="ri-add-fill me-1 align-bottom"></i> Add
                      Members
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Row>
            <Col lg={12}>
              <div id="teamlist">
                <Row className="team-list grid-view-filter">
                  {(DATA || []).map((item, key) => (
                    <Col key={key}>
                      <Card className="team-box">
                        <CardBody className="p-4">
                          <Row className="align-items-center team-row">
                            <Col className="team-settings">
                              <Row className="justify-content-end">
                                <UncontrolledDropdown
                                  direction="start"
                                  className="col text-end"
                                >
                                  <DropdownToggle
                                    tag="a"
                                    id="dropdownMenuLink2"
                                    role="button"
                                  >
                                    <i className="ri-more-fill fs-17 text-dark"></i>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem
                                      className="dropdown-item edit-list"
                                      href="#addmemberModal"
                                      onClick={() => handleTeamClick(item)}
                                    >
                                      <i className="ri-pencil-line me-2 align-bottom text-muted"></i>
                                      Edit
                                    </DropdownItem>
                                    <DropdownItem
                                      className="dropdown-item remove-list"
                                      href="#removeMemberModal"
                                      onClick={() => onClickData(item)}
                                    >
                                      <i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>
                                      Remove
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </Row>
                            </Col>
                            <Col lg={4} className="col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail flex-shrink-0">
                                  {item.userImage != null ? (
                                    <img
                                      src={item.userImage}
                                      alt=""
                                      className="img-fluid d-block"
                                    />
                                  ) : (
                                    <div className="avatar-title text-uppercase border bg-light text-primary">
                                      {item.name.charAt(0) +
                                        item.name
                                          .split(" ")
                                          .slice(-1)
                                          .toString()
                                          .charAt(0)}
                                    </div>
                                  )}
                                </div>
                                <div className="team-content">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      setIsOpen(!isOpen);
                                      setSideBar(item);
                                    }}
                                  >
                                    <h5 className="fs-16 mb-1">{item.name}</h5>
                                  </Link>
                                  <p className="text-muted mb-0">
                                    {item?.designation}
                                  </p>
                                  <p className="text-muted mb-0">
                                    Status: Available
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={2} className="col">
                              <div
                                className="btn btn-success view-btn"
                                onClick={() => setIsModalSend(true)}
                              >
                                Send
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <div
                  className="modal fade"
                  id="sendMessages"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <Modal isOpen={modal} toggle={toggle} centered>
                      <ModalBody>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          <Row>
                            <Col lg={12}>
                              <div className="mb-2">
                                <div className="d-flex justify-content-between mb-2">
                                  <h5
                                    className="modal-title"
                                    id="createMemberLabel"
                                  >
                                    {!isEdit
                                      ? "Add New Members"
                                      : "Edit Member"}
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setModal(false)}
                                    id="sendMessages-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="position-relative d-flex justify-content-center">
                                  <div className="position-absolute bottom-0">
                                    <label
                                      htmlFor="member-image-input"
                                      className="mb-0"
                                      style={{ marginLeft: "60px" }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="right"
                                      title="Select Member Image"
                                    >
                                      <div className="avatar-xss">
                                        <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                          <i className="ri-image-fill"></i>
                                        </div>
                                      </div>
                                    </label>
                                    <input
                                      className="form-control d-none"
                                      defaultValue=""
                                      id="member-image-input"
                                      type="file"
                                      accept="image/png, image/gif, image/jpeg"
                                    />
                                  </div>
                                  <div className="avatar-md">
                                    <div className="avatar-title bg-light">
                                      <img
                                        src={userdummyimg}
                                        alt=" "
                                        id="member-img"
                                        className="avatar-md rounded-circle h-auto"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label
                                  htmlFor="teammembersName"
                                  className="form-label"
                                >
                                  Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="teammembersName"
                                  placeholder="Enter name"
                                  name="name"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.name || ""}
                                  invalid={
                                    validation.touched.name &&
                                    validation.errors.name
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.name &&
                                validation.errors.name ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.name}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="designation"
                                  className="form-label"
                                >
                                  Designation
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="designation"
                                  placeholder="Enter designation"
                                  name="designation"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.designation || ""}
                                  invalid={
                                    validation.touched.designation &&
                                    validation.errors.designation
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.designation &&
                                validation.errors.designation ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.designation}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  onClick={() => setModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  id="addNewMember"
                                >
                                  {!isEdit ? "Add Member" : "Save"}
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="sendMessages"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <Modal
                      isOpen={isModalSend}
                      toggle={toggleModalSend}
                      centered
                    >
                      <ModalBody>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validationSend.handleSubmit();
                            return false;
                          }}
                        >
                          <Row>
                            <Col lg={12}>
                              <div className="mb-2">
                                <div className="d-flex justify-content-end mb-2">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    onClick={toggleModalSend}
                                    id="sendMessages-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="position-relative d-flex justify-content-center">
                                  <div className="position-absolute bottom-0">
                                    <label
                                      htmlFor="member-image-input"
                                      className="mb-0"
                                      style={{ marginLeft: "60px" }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="right"
                                      title="Select Member Image"
                                    >
                                      <div className="avatar-xss">
                                        <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                          <i className="ri-image-fill"></i>
                                        </div>
                                      </div>
                                    </label>
                                    <input
                                      className="form-control d-none"
                                      defaultValue=""
                                      id="member-image-input"
                                      type="file"
                                      accept="image/png, image/gif, image/jpeg"
                                    />
                                  </div>
                                  <div className="avatar-md">
                                    <div className="avatar-title bg-light">
                                      <img
                                        src={userdummyimg}
                                        alt=" "
                                        id="member-img"
                                        className="avatar-md rounded-circle h-auto"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="phone" className="form-label">
                                  Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter name"
                                  name="name"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  onChange={validationSend.handleChange}
                                  onBlur={validationSend.handleBlur}
                                  value={validationSend.values.name || ""}
                                  invalid={
                                    validationSend.touched.name &&
                                    validationSend.errors.name
                                      ? true
                                      : false
                                  }
                                />
                                {validationSend.touched.name &&
                                validationSend.errors.name ? (
                                  <FormFeedback type="invalid">
                                    {validationSend.errors.name}
                                  </FormFeedback>
                                ) : null}
                              </div>

                              <div className="mb-3">
                                <Label htmlFor="phone" className="form-label">
                                  Phone Number
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="phone"
                                  placeholder="Enter phone number"
                                  name="phone"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  onChange={validationSend.handleChange}
                                  onBlur={validationSend.handleBlur}
                                  value={
                                    validationSend.values.phoneNumber || ""
                                  }
                                  invalid={
                                    validationSend.touched.phoneNumber &&
                                    validationSend.errors.phoneNumber
                                      ? true
                                      : false
                                  }
                                />
                                {validationSend.touched.phoneNumber &&
                                validationSend.errors.phoneNumber ? (
                                  <FormFeedback type="invalid">
                                    {validationSend.errors.phoneNumber}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  onClick={toggleModalSend}
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  id="send"
                                >
                                  Send
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>

                <Offcanvas
                  isOpen={isOpen}
                  direction="end"
                  toggle={() => setIsOpen(!isOpen)}
                  className="offcanvas-end border-0"
                  tabIndex="-1"
                  id="member-overview"
                >
                  <OffcanvasBody className="profile-offcanvas p-0">
                    <div className="team-cover">
                      <img
                        src={sideBar.backgroundImg || smallImage9}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="p-3">
                      <div className="team-settings">
                        <Row>
                          <Col>
                            <div className="bookmark-icon flex-shrink-0 me-2">
                              <Input
                                type="checkbox"
                                id="favourite13"
                                className="bookmark-input bookmark-hide"
                              />
                              <Label htmlFor="favourite13" className="btn-star">
                                <svg width="20" height="20">
                                  {/* <use xlink:href="#icon-star"/> */}
                                </svg>
                              </Label>
                            </div>
                          </Col>
                          <UncontrolledDropdown
                            direction="start"
                            className="col text-end"
                          >
                            <DropdownToggle
                              tag="a"
                              id="dropdownMenuLink14"
                              role="button"
                            >
                              <i className="ri-more-fill fs-17"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>
                                <i className="ri-eye-line me-2 align-middle" />
                                View
                              </DropdownItem>
                              <DropdownItem>
                                <i className="ri-star-line me-2 align-middle" />
                                Favorites
                              </DropdownItem>
                              <DropdownItem>
                                <i className="ri-delete-bin-5-line me-2 align-middle" />
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Row>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <img
                        src={sideBar.userImage || avatar2}
                        alt=""
                        className="avatar-lg img-thumbnail rounded-circle mx-auto"
                      />
                      <div className="mt-3">
                        <h5 className="fs-15 profile-name">
                          <Link to="#" className="link-primary">
                            {sideBar.name || "Nancy Martino"}
                          </Link>
                        </h5>
                        <p className="text-muted profile-designation">
                          {sideBar.designation || "Team Leader & HR"}
                        </p>
                      </div>
                      <div className="hstack gap-2 justify-content-center mt-4">
                        <div className="avatar-xs">
                          <Link
                            to="#"
                            className="avatar-title bg-soft-secondary text-secondary rounded fs-16"
                          >
                            <i className="ri-facebook-fill"></i>
                          </Link>
                        </div>
                        <div className="avatar-xs">
                          <Link
                            to="#"
                            className="avatar-title bg-soft-success text-success rounded fs-16"
                          >
                            <i className="ri-slack-fill"></i>
                          </Link>
                        </div>
                        <div className="avatar-xs">
                          <Link
                            to="#"
                            className="avatar-title bg-soft-info text-info rounded fs-16"
                          >
                            <i className="ri-linkedin-fill"></i>
                          </Link>
                        </div>
                        <div className="avatar-xs">
                          <Link
                            to="#"
                            className="avatar-title bg-soft-danger text-danger rounded fs-16"
                          >
                            <i className="ri-dribbble-fill"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Row className="g-0 text-center">
                      <Col xs={6}>
                        <div className="p-3 border border-dashed border-start-0">
                          <h5 className="mb-1 profile-project">
                            {sideBar.projectCount || "124"}
                          </h5>
                          <p className="text-muted mb-0">Projects</p>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="p-3 border border-dashed border-start-0">
                          <h5 className="mb-1 profile-task">
                            {sideBar.taskCount || "81"}
                          </h5>
                          <p className="text-muted mb-0">Tasks</p>
                        </div>
                      </Col>
                    </Row>
                    <div className="p-3">
                      <h5 className="fs-15 mb-3">Personal Details</h5>
                      <div className="mb-3">
                        <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">
                          Number
                        </p>
                        <h6>+(256) 2451 8974</h6>
                      </div>
                      <div className="mb-3">
                        <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">
                          Email
                        </p>
                        <h6>nancymartino@email.com</h6>
                      </div>
                      <div>
                        <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">
                          Location
                        </p>
                        <h6 className="mb-0">Carson City - USA</h6>
                      </div>
                    </div>
                    <div className="p-3 border-top">
                      <h5 className="fs-15 mb-4">File Manager</h5>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0 avatar-xs">
                          <div className="avatar-title bg-soft-danger text-danger rounded fs-16">
                            <i className="ri-image-2-line"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">
                            <Link to="#">Images</Link>
                          </h6>
                          <p className="text-muted mb-0">4469 Files</p>
                        </div>
                        <div className="text-muted">12 GB</div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0 avatar-xs">
                          <div className="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                            <i className="ri-file-zip-line"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">
                            <Link to="#">Documents</Link>
                          </h6>
                          <p className="text-muted mb-0">46 Files</p>
                        </div>
                        <div className="text-muted">3.46 GB</div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="flex-shrink-0 avatar-xs">
                          <div className="avatar-title bg-soft-success text-success rounded fs-16">
                            <i className="ri-live-line"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">
                            <Link to="#">Media</Link>
                          </h6>
                          <p className="text-muted mb-0">124 Files</p>
                        </div>
                        <div className="text-muted">4.3 GB</div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xs">
                          <div className="avatar-title bg-soft-primary text-primary rounded fs-16">
                            <i className="ri-error-warning-line"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">
                            <Link to="#">Others</Link>
                          </h6>
                          <p className="text-muted mb-0">18 Files</p>
                        </div>
                        <div className="text-muted">846 MB</div>
                      </div>
                    </div>
                  </OffcanvasBody>
                  <div className="offcanvas-foorter border p-3 hstack gap-3 text-center position-relative">
                    <button className="btn btn-light w-100">
                      <i className="ri-question-answer-fill align-bottom ms-1"></i>{" "}
                      Send Message
                    </button>
                    <Link to="/pages-profile" className="btn btn-primary w-100">
                      <i className="ri-user-3-fill align-bottom ms-1"></i> View
                      Profile
                    </Link>
                  </div>
                </Offcanvas>
              </div>
              <div
                className="py-4 mt-4 text-center"
                id="noresult"
                style={{ display: "none" }}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="loop"
                  colors="primary:#405189,secondary:#0ab39c"
                  style={{ width: "72px", height: "72px" }}
                ></lord-icon>
                <h5 className="mt-4">Sorry! No Result Found</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Team;
