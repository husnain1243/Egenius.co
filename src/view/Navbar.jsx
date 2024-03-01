import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../asserts/EgeniusLogo.png';

import "../Style/style.css"

export const Navbar = () => {
  const Route = [
    {
      path: "/LandingPage",
      name: "Future",
      target: "_blank"
    },
    {
      path: "/services",
      name: "Services",
      target: ""
    },
    {
      path: "/projects",
      name: "Projects",
      target: ""
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      target: ""
    },
  ];
  const [routeDate] = useState(Route);
  return (
    <header>
        <nav className="d-block d-lg-none navbar navbar-light bg-dark">
          <div className="container-fluid px-4">
            <div className="logo">
              <div className="logo-container" style={{width: "50px"}}>
                <Link to="/Home" className="link text-decoration-none text-white">
                  <img src={Logo} alt="logo" className="d-block img-fluid m-auto w-100 h-100"/>
                </Link>
                <p className="m-0 p-0">Egenius</p>
              </div>
            </div>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                  <div className="logo">
                    <div className="logo-container" style={{width: "50px"}}>
                      <Link to="/Home" className="link text-decoration-none text-white">
                        <img src={Logo} alt="logo" className="d-block img-fluid m-auto w-100 h-100"/>
                      </Link>
                      <p className="m-0 p-0">Egenius</p>
                    </div>
                  </div>
                <button type="button" className="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="d-flex flex-column justify-content-center gap-3 list-unstyled m-0">
                    {routeDate.map(({ name, path, target  }, index) => {
                      return (
                          <li key={index}>
                            <Link to={path} target={target} className="link text-decoration-none text-white">{name}</Link>
                          </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
      </nav>
      <div className="Navbar d-none d-lg-flex flex-column py-2 bg-dark">
        <nav className="container">
          <div className="row"> 
            <div className="col-12 col-md-2 col-lg-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
              <div className="logo-container" style={{width: "50px"}}>
                <Link to="/" className="link text-decoration-none text-white">
                  <img src={Logo} alt="logo" className="d-block img-fluid m-auto w-100 h-100"/>
                </Link>
                <p className="m-0 p-0">Egenius</p>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <ul className="d-flex flex-row justify-content-center gap-3 list-unstyled m-0">
                  {routeDate.map(({ name, path }, index) => {
                    return (
                        <li key={index}>
                          <Link to={path} className="link text-decoration-none text-white">{name}</Link>
                        </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-0 col-lg-3 d-none d-lg-flex justify-content-end align-items-center">
                <p className="m-0">
                  <a href="mailto:Egenius.co@outlook.com">
                    Egenius.co@outlook.com
                  </a>
                </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
