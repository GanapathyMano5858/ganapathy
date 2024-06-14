import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../Asset/B2b_Main_Logo_.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link, useNavigate } from "react-router-dom"; // Import NavLink, Link, and useNavigate

function NavBar() {
  // UseState Start
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // UseState End

  // React Router Dom Start
  const navigate = useNavigate(); // Define navigate using useNavigate
  // React Router Dom End
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const handleRegister = () => {
    navigate("/sign-up");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const expand = "lg";
  return (
    <>
      <Navbar expand={expand} className="mb-3 navBarBackGround">
        <Container fluid>
          <Navbar.Brand className="m-0 d-block d-lg-none" href="/">
            <img src={Logo} alt="MainLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column flex-lg-row justify-content-around justify-content-lg-between">
              <Navbar.Brand className="m-0 d-none d-lg-block" href="/">
                <img src={Logo} alt="MainLogo" />
              </Navbar.Brand>
              <Nav className="justify-content-center row-gap-4 align-items-center">
                <NavLink
                  className={`py-0 px-4 NavBarLink`}
                  to="/"
                  active
                  ClassName="active"
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  className={`py-0 px-4 NavBarLink`}
                  to="/aboutUs"
                  ClassName="active"
                >
                  About Us
                </NavLink>
                <NavLink
                  className={`py-0 px-4 NavBarLink`}
                  to="/services"
                  ClassName="active"
                >
                  Services
                </NavLink>
                <NavLink
                  className={`py-0 px-4 NavBarLink`}
                  to="/contact"
                  ClassName="active"
                >
                  Contact
                </NavLink>
              </Nav>
              <button
                className="agentLoginBtn"
                type="button"
                data-bs-toggle="modal"
                onClick={handleShow}
                data-bs-target="#agentLoginModalBox"
              >
                Agent Login
              </button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="agentID">
                Agent ID <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="agentID"
                placeholder="&nbsp;"
                name="agentID"
                className=""
                required
                autoComplete="off"
              />
            </div>

            <div className="mb-3 d-flex flex-column">
              <label for="flight_departure_date">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="&nbsp;"
                name="password"
                className=""
                required
                autocomplete="off"
              />
              <i
                onClick={togglePasswordVisibility}
                style={{
                  float: "right",
                  cursor: "pointer",
                  marginRight: "15px",
                  marginTop: "-33px",
                  color: "var(--grayText)",
                }}
                className={
                  showPassword ? "fa fa-fw fa-eye" : "fa fa-fw fa-eye-slash"
                }
              ></i>
            </div>

            <div
              className="mb-3 d-flex justify-content-between"
              style={{ fontSize: "var(--fontSize13)" }}
            >
              <label className="d-inline-flex gap-2 align-items-center justify-content-center">
                <input type="checkbox" name="remeber" className="ui-checkbox" />
                <span>Remember me</span>
              </label>
              <div>
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#forgetpassword"
                  style={{ color: "var(--PrimaryColor)" }}
                >
                  Forget Password
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="" data-bs-dismiss="modal">
                Sign In
              </button>
            </div>
            <div
              className="text-center mt-5"
              style={{ fontSize: "var(--fontSize13)" }}
              onClick={handleRegister}
            >
              <Link data-bs-dismiss="modal">
                <span style={{ color: "var(--blackColor)" }}>
                  Become a Agent ? &nbsp;
                </span>
                <span style={{ color: "var(--PrimaryColor)" }}>Register</span>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;
