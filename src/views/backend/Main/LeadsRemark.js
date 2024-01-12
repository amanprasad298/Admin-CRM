import  React from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'






const Leadsadd = () =>{
    return(
        <>
        <Container fluid>
        <Row>
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                   <div className="d-flex align-items-center justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb p-0 mb-0">
                                <li className="breadcrumb-item"><Link to="/leads">Manage Leads</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Remark</li>
                            </ol>
                        </nav>
                    </div>
                    <Link to="/leads" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link>
                </div>
            </Col>
            <Col lg="12" className="mb-3 d-flex justify-content-between">
                <h4 className="font-weight-bold0 d-flex align-items-center">Add Remark</h4>
            </Col>
            <Col lg="12">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md="12">
                                <Form className="row g-3 date-icon-set-modal">
                                                                       
                                    <div className="col-md-12 mb-3">
                                        <Form.Label htmlFor="Text9" className="font-weight-bold text-muted text-uppercase">Remark</Form.Label>
                                        <Form.Control as="textarea" id="Text9" rows="2" placeholder="Enter your remark"/>
                                    </div>
                                                                 
                                </Form>
                                <div className="d-flex justify-content-end mt-3">
                                    <Button variant="btn btn-primary">
                                        Save
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

export default Leadsadd;