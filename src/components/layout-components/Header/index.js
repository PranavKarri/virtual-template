import React, { Component, Fragment } from "react";

import clsx from "clsx";
import { Link } from "@reach/router";
import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

import projectLogo from "../../../assets/images/react.svg";

class Header extends Component {
  render() {
    const { headerShadow } = this.props;

    return (
      <Fragment>
        <div className="header-nav-wrapper header-nav-wrapper-lg" />
        <div
          className={clsx(
            `app-header bg-second header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light`,
            { "app-header--shadow": headerShadow }
          )}
        >
          <div className="container-fluid">
            <Nav pills className="mr-auto align-items-center">
              <NavbarBrand
                to="/"
                title="Bamburgh React UI Kit with Reactstrap Free"
              >
                <i className="bg-transparent">
                  {/* <img
                    alt="Bamburgh React UI Kit with Reactstrap Free"
                    style={{ width: `50px` }}
                    src={projectLogo}
                  /> */}
                </i>
              </NavbarBrand>
              <NavLink href="https://www.uc.edu/">
                  <img alt="..." src={require("assets/UC logo project.jpg")} />
                
              </NavLink>

              <NavItem>
                <NavLink tag={Link} className="d-block mr-1" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="d-block mr-1" to="/DevOps">
                  DevOps
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="d-block mr-1" to="/OCAT">
                  OCAT
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} className="d-block mr-1" to="/VEaas">
                  VEaaS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="d-block mr-1" to="/CECH">
                  CECH Web
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
