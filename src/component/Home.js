import React, { Component } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Row, Col, Button } from "react-bootstrap";
import Icon7 from "../images/icon-7.png";
import Icon10 from "../images/icon-10.png";
import Icon8 from "../images/icon-8.png";
import Icon9 from "../images/icon-9.png";
import Chart from "react-apexcharts";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import {DateRangePicker, DefinedRange} from "react-date-range" 
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      con:false,
      selectionRange:{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: "back",
          data: [1, 4, 25, 71, 99, 61, 61, 21, 48],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Analytics",
          align: "left",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        chart: {
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: [],
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ",",
                headerCategory: "category",
                headerValue: "value",
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
            },
            autoSelected: "zoom",
          },
        },
        subtitle: {
          text: "245/500",

          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 30,
          floating: false,
          style: {
            fontSize: "16px",
            fontWeight: "600",
            // fontFamily: undefined,
            color: "#000",
          },
        },
      },
    };
  }

  calendar=e=>{
    this.setState({con:!this.state.con})
  }
  render() {
    const selectionRange = this.state.selectionRange
    console.log(this.state)
    return (
      <>
      
        <Header /> 
        <SideBar />
        <div className="content">
          <div className="btnbox text-right mb-4">
            <Button variant="false" className="upgrade" onClick={this.calendar}>
              Upgrade
            </Button>
          </div>
          <Row xs={1} md={4} lg={4}>
            <Col>
              <div className="progrssbox">
                <Row className="align-items-center">
                  <Col md="6">
                    <div className="box-div">
                      {/* <div class="progress--circle progress--50">
                        <div class="progress__number">50%</div> 
                      </div> */}
                      <img src={Icon10} />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-progress">
                      <h2>245/500</h2>
                      <p>Attribute 1</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col>
              <div className="progrssbox">
                <Row className="align-items-center">
                  <Col md="6">
                    <div className="box-div">
                      <img src={Icon7} />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-progress">
                      <h2>120</h2>
                      <p>Attribute 2</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col>
              <div className="progrssbox">
                <Row className="align-items-center">
                  <Col md="6">
                    <div className="box-div">
                      <img src={Icon8} />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-progress">
                      <h2>125</h2>
                      <p>Attribute 3</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col>
              <div className="progrssbox">
                <Row className="align-items-center">
                  <Col md="6">
                    <div className="box-div">
                      <img src={Icon9} />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-progress">
                      <h2>0</h2>
                      <p>Attribute 4</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md="12">
              <div className="chartbox">
               
                {this.state.con?
                <div><DateRangePicker
  onChange={item => this.setState({selectionRange:item.selection})}
  showSelectionPreview={true}
  //moveRangeOnFirstSelection={false}
  months={2}
  ranges={[selectionRange]}
 
  direction="horizontal"
/> <button onClick={this.calendar}>Apply</button><button onClick={this.calendar}>Cancel</button> </div>: <div className="form-control width-50" >
                  <span onClick={this.calendar}> {this.state.selectionRange.startDate.toString().slice(0,15).replaceAll(" ",",")}</span> -{" "}
                  <span>{this.state.selectionRange.endDate.toString().slice(0,15).replaceAll(" ",",")}</span>
                  <i class="fa fa-calendar" aria-hidden="true" onClick={this.calendar}></i>
                </div>}
                <div id="chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={320}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-5 copyrightd">
            @ Copyright - Dummy Design 2020 All Rights Reserved
          </div>
        </div>
      </>
    );
  }
}
