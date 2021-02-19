import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import Icon1 from "../images/icon-1.png";
import Icon2  from "../images/icon-2.png";
import Icon3 from "../images/icon-3.png";
import Icon4 from "../images/icon-4.png";
import Icon5 from "../images/icon-5.png";
import Icon6 from "../images/icon-6.png";
import Icon11 from "../images/icon-11.png";

 export default class SideBar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/" className="active">
                <i className="fa fa-television" aria-hidden="true"></i> Menu
                Option 1
              </Link>
            </li>

            <Dropdown as="li">
              <Dropdown.Toggle
                variant="false"
                as="a"
                href="#"
                id="dropdown-basic"
              >
                <i className="fa fa-suitcase" aria-hidden="true"></i> Menu
                Option 2
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as="li">
              <Dropdown.Toggle
                variant="false"
                as="a"
                href="#"
                id="dropdown-basic"
              >
                <i class="fa fa-object-group" aria-hidden="true"></i> Menu
                Option 3
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as="li">
              <Link to="#">
                <i class="fa fa-columns" aria-hidden="true"></i> Menu Option 4
              </Link>
            </Dropdown>
            <Dropdown as="li">
              <Link to="#">
                <i class="fa fa-indent" aria-hidden="true"></i> Menu Option 5
              </Link>
            </Dropdown>
            <Dropdown as="li">
              <Link to="#">
                <i class="fa fa-clone" aria-hidden="true"></i> Menu Option 6
              </Link>
            </Dropdown>
          </ul>

          <ul className="bottom-div">
            <Dropdown as="li">
              <Link to="#" className="activediv">
                <i class="fa fa-diamond"></i>
                Menu Option 7
              </Link>
            </Dropdown>
            <Dropdown as="li">
              <Link to="#" className="active" style={{ padding: "30px 15px" }}>
                <i class="fa fa-cog" aria-hidden="true"></i>
                Menu Option 7
              </Link>
            </Dropdown>
          </ul>
        </div>
      </>
    );
  }
}
