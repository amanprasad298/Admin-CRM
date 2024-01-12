import React from 'react'
import {Container,Row,Col,Button,Form,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import { Link } from 'react-router-dom'


const Invoices=[
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
    {
        title:'Christian Bale',
        desc:'Our [Survey Name] is designed to gather valuable insights and feedback from our participants. Your opinions and experiences are important to us, and by completing this survey, you can help us improve our products/services and tailor them to better meet your needs.',
    },
]
const Formss = () => {
    return (
        <>
 <Container fluid>
        <Row>
            
            <Col lg="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                   <div className="d-flex align-items-center justify-content-between">
                        <h4 className="font-weight-bold">Forms</h4>
                    </div>  
                    <div className="create-workform">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="modal-product-search d-flex">
                                <Form className="mr-3 position-relative">
                                    <Form.Group className="mb-0">
                                    <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Forms"/>
                                    <Link className="search-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link>
                                    </Form.Group>
                                </Form>
                                <Link to="/forms-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add Form
                                </Link>
                            </div>
                        </div>
                    </div>                    
                </div>
                
                <Row>
                    <Col lg="12">
                        <Card className="card-block card-stretch">
                            <Card.Body className="p-0">
                                <div className="d-flex justify-content-between align-items-center p-3">
                                    <h5 className="font-weight-bold">Froms List</h5>
                                    
                                </div>
                                <div className="table-responsive">
                                    <table className="table data-table mb-0">
                                        <thead className="table-color-heading ">
                                            <tr className="">                                                
                                                
                                                <th scope="col">
                                                    Title
                                                     
                                                </th>

                                                
                                                <th scope="col" className="">
                                                    Description
                                                   
                                                </th>
                                                
                                                <th scope="col" className="text-right">
                                                    Action Items
                                                   
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                    Invoices.map( (item) => (
                                            <tr key={item.title} className="white-space-no-wrap">
                                                
                                                
                                                <td>{item.title}</td>
                                                <td>
                                                    {item.desc}
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-end align-items-center">   
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>} >                                                     
                                                        <Link className="" to="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                        <Link className="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Print" to="/forms-edit">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                            </svg>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </td>
                                            </tr>
                                             ))

                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default Formss;