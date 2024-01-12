import  React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'






const Formsadd = () =>{
    return(
        <>
        <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/formss">Forms</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Form</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/formss" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Add New Form</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                                <Form className="row g-3 date-icon-set-modal">

                                    <div className="col-md-12 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Title</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Title"/>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <Form.Label htmlFor="Text9" className="font-weight-bold text-muted text-uppercase">Description</Form.Label>
                                        <Form.Control as="textarea" id="Text9" rows="2" placeholder="Enter Description"/>
                                    </div>

                                    <div className="col-md-12 mb-3">

                                        <Form.Label className="font-weight-bold text-muted text-uppercase">Data Inputs</Form.Label><br/>
                                        
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                            <label class="custom-control-label" for="customCheck1">Name</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                                            <label class="custom-control-label" for="customCheck2">Address</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                                            <label class="custom-control-label" for="customCheck3">Company Name</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck4"/>
                                            <label class="custom-control-label" for="customCheck4">Product Interested</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck5"/>
                                            <label class="custom-control-label" for="customCheck5">Phone Number</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck6"/>
                                            <label class="custom-control-label" for="customCheck6">E-mail</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck7"/>
                                            <label class="custom-control-label" for="customCheck7">Team size</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck8"/>
                                            <label class="custom-control-label" for="customCheck8">Turn over</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck9"/>
                                            <label class="custom-control-label" for="customCheck9">Message</label>
                                        </div>
                                        <div class="custom-control custom-checkbox custom-control-inline mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck10"/>
                                            <label class="custom-control-label" for="customCheck10">Doc Upload</label>
                                        </div>
                                        


                                        

                                    </div>        


                                </Form>
                                <div className="d-flex justify-content-end mt-3">
                                    <Button variant="btn btn-primary">
                                        Add Form
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>                
            </Col>
        </Row>
    </Container> 
 
        </>
    )
}

export default Formsadd;