import  React from 'react'
import {Container,Row,Col,Form,Button,InputGroup,ProgressBar} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
//datepicker
import Datepickers from '../../../components/Datepicker';
import EditTable from '../Table/EditTable';
import Validations from '../Forms/FormControls/Validations';






const Customeradd = () =>{

   

    return(
        <>
        <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/manage-customer">Customers</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/manage-customer" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Add New Customer</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                                <Form className="row g-3 date-icon-set-modal">

                                    
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Client Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Client Name"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Founder Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Founder Name"/>
                                    </div>
                                    
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Contact Number</Form.Label>
                                        <Form.Control  type="number" id="Text1" placeholder="+91 XXXXX XXXXX"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">E-mail</Form.Label>
                                        <Form.Control  type="email" id="Text1" placeholder="Enter Email-Id"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Branch Manager Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Branch Manager Name"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Branch Manager’s E-mail</Form.Label>
                                        <Form.Control  type="email" id="Text1" placeholder="Enter Branch Manager’s E-mail"/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Branch Manager’s contact Number</Form.Label>
                                        <Form.Control  type="number" id="Text1" placeholder="+91 XXXXX XXXXX"/>
                                    </div>                                                                  

                                    {/* <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">State/ UT</Form.Label>
                                        <select defaultValue="" id="inputcountry" className="form-select form-control choicesjs" >
                                            <option value="" hidden disabled>Select State</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                                <option value="Assam">Assam</option>
                                                                <option value="Bihar">Bihar</option>
                                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                                <option value="Goa">Goa</option>
                                                                <option value="Gujarat">Gujarat</option>
                                                                <option value="Haryana">Haryana</option>
                                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                                <option value="Jharkhand">Jharkhand</option>
                                                                <option value="Karnataka">Karnataka</option>
                                                                <option value="Kerala">Kerala</option>
                                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                                <option value="Maharashtra">Maharashtra</option>
                                                                <option value="Manipur">Manipur</option>
                                                                <option value="Meghalaya">Meghalaya</option>
                                                                <option value="Mizoram">Mizoram</option>
                                                                <option value="Nagaland">Nagaland</option>
                                                                <option value="Odisha">Odisha</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="Rajasthan">Rajasthan</option>
                                                                <option value="Sikkim">Sikkim</option>
                                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                                <option value="Telangana">Telangana</option>
                                                                <option value="Tripura">Tripura</option>
                                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                                <option value="Uttarakhand">Uttarakhand</option>
                                                                <option value="West Bengal">West Bengal</option>
                                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                                                <option value="Lakshadweep">Lakshadweep</option>
                                                                <option value="Delhi">Delhi </option>
                                                                <option value="Puducherry">Puducherry</option>
                                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                                <option value="Ladakh">Ladakh</option>
                                        </select>
                                    </div> */}

                                    
                                   
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Branch Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Branch Name"/>
                                    </div> 
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Employee Count</Form.Label>
                                        <Form.Control  type="number" id="Text1" placeholder="Enter Employee Count"/>
                                    </div> 
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Company Name</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Company Name"/>
                                    </div> 
                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Product Opted</Form.Label>
                                        <Form.Control  type="text" id="Text1" placeholder="Enter Product Opted"/>
                                    </div> 


                                                                       
                                </Form>
                                {/* <div className="d-flex justify-content-end mt-3">
                                    <Button variant="btn btn-primary">
                                        Add Customer
                                    </Button>
                                </div> */}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>                
            </Col>

            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Services Details</h4>
            </Col>

            <Col md="12">
            <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                               <EditTable/>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>   

            </Col>

            <Col md="12">
            <Card>
                    <Card.Body>
                        <Row>
                            <Col md="5">
                                
                                <Col>

                                    <div className='d-flex flex-row align-items-center justify-content-between mb-4'>
                                    <h5>SubTotal</h5>
                                    <h5 className='text-secondary'>₹ 450</h5>
                                    </div>

                                    <div className='d-flex flex-row align-items-center justify-content-between mb-4'>
                                    <h6>IGST (9%)</h6>
                                    <h6 className='text-secondary'>9%</h6>
                                    </div>
                                    <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                                    <h6>SGST (9%)</h6>
                                    <h6 className='text-secondary'>9%</h6>
                                    </div>

                                    <hr/>
                                    
                                    <div className='d-flex flex-row align-items-center justify-content-between'>
                                    <h5>Total</h5>
                                    <h6 className='text-secondary'>₹ 999</h6>
                                    </div>


                                </Col>
                               
                                
                            </Col>


                            
                        </Row>
                           
                    </Card.Body>
                </Card> 

                </Col>

                <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Payment Details</h4>
                </Col>

            <Col md="12">
            <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                                <Form className="row g-3 date-icon-set-modal">

                                    
                                    

                                   

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Security Deposit</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text>INR</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="number" id="Text1" placeholder="Enter Advanced Payment" />
                                        </InputGroup>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Current Year’s Monthly Bill</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text>INR</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="number" id="Text1" placeholder="Enter Current Year’s Monthly Bill" />
                                        </InputGroup>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="Text1" className="font-weight-bold text-muted text-uppercase">Next Year’s Monthly Bill</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text>INR</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="number" id="Text1" placeholder="Enter Next Year’s Monthly Bill" />
                                        </InputGroup>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <Form.Label htmlFor="inputcountry" className="font-weight-bold text-muted text-uppercase">Lock In</Form.Label>
                                        <select defaultValue="" id="inputcountry" className="form-select form-control choicesjs" >
                                            <option value="" hidden disabled>Select</option>
                                            <option value="USA">xDesks</option>
                                            <option value="UK">xRoom</option>
                                            <option value="France">ABCD</option>
                                            <option value="France">XYZ</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3 position-relative">
                                        <Form.Label htmlFor="Text2" className="font-weight-bold text-muted text-uppercase">Next Renewal</Form.Label>
                                        <Datepickers  type="text" className="vanila-datepicker" id="Text2" name="event_date" placeholder="Enter Next Renewal Date" autoComplete="off"/>
                                        <span className="search-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                    </div>


                                                                       
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>    

                <Card>
                    <Card.Body>

                    <div className="d-flex justify-content-end">
                                    <Link to="/manage-customer"><Button variant="btn btn-secondary mr-2">
                                        Cancel
                                    </Button></Link>
                                    <Link to="/manage-customer"><Button variant="btn btn-dark mr-2">
                                        Add to Customer
                                    </Button></Link>
                                    <Link to="/customer-add-2"><Button variant="btn btn-primary">
                                        Next
                                    </Button></Link>
                                </div>


                    </Card.Body>
                </Card>

            </Col>


           

        </Row>
    </Container> 
 
        </>
    )
}

export default Customeradd;