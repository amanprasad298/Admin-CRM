import React,{useEffect,useState} from 'react'
import { Link,useLocation} from 'react-router-dom'
import {Accordion,Button} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'
import {connect} from "react-redux";
import {getDarkMode} from '../../../../store/mode'

//img
import logo from '../../../../../src/assets/images/logo.png'

function mapStateToProps(state) {
    return {
        darkMode: getDarkMode(state)
    };
}


const minisidbar =() =>{
    document.body.classList.toggle('sidebar-main')
}


const SidebarStyle = (props) => {
   
    //location
    let location = useLocation();

    const urlParams = new URLSearchParams(window.location.search);
    const sidebar = urlParams.get('sidebar');
    var variant='';
    if (sidebar !== null) {
        variant='';
        switch (sidebar) {
            case "0":
                variant ='sidebar-dark';
            break;
            case "1":
                variant ='sidebar-light';
            break;
            default:
                variant ='';
                break;
        }
    }
    
    // Collapse state
    const[activeMenu,setActiveMenu] = useState(false)
    const[activesubMenu,setSubmenu] = useState(false)
    useEffect(
    () =>{
        Scrollbar.init(document.querySelector('#my-scrollbar'))  
    }
)
    return(
        <>
            <div className={`iq-sidebar sidebar-default ${variant}`}>
            <div className="iq-sidebar-logo d-flex align-items-end justify-content-between ml-2">
                <Link to="/" className="header-logo">
                    <img src={logo} className={`img-fluid rounded-normal light-logo ${props.darkMode ? 'd-none' : ''}`} alt="logo"/>
                    <span>Suits Cafe</span>  
                </Link>
                <div className="side-menu-bt-sidebar-1">
                        <svg onClick={minisidbar} xmlns="http://www.w3.org/2000/svg" className="text-light wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
            </div>
            <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
                <nav className="iq-sidebar-menu">
                    <Accordion  as="ul"  id="iq-sidebar-toggle" className="side-menu" onSelect={(e) => setActiveMenu(e)}>
                        <li className={`${location.pathname === '/' ? 'active' :'' }  sidebar-layout`}>
                            <Link to="/" className="svg-icon">
                                <i className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </i>
                                <span className="ml-2">Dashboard</span>
                            </Link>
                        </li>
                        <li className="px-3 pt-3 pb-2 ">
                            <span className="text-uppercase small font-weight-bold">Application</span>
                        </li>
                        <li className={`${location.pathname === '/leads' ? 'active' :'' }  sidebar-layout`} >
                            <Link to="/leads" className="svg-icon">
                                <i className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                </i>
                                <span className="ml-2">Leads</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/manage-customer' ? 'active' :'' }  sidebar-layout`}>
                            <Link to="/manage-customer" className="svg-icon ">
                                <i className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                </i>
                                <span className="ml-2">Customer</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/assets' ? 'active' :'' }  sidebar-layout`} >
                            <Link to="/assets" className="svg-icon">
                                <i className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                </i>
                                <span className="ml-2">Assets</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/formss' ? 'active' :'' }  sidebar-layout`}>
                            <Link to="/formss" className="svg-icon">
                                <i className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                                </i>
                                <span className="ml-2">Forms</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/notification' ? 'active' :'' }  sidebar-layout`}>
                            <Link to="/notification" className="svg-icon">
                                <i className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                                </i><span className="ml-2">Notifications</span>
                            </Link>
                        </li>
                        
                        
                    </Accordion>
                </nav>
                <div className="pt-5 pb-5"></div>
            </div>
        </div>
        </>
    )
}

// export default SidebarStyle;
export default connect(mapStateToProps)(SidebarStyle)