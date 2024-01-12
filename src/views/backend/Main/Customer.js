import  React from 'react'
import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
// img


import User1 from '../../../assets/images/user/1.jpg'
import User2 from '../../../assets/images/user/2.jpg'
import User3 from '../../../assets/images/user/3.jpg'
import User4 from '../../../assets/images/user/4.jpg'
import User5 from '../../../assets/images/user/5.jpg'
import User6 from '../../../assets/images/user/6.jpg'

const customers=[
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
    {
        founderName:'Christian Bale',
        companyName:'Webhood Infotech',
        companyEmail:'webhoodinfotech@gmail.com',
        founderImg:`${User1}`,
        ManagerImg:`${User2}`,
        logo:`${User3}`,
        managerNumber:'+91 XXXXX XXXXX',
        managerEmail:'christian.Bale@blueberrye.com',
        opt:'xDesks',
        monthlyBill:'1,00,000',
        renewalDate:'Oct 17, 2024',
        agreement:'webhood_agreement.pdf'
    },
]

const Customer = () =>{
 return (
        <> 
            <Container fluid>
            <Row>
                <Col lg="12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                       <div className="d-flex align-items-center justify-content-between">
                            <h4 className="font-weight-bold">Manage Customer</h4>
                        </div>  
                        <div className="create-workform">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="modal-product-search d-flex">
                                    <Form className="mr-3 position-relative">
                                        <Form.Group className="mb-0">
                                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Customer"/>
                                        <Link to="#" className="search-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </Link>
                                        </Form.Group>
                                    </Form>
                                    <Link to="/customer-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add Customer
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
                                        <h5 className="font-weight-bold">Customer List</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table data-table mb-0">
                                            <thead className="table-color-heading">
                                                <tr className="">
                                                    
                                                    <th scope="col">
                                                        Founder Name
                                                    </th>
                                                    <th scope="col">
                                                        Comapny Details
                                                    </th>
                                                    <th scope="col">
                                                        Branch Manager Details
                                                    </th>
                                                    <th scope="col">
                                                        Product Opted
                                                    </th>
                                                    <th scope="col">
                                                        Monthly Bill
                                                    </th>
                                                    <th scope="col">
                                                        Next Renewal
                                                    </th>
                                                    <th scope="col">
                                                        Agreement
                                                    </th>
                                                    <th scope="col" className=""> 
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    customers.map( (item) => (
                                                    <tr key={item.des} className="white-space-no-wrap">
                                                    <td className="">
                                                        <span className="font-weight-bold">{item.founderName}</span>                  
                                                    </td>

                                                    <td className="">
                                                        <div className="active-project-0 d-flex align-items-center mt-0 ">
                                                            <div className="data-content">
                                                                <div>
                                                                <span className="font-weight-bold">{item.companyName}</span>                           
                                                                </div>
                                                                <p className="m-0 text-secondary small">
                                                                {item.companyEmail}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="">
                                                        <div className="active-project-0 d-flex align-items-center mt-0 ">
                                                            <div className="data-content">
                                                                <div>
                                                                <span className="font-weight-bold">{item.managerNumber}</span>                           
                                                                </div>
                                                                <p className="m-0 text-secondary small">
                                                                {item.managerEmail}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>{item.opt}</td>
                                                    <td>
                                                        INR {item.monthlyBill}
                                                    </td>
                                                    <td>
                                                       {item.renewalDate}
                                                    </td>   

                                                    <td className="">
                                                        <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                            <div className="h-avatar is-medium">
                                                            <i class="fa-solid fa-file"></i>
                                                            </div>
                                                            <div className="data-content">
                                                                <p className="m-0 text-primary">
                                                                {item.agreement}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>


                                                    <td>
                                                        <div className="d-flex justify-content-end align-items-center">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>} >
                                                                <Link className="" to="/customer-edit">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                    </svg>
                                                                </Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                                <Link className="" to="/customer-edit">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} >
                                                                <Link className="badge bg-danger" to="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
export default Customer;