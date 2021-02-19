import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../images/user.png";
import { Dropdown } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container-fluid">
            <div className="logo">
              <Link to="/">Logo Here</Link>
            </div>
            <div className="user-div">
              <Dropdown>
                <Dropdown.Toggle
                  variant="false"
                  as="a"
                  href="#"
                  id="dropdown-basic"
                  className="user-toggle"
                >
                  <img src={User} alt="" />
                  <span>
                    Dropdown Button
                    <small>Dummy Design.com</small>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </>
    );
  }
}
