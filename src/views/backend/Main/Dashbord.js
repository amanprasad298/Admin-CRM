import React from 'react'
// import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";

//datepicker
import Datepickers from '../../../components/Datepicker';

//circularpro
import 'react-circular-progressbar/dist/styles.css';
import { Card,Container,Row,Col,Dropdown } from 'react-bootstrap';

// img
import product1 from '../../../assets/images/products/1.jpg'
import product2 from '../../../assets/images/products/2.jpg'
import product13 from '../../../assets/images/products/13.jpg'
import product4 from '../../../assets/images/products/4.jpg'
import user1 from '../../../assets/images/user/1.jpg'
import user5 from '../../../assets/images/user/5.jpg'
import user2 from '../../../assets/images/user/2.jpg'
import user3 from '../../../assets/images/user/3.jpg'


const Dashbord = () => {

    
   
    const chart1={
         options : {
           
          colors: ['#3378FF', '#19b3b3'],
            chart: {
            fontFamily: 'DM Sans',
            toolbar:{
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "vertical",
              shadeIntensity: 0.5,
              // gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: false,
              opacityFrom: .8,
              opacityTo: .2,
              stops: [0, 50, 100],
              colorStops: []
            }
          },        
          grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
          },
          yaxis: {
            labels: {
            offsetY:0,
            minWidth: 20,
            maxWidth: 20
            },
          },
          xaxis: {
            type: 'datetime',
            labels: {
              minHeight: 20,
              maxHeight: 20
            },
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          },
          series: [{
            name: 'Leads',
            data: [90, 105, 72, 90, 65, 109, 130]
          }, {
            name: 'Customers',
            data: [115, 93, 75, 102, 144, 52, 71]
          }]
    }
       

    const chart2={
        options : {
          
          colors: ['#b3cccc', '#04237D', '#4d4dff'],
            chart: {
            
            toolbar:{
              show: false,
            },
            sparkline: {
              enabled: true,
            },
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '40%',
              distributed: true,
              borderRadius: 5,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
          },
          
          xaxis: {
            categories: [           
              '30 Jan',
              '25 Feb',
              '28 Mar', 
            ],
            labels: {
              minHeight: 20,
              maxHeight: 20,
              style: {
                fontSize: '12px'
              }
            }
          }
          },
          series: [{
            data: [55, 42, 19, 30, 20, 65, 21, 23, 45, 60, 30, 20]
          }]
  
    }
    const chart3={
         options : {
           
            chart: {
            height:330,
            type: 'donut',
            
          },
         
          labels: ["Cold","Walk In", "Converted", "Dead"],
          colors: ['#ffbb33', '#04237D', '#e60000', '#8080ff'],
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270,
              donut:{
                size: '80%',               
                labels:{
                  show:true,
                  total:{
                    show:true,
                    color: '#BCC1C8',
                    fontSize: '18px',
                    fontFamily: 'DM Sans',
                    fontWeight: 600,
                  },
                  value: {
                    show: true,
                    fontSize: '25px',
                    fontFamily: 'DM Sans',
                    fontWeight: 700,
                    color: '#8F9FBC',
                  },
                }
              }
            }
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            lineCap: 'round'
          }, 
          grid:{
            padding: {
             
              bottom: 0,
          }
          },
          legend: {
            position: 'bottom',
            offsetY: 8,
            show:true,
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                height:268
              }
            }
          }]
          },
          series: [43,58,20,35]
    }

    const chart4={
        options : {
          
           chart: {
           height:330,
           type: 'donut',
           
         },
        
         labels: ["Facebook","Instagram", "LinkedIn", "Website"],
         colors: ['#ffbb33', '#04237D', '#e60000', '#8080ff'],
         plotOptions: {
           pie: {
             startAngle: -90,
             endAngle: 270,
             donut:{
               size: '80%',               
               labels:{
                 show:true,
                 total:{
                   show:true,
                   color: '#BCC1C8',
                   fontSize: '18px',
                   fontFamily: 'DM Sans',
                   fontWeight: 600,
                 },
                 value: {
                   show: true,
                   fontSize: '25px',
                   fontFamily: 'DM Sans',
                   fontWeight: 700,
                   color: '#8F9FBC',
                 },
               }
             }
           }
         },
         dataLabels: {
           enabled: false,
         },
         stroke: {
           lineCap: 'round'
         }, 
         grid:{
           padding: {
            
             bottom: 0,
         }
         },
         legend: {
           position: 'bottom',
           offsetY: 8,
           show:true,
         },
         responsive: [{
           breakpoint: 480,
           options: {
             chart: {
               height:268
             }
           }
         }]
         },
         series: [43,58,20,35]
   }

    return (
        <Container fluid>
            <Row>
            <Col md="12" className="mb-4 mt-1">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <h4 className="font-weight-bold">Overview</h4>
                    <div className="form-group mb-0 vanila-daterangepicker d-flex flex-row">
                        <div className="date-icon-set">
                                <Datepickers className="vanila-datepicker" names="start" placeholder="From Date" />
                            <span className="search-link">
                                <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                        </div>   
                            <span className="flex-grow-0">
                            <span className="btn">To</span>
                        </span>
                        <div className="date-icon-set">
                            <Datepickers  names="end" placeholder="To Date" />
                        <span className="search-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                    </div>   
                        
                       
                    </div>
                </div>
            </Col>
            <Col lg="8" md="12">
                <Row>
                    <Col md="6">
                        <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <p className="mb-2 text-secondary">Lead Generation</p>
                                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                                        <h5 className="mb-0 font-weight-bold">5,595</h5>
                                        <p className="mb-0 ml-3 text-success font-weight-bold">+3.55%</p>
                                    </div>                            
                                </div>
                            </div>
                        </Card.Body>
                        </Card>   
                    </Col>
                    
                    <Col md="6">
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <p className="mb-2 text-secondary">Onboarded Customers</p>
                                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                                    <h5 className="mb-0 font-weight-bold">13,984</h5>
                                    <p className="mb-0 ml-3 text-danger font-weight-bold">-9.98%</p>
                                    </div>                            
                                </div>
                            </div>
                        </Card.Body>
                    </Card>   
                    </Col>
                    <Col md="12">
                    <Card>
                        <Card.Body>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <h4 className="font-weight-bold">Report</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#3378FF" />
                                    </svg>
                                    <span>Leads</span>
                                </div>
                                <div className="ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#19b3b3" />
                                                </svg>
                                    <span>Customers</span>
                                </div>
                            </div>
                        </div>
                        <Chart className="custom-chart" options={chart1.options} series={chart1.series} type="area"   height="265"  />
                        </Card.Body>
                    </Card>   
                    </Col>
                </Row>
            </Col>
            <Col lg="4" md="8">
                <Card className="card-block card-stretch card-height">
                    <Card.Header className="card-header-border d-flex justify-content-between">
                        <div className="header-title">
                        <h4 className="card-title">Latest Leads</h4>
                        </div>
                    </Card.Header>
                    <div className="card-body-list">               
                        <ul className="list-style-3 mb-0">
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        <li className="p-3 list-item d-flex justify-content-start align-items-center">
                            <div className="list-style-detail ml-3 mr-2">
                                <p className="mb-0">Rockerz Bluetooth Headset</p>
                            </div>
                            <div className="list-style-action d-flex justify-content-end ml-auto">                        
                                <h6 className="font-weight-bold">xDesks</h6>                        
                            </div>
                        </li>
                        
                        </ul>
                    </div>
                </Card>
                
            </Col>
            
            
            <Col lg="6" md="6">
                <Card>
                    <Card.Body>
                        <h4 className="font-weight-bold mb-3">Lead Status</h4>
                        <Chart className="custom-chart" options={chart3.options} series={chart3.series} type="donut"   height="330"  />
                        <div className="d-flex justify-content-around align-items-center">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="#ffbb33" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#ffbb33" />
                                </svg>
                                
                                <span>Cold</span>
                        </div>
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#e60000" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#e60000" />
                                </svg>
                                
                                <span>Walk In</span>
                        </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#04237D" />
                                </svg>
                                
                                <span>Converted</span>
                        </div>
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#8080ff" />
                                </svg>
                                
                                <span>Dead</span>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col lg="6" md="6">
                <Card>
                    <Card.Body>
                        <h4 className="font-weight-bold mb-3">Lead Sources</h4>
                        <Chart className="custom-chart" options={chart4.options} series={chart4.series} type="donut"   height="330"  />
                        <div className="d-flex justify-content-around align-items-center">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="#ffbb33" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#ffbb33" />
                                </svg>
                                
                                <span>Facebook</span>
                        </div>
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#e60000" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#e60000" />
                                </svg>
                                
                                <span>Instagram</span>
                        </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#04237D" />
                                </svg>
                                
                                <span>LinkedIn</span>
                        </div>
                        <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="18" height="18" rx="2" fill="#8080ff" />
                                </svg>
                                
                                <span>Website</span>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            
           
            </Row>
        </Container>
    )
}

export default Dashbord;