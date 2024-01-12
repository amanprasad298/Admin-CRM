import  React from 'react'
import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link} from 'react-router-dom'
// img


import User1 from '../../../assets/images/user/1.jpg'

const leads=[
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Facebook',
        status:'Cold',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Instagram',
        status:'Walk in',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Linkedin',
        status:'Converted',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Facebook',
        status:'Dead',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Website',
        status:'Converted',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
    {
        leadname:'Christian Bale',
        companyname:'Christian Bale pvt. ltd.',
        product:'Vari tech',
        assignto:'Aman Kumar',
        source:'Facebook',
        status:'Walk in',
        img:`${User1}`,
        email:'christian.Bale@blueberrye.com',
        address:'XYZ Colony, ABC Road, Ohio, USA',
        phone:'+1 (021) 145-2256'

    },
]

const Leads = () =>{





 return (
        <> 
            <Container fluid>
            <Row>
                <Col lg="12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                       <div className="d-flex align-items-center justify-content-between">
                            <h4 className="font-weight-bold">Manage Leads</h4>
                        </div>  
                        <div className="create-workform">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="modal-product-search d-flex">
                                    <Form className="mr-3 position-relative">
                                        <Form.Group className="mb-0">
                                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Leads"/>
                                        <Link to="#" className="search-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </Link>
                                        </Form.Group>
                                    </Form>
                                    <Link to="/leads-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add New Leads
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
                                        <h5 className="font-weight-bold">Leads Information</h5>
                                        {/* <Button variant="btn btn-secondary btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Export
                                        </Button> */}
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table data-table mb-0">
                                            <thead className="table-color-heading">
                                                <tr className="">
                                                    
                                                    <th scope="col">
                                                        Lead Name
                                                    </th>
                                                    <th scope="col">
                                                        Company Name
                                                    </th>
                                                    <th scope="col">
                                                        Email
                                                    </th>
                                                    <th scope="col">
                                                        Phone
                                                    </th>
                                                    <th scope="col"> 
                                                        Product Interested
                                                    </th>
                                                    <th scope="col"> 
                                                        Address
                                                    </th>
                                                    <th scope="col"> 
                                                        Assign to
                                                    </th>
                                                    <th scope="col"> 
                                                        Source
                                                    </th>
                                                    <th scope="col"> 
                                                        Status
                                                    </th>
                                                    <th scope="col"> 
                                                        Action items
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    leads.map( (item) => (
                                                    <tr key={item.des} className="white-space-no-wrap">
                                                    
                                                    {/* <td className="">
                                                        <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                            <div className="h-avatar is-medium">
                                                                <img className="avatar rounded-circle" alt="user-icon" src={item.img}/>
                                                            </div>
                                                            <div className="data-content">
                                                                <div>
                                                                <span className="font-weight-bold">{item.name}</span>                           
                                                                </div>
                                                                <p className="m-0 text-secondary small">
                                                                {item.des}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td> */}
                                                    <td>{item.leadname}</td>
                                                    <td>{item.companyname}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.product}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.assignto}</td>
                                                    <td style={{ color: getSourceColor(item.source) }}>{item.source}</td>
                                                    <td style={{ color: getStatusColor(item.status), padding: '10px'}}>{item.status}</td>
                                                                                               
                                                    <td >
                                                        <div className="d-flex justify-content-end align-items-center">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>} >
                                                                <Link className="" to="/leads-edit">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                    </svg>
                                                                </Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Schedule</Tooltip>} >
                                                                <Link className="" to="/leads-schedule">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>

                                                                </Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                                <Link className="" to="/leads-edit">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Remarks</Tooltip>} >
                                                                <Link className="" to="/leads-remark">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Chat</Tooltip>} >
                                                                <Link className="" to="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to Customer</Tooltip>} >
                                                                <Link className="" to="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>

                                                            
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} >
                                                                <Link className="" to="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'cold':
        return '#ffbb33'; // You can replace with Bootstrap color classes
      case 'walk in':
        return '#e60000'; // You can replace with Bootstrap color classes
      case 'converted':
        return '#04237D'; // You can replace with Bootstrap color classes
      case 'dead':
        return '#8080ff'; // You can replace with Bootstrap color classes
      default:
        return 'black'; // Default color
    }
  };

  const getSourceColor = (source) => {
    switch (source.toLowerCase()) {
      case 'facebook':
        return '#ffbb33'; // You can replace with Bootstrap color classes
      case 'linkedin':
        return '#e60000'; // You can replace with Bootstrap color classes
      case 'instagram':
        return '#04237D'; // You can replace with Bootstrap color classes
      case 'website':
        return '#8080ff'; // You can replace with Bootstrap color classes
      default:
        return 'black'; // Default color
    }
  };


export default Leads;