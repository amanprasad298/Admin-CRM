import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Dropdown,Button,Form} from 'react-bootstrap'
import  Card from '../../../../components/Card'
import {getDarkMode} from '../../../../store/mode'
import {connect} from "react-redux";


//img

import  user1  from  '../../../../assets/images/user/1.jpg'
import  user2  from '../../../../assets/images/user/2.jpg'


//chnage-mode
import ChangeMode from  '../../../Change-Mode'
function mapStateToProps(state) {
    return {
        darkMode: getDarkMode(state)
    };
}


const  HeaderStyle1 =(props) =>{
   const minisidbar =() =>{
    document.body.classList.toggle('sidebar-main')
}
    return(
         <>

<div className="iq-top-navbar">
    <div className="iq-navbar-custom">
        <Navbar  expand="lg" className="navbar-light p-0">
            <div className="side-menu-bt-sidebar"  onClick={minisidbar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="d-flex align-items-center">
                <ChangeMode/> 
                <Navbar.Toggle  aria-controls="navbarSupportedContent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse  id="navbarSupportedContent">
                    <Nav as="ul" className="ml-auto navbar-list align-items-center">
                        <Dropdown as="li" className="nav-item nav-icon"> 
                            <Dropdown.Toggle as={Button} href="#" variant=" search-toggle" id="notification-dropdown" aria-haspopup="true" aria-expanded="false" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="bg-primary"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="iq-sub-dropdown" aria-labelledby="notification-dropdown">
                            {/* <Dropdown.Menu className="iq-sub-dropdown" aria-labelledby="notification-dropdown">
                                <Form action="#" className="searchbox p-2">
                                    <Form.Group  className=" mb-0 position-relative">
                                        <FormCheck.Input type="text" bsPrefix="text search-input font-size-12" placeholder="type here to search..." />
                                            <Link to={"/"}  className="search-link"><i className="las la-search"></i></Link> 
                                            </Form.Group>
                                            </Form> */}
                            
                                <Card className="shadow-none m-0 border-0">
                                    <div className="p-3 card-header-border">
                                        <h6 className="text-center">
                                            Notifications
                                        </h6>
                                    </div>
                                    <Card.Body className="overflow-auto card-header-border p-0 card-body-list" maxHeight= "500px">                                        
                                        <ul className="dropdown-menu-1 overflow-auto list-style-1 mb-0">
                                            <li className="dropdown-item-1 float-none p-3">
                                                <div className="list-item d-flex justify-content-start align-items-start">
                                                    <div className="avatar">
                                                        <div className="avatar-img avatar-danger avatar-20">
                                                            <span>
                                                                <svg className="icon line" width="30" height="30" id="cart-alt1" stroke="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,3H5.32a1,1,0,0,1,.93.63L10,13,8.72,15.55A1,1,0,0,0,9.62,17H19" fill= "none" strokeLinecap= "round" strokeLinejoin= "round" strokeWidth= "2"></path><polyline points="10 13 18.2 13 21 6" fill= "none" strokeLinecap= "round" strokeLinejoin="round" strokeWidth="2"></polyline><line x1="20.8" y1="6" x2="7.2" y2="6" fill= "none" strokeLinecap= "round" strokeLinejoin= "round" strokeWidth= "2"></line><circle cx="10.5" cy="20.5" r="0.5" fill= "none" strokemterlimit= "10" strokeWidth= "2"></circle><circle cx="16.5" cy="20.5" r="0.5" fill= "none" strokemterlimit= "10" strokeWidth= "2"></circle></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="list-style-detail ml-2 mr-2">
                                                        <h6 className="font-weight-bold">Your order is placed</h6>
                                                        <p className="m-0">
                                                            <small className="text-secondary">If several languages coalesce</small>
                                                        </p>
                                                        <p className="m-0">
                                                            <small className="text-secondary">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mr-1" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            3 hours ago</small>
                                                        </p>
                                                    </div>
                                                </div>                                                
                                            </li>
                                             <li className="dropdown-item-1 float-none p-3">
                                                 <div className="list-item d-flex justify-content-start align-items-start">
                                                     <div className="avatar">
                                                        <div className="avatar-img avatar-success avatar-20">
                                                            <span><img className="avatar is-squared rounded-circle" src={user2} alt="2.jpg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="list-style-detail ml-2 mr-2">
                                                        <h6 className="font-weight-bold">New message form cate</h6>
                                                        <p className="m-0">
                                                            <small className="text-secondary">You have 3 unreded messages</small>
                                                        </p>
                                                        <p className="m-0">
                                                            <small className="text-secondary">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mr-1" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                5 hours ago</small>
                                                        </p>
                                                    </div>
                                                 </div>                                                
                                            </li>
                                             <li className="dropdown-item-1 float-none p-3">
                                                 <div className="list-item d-flex justify-content-start align-items-start">
                                                     <div className="avatar">
                                                        <div className="avatar-img avatar-warning avatar-20">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="30" height="30" stroke="white" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                                            <g>
                                                                <g>
                                                                    <path d="M386.689,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538    c35.593,0,64.538-28.951,64.538-64.538S422.276,304.403,386.689,304.403z M386.689,401.21c-17.796,0-32.269-14.473-32.269-32.269    c0-17.796,14.473-32.269,32.269-32.269c17.796,0,32.269,14.473,32.269,32.269C418.958,386.738,404.485,401.21,386.689,401.21z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M166.185,304.403c-35.587,0-64.538,28.951-64.538,64.538s28.951,64.538,64.538,64.538s64.538-28.951,64.538-64.538    S201.772,304.403,166.185,304.403z M166.185,401.21c-17.796,0-32.269-14.473-32.269-32.269c0-17.796,14.473-32.269,32.269-32.269    c17.791,0,32.269,14.473,32.269,32.269C198.454,386.738,183.981,401.21,166.185,401.21z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M430.15,119.675c-2.743-5.448-8.32-8.885-14.419-8.885h-84.975v32.269h75.025l43.934,87.384l28.838-14.5L430.15,119.675z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="216.202" y="353.345" width="122.084" height="32.269"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M117.781,353.345H61.849c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h55.933    c8.912,0,16.134-7.223,16.134-16.134C133.916,360.567,126.693,353.345,117.781,353.345z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M508.612,254.709l-31.736-40.874c-3.049-3.937-7.755-6.239-12.741-6.239H346.891V94.655    c0-8.912-7.223-16.134-16.134-16.134H61.849c-8.912,0-16.134,7.223-16.134,16.134s7.223,16.134,16.134,16.134h252.773v112.941    c0,8.912,7.223,16.134,16.134,16.134h125.478l23.497,30.268v83.211h-44.639c-8.912,0-16.134,7.223-16.134,16.134    c0,8.912,7.223,16.134,16.134,16.134h60.773c8.912,0,16.134-7.223,16.135-16.134V264.605    C512,261.023,510.806,257.538,508.612,254.709z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M116.706,271.597H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h74.218    c8.912,0,16.134-7.223,16.134-16.134C132.84,278.82,125.617,271.597,116.706,271.597z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M153.815,208.134H16.134C7.223,208.134,0,215.357,0,224.269s7.223,16.134,16.134,16.134h137.681    c8.912,0,16.134-7.223,16.134-16.134S162.727,208.134,153.815,208.134z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M180.168,144.672H42.487c-8.912,0-16.134,7.223-16.134,16.134c0,8.912,7.223,16.134,16.134,16.134h137.681    c8.912,0,16.134-7.223,16.134-16.134C196.303,151.895,189.08,144.672,180.168,144.672z"/>
                                                                </g>
                                                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> </svg>
                                                        </span>
                                                        </div>
                                                    </div>
                                                    <div className="list-style-detail ml-2 mr-2">
                                                        <h6 className="font-weight-bold">Your item is shipped</h6>
                                                        <p className="m-0">
                                                            <small className="text-secondary">You got new order of goods</small>
                                                        </p>
                                                        <p className="m-0">
                                                            <small className="text-secondary">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mr-1" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                5 hours ago</small>
                                                        </p>
                                                    </div>
                                                 </div>                                                
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    <div className="card-footer text-muted p-3">
                                        <Link to='/notification'><p className="mb-0 text-primary text-center font-weight-bold">Show all notifications</p></Link>
                                    </div>
                                </Card>
                            </Dropdown.Menu>
                        </Dropdown>                        
                        
                        <Dropdown as="li" bsPrefix="nav-item nav-icon search-content">
                            <Dropdown.Toggle as={Button} href="#" variant=" search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg className="svg-icon text-secondary" id="h-suns" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="iq-search-bar iq-sub-dropdown " aria-labelledby="dropdownSearch">
                                <Form action="#" className="searchbox p-2">
                                    <Form.Group className="mb-0 position-relative">
                                    <Form.Control  type="text" className="text search-input font-size-12" placeholder="type here to search..."/>
                                    <Link to="#" className="search-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </Link> 
                                    </Form.Group>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item nav-icon">
                            <Dropdown.Toggle  as={Button} href="#" variant="nav-item nav-icon pr-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <img src={user1} className="img-fluid avatar-rounded" alt="user"/>
                                <span className="mb-0 ml-2 user-name">John Doe</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul"  className="dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <Dropdown.Item as="li" className="d-flex svg-icon">
                                    <svg className="svg-icon mr-0 text-secondary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <Link to="/user-profile">My Profile</Link>
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex svg-icon">
                                    <svg className="svg-icon mr-0 text-secondary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <Link to="/user-profile-edit">Edit Profile</Link>
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex svg-icon border-top">
                                    <svg className="svg-icon mr-0 text-secondary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <Link to="/auth/sign-in">Logout</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>                     
                </Navbar.Collapse> 
            </div>
        </Navbar>
    </div>
</div>


        </>
    )
}

// export default HeaderStyle1
export default connect(mapStateToProps)(HeaderStyle1)