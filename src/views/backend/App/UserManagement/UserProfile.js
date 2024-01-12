import React from 'react'
import { Link } from 'react-router-dom'
import { Col,Row,Container ,ProgressBar} from 'react-bootstrap'
import  Card from '../../../../components/Card'

//img
import user1 from '../../../../assets/images/user/1.jpg'

const UserProfile = () => {
    return (
        <>
         <Container fluid>
                <Row>
                    <Col lg="4">
                        <Card className="card-block p-card">
                            <div className="profile-box">
                            <div className="profile-card rounded">
                                <img src={user1} alt="profile-bg"
                                    className="avatar-100 rounded d-block mx-auto img-fluid mb-3" />
                                <h3 className="font-600 text-white text-center mb-0">John Doe</h3>
                                <p className="text-white text-center mb-5">Web Developer</p>
                            </div>
                            <div className="pro-content rounded">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-icon mr-3">
                                        <i className="las la-envelope-open-text"></i>
                                    </div>
                                    <p className="mb-0 eml">johndoe989@gmail.com</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-icon mr-3">
                                        <i className="las la-phone"></i>
                                    </div>
                                    <p className="mb-0">(123) 123 1234</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-icon mr-3">
                                        <i className="las la-map-marked"></i>
                                    </div>
                                    <p className="mb-0">USA</p>
                                </div>
                            </div>
                            </div>
                        </Card>
                        
                    </Col>
                    <Col lg="8">
                        <Card className="card-block">
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title mb-0">About Me</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                
                            </Card.Body>
                        </Card>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile