import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import  Card from '../../../components/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Fileupload = () => {
     // Collapse state
   const[open,setOpen]=useState(false)
    return (
        <>
         <Container fluid >
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Add New Assets</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            
                            <Form action="/action_page.php">
                                <p>Custom file:</p>
                                <Form.File custom className="mb-3">
                                    <Form.File.Input  id="customFile" name="filename" />
                                    <Form.File.Label  htmlFor="customFile">Choose file</Form.File.Label>
                                    </Form.File>
                                    
                                    <div className="d-flex justify-content-between">
                                    <div className="mt-3">
                                    <Button type="button">Submit</Button>
                                    </div>
                                    <div className="mt-3">
                                    <Link to="/assets"><Button type="button">Back</Button></Link>
                                    </div>
                                    </div>
                            </Form>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Fileupload;