import React,{useState,useEffect} from 'react'
import { Container ,Row, Col,Button,ButtonGroup,Tab,Nav } from 'react-bootstrap'

import  Card from '../../../components/Card'
import jQuery  from 'jquery'
import {Link} from 'react-router-dom'



//NotificationCard
import NotificationCard from '../../../components/NotificationCard'

const $=jQuery

const Assets = () => {

    
return (
        <>
            <Container fluid>
            
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header className="border-bottom-0">
                                <Card.Header.Title>
                                    <h4 className="card-title">Notifications</h4>
                                </Card.Header.Title>
                                
                            </Card.Header>
                            
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card>
                            <div class="btn-group btn-group-toggle btn-group-edges"> 
                                <a class="button btn button-icon bg-primary ml-auto" target="_blank" href="#">Delete</a>
                                <a class="button btn button-icon bg-primary ml-auto" target="_blank" href="#">Favourite</a>
                                <a class="button btn button-icon bg-primary ml-auto" target="_blank" href="#">Mark as Read</a>
                            </div>
                        </Card>
                    </Col>

                
                    

                    
                    <Col md="12">

                        <Card>
                            <Card.Body>
                                
                            
                                <Tab.Container defaultActiveKey="home-tab-pills">
                                    <Nav variant="pills mb-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="home-tab-pills">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile-tab-pills">Favourite</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="contact-tab-pills">Archieved</Nav.Link>
                                    </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                    <Tab.Pane eventKey="home-tab-pills">
                                        <div className="list-content">
                                <div className="list-item">
                                        <div>
                                            <NotificationCard id="1" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.1" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                        <div>
                                            <NotificationCard id="2" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.1" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                        <div>
                                            <NotificationCard id="3" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.1" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                        <div>
                                            <NotificationCard id="4" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.1" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                </div>
                            </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile-tab-pills">
                                        <div className="list-content">
                                <div className="list-item">
                                        <div>
                                            <NotificationCard id="1" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.2" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                </div>
                            </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="contact-tab-pills">
                                        <div className="list-content">
                                <div className="list-item">
                                        <div>
                                            <NotificationCard id="1" className="border-color-left-blue" title="Launch SpaceX" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.3" date="Oct 27, 2021" time="09:45PM"/>
                                        </div> 
                                </div>
                            </div>
                                    </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Card.Body>
                        </Card>


                            
                    </Col>
                    
                </Row>
            </Container>
        </>
)
}

export default Assets