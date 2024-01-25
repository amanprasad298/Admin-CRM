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
                                <li className="breadcrumb-item"><Link to="/customer-add">Add to Customers</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Legal Documnets</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/customer-add" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
           

            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Legal Documents Details</h4>
            </Col>


            <Col md="12">
                <Card>
                    <Card.Body>
                    <Form validated className='mb-3'>
                                    <p>IOC</p>
                                    <Form.File custom>
                                        <Form.File.Input   id="validatedCustomFile" required /> 
                                        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                                    </Form.File>
                                </Form>


                    <Form validated className='mb-3'>
                                    <p>PAN</p>
                                    <Form.File custom>
                                        <Form.File.Input   id="validatedCustomFile" required /> 
                                        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                                    </Form.File>
                                </Form>


                    <Form validated className='mb-3'>
                                    <p>Agreement</p>
                                    <Form.File custom>
                                        <Form.File.Input   id="validatedCustomFile" required /> 
                                        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                                    </Form.File>
                                </Form>

                    <Form validated className='mb-3'>
                                    <p>Person KYC</p>
                                    <Form.File custom>
                                        <Form.File.Input   id="validatedCustomFile" required /> 
                                        <Form.File.Label htmlFor="validatedCustomFile">Choose file...</Form.File.Label>
                                        <Form.Control.Feedback type="invalid">Example invalid custom file feedback</Form.Control.Feedback>
                                    </Form.File>
                                </Form>

                    <div>

                            <p>Letter.pdf</p> 
                            <ProgressBar className="mb-1" now={25} label={"25%"} />
                            <Link to="#"><p>Download</p></Link>
                        
                    </div>

                    <div className="d-flex justify-content-end">
                                    <Link to="/manage-customer"><Button variant="btn btn-secondary mr-2">
                                        Cancel
                                    </Button></Link>
                                    <Link to="/manage-customer"><Button variant="btn btn-dark mr-2">
                                        Add to Customer
                                    </Button></Link>
                                    <Link to="/manage-customer"><Button variant="btn btn-primary">
                                        Submit
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