import  React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
// img
import  user1  from  '../../../assets/images/user/1.jpg'

const Leadsedit =()=>{
    return(
        <>
        <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/leads">Leads</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit Leads</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/leads" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold d-flex align-items-center">Edit Leads</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                                <Form className="row g-3 date-icon-set-modal">

                                <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Lead Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Full Name" defaultValue="Christ"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Company Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Company Name" defaultValue="Christ"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Email</Form.Label>
                                        <Form.Control  type="email" id="Text1" placeholder="Enter Email" defaultValue="christian.Bale@blueberrye.com"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Phone Number</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Phone Number" defaultValue="+1 (021) 145-2256"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">Product Interested</Form.Label>
                                        <select defaultValue="ABCD" id="inputcountry" className="form-select form-control choicesjs text-muted" >
                                            <option value="" hidden disabled>Select</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                        </select>
                                    </div>

                                    
                                    
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">Assign to</Form.Label>
                                        <select defaultValue="ABCD" id="inputcountry" className="form-select form-control choicesjs text-muted" >
                                            <option value="" hidden disabled>Select</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                            <option value="USA">ABCD</option>
                                        </select>
                                    </div>


                                    <div className="col-md-12 mb-3">
                                        <Form.Label htmlFor="Text9" className="font-weight-bold text-muted text-uppercase">Address</Form.Label>
                                        <Form.Control as="textarea" id="Text9" rows="2" defaultValue="XYZ Colony, ABC Road, Ohio, USA" placeholder="Enter Address"/>
                                    </div>
                                    

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">Source</Form.Label>
                                        <select defaultValue="Facebook" id="inputcountry" className="form-select form-control choicesjs text-muted" >
                                            <option value="" hidden disabled>Select</option>
                                            <option value="USA">Facebook</option>
                                            <option value="USA">Instagram</option>
                                            <option value="USA">LinkedIn</option>
                                            <option value="USA">Website</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">Status</Form.Label>
                                        <select defaultValue="Cold" id="inputcountry" className="form-select form-control choicesjs text-muted" >
                                            <option value="" hidden disabled>Select</option>
                                            <option value="USA">Cold</option>
                                            <option value="USA">Walk in</option>
                                            <option value="USA">Converted</option>
                                            <option value="USA">Dead</option>
                                        </select>
                                    </div>                                   
                                </Form>
                                <div className="d-flex flex-wrap justify-content-between mt-3">
                                    <Button variant="btn btn-secondary font-weight-bold btn-sm">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Delete Lead
                                        </div>                                        
                                    </Button>
                                    <Button variant="btn btn-primary font-weight-bold btn-sm">
                                        Save Lead
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

export default Leadsedit;
