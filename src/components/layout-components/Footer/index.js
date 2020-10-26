import React, { Component, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactDOM from "react-dom";



import {
  Button,
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledTooltip,
} from "reactstrap";




class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer-wrapper mt-5">
          <div className="bg-first py-5">
            <div className="container pt-sm-0 pt-md-5">
              <div className="px-0 col-lg-6 col-md-8 col-sm-12 mx-auto text-center">
                
                <div>
                <a href="https://www.uc.edu/">
                  <img alt="..." src={require("assets/UC logo project.jpg")} />
                </a></div>
              

                <h1 className="display-3 mb-4 text-white font-weight-bold">
                  ITSC
                </h1>
                <p className="font-size-lg text-white-50">
                  Developed by students, faculty, and alumni at the Information
                  Technology Solutions Center.
                </p>
              </div>
              {/* eslint-disable-next-line max-len */}

              <div className="mt-5">
                <small className="text-center d-block text-white-50">
                  Copyright &copy; 2020 -{` `}
                  <a
                    className="text-white"
                    href="https://cech.uc.edu/schools/it/centers/itsolutionscenter.html"
                    title="ITSC"
                  >
                    ITSC
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
