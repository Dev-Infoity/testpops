import React, { useState, useRef, useEffect } from "react";
import './Content/Content/login.css';
import './App.css';
import './Content/Content/headermaincss.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link, useLocation } from 'react-router-dom';

export const Headermain = () => {
    
    const [showSidebar, setshowSidebar] = useState(false);
    const handleCloseSidebar = () => setshowSidebar(false);
    const handleShowSidebar = () => {
        setshowSidebar(true);
    }

    const location = useLocation();
    const [pageTitle, setPageTitle] = useState('Dashboard');

    useEffect(() => {
        const path = location.pathname;
        if (path === '/dashboard/home') {
          setPageTitle('Dashboard');
        } else if (path === '/company-profile/address-info' || path === '/company-profile/details' || path === '/company-profile/admins' || path === '/company-profile/permissions' || path === '/company-profile/projects' || path === '/company-profile/tax-info' || path === '/add-admin/basic-info' || path === '/add-admin/permissions' || path === '/add-admin/roles') {
          setPageTitle('Company Profile');
        } else if (path === '/hiring/overview') {
          setPageTitle('Hiring');
        }
      }, [location.pathname]);

    return <div>

                <div className="content-header custom-blue box-shadow-4 cstm-hdrrr" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "1px 60px 0", paddingBottom: "0" }}>
                        <div className="navbar-text nav-title hdrbckbtnnnwddcs" id="pageTitle">
                            <div className='mbvw-hdrrcs'>
                                <div className='mnubrhdrr' onClick={handleShowSidebar}>
                                    <i className="fa fa-bars"></i>
                                </div>
                                <div className='row m-0 cstmmthdrimgdv' alt="Back Button">
                                    <Link to="/dashboard/home" className="hdrmncstmedtt1">
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1641466337/Header%20Logo/main-logo_ulakd4.svg" className="hdrmncstmedtt1img" width="120" style={{marginTop: '-4px', height: '30px'}} />
                                    </Link>
                                    <div className="row m-0">
                                        <div>
                                            <div className='hdrmnrytbr'></div>
                                        </div>
                                        <div>
                                            <div className='hdrmnrytbrtxt'>{pageTitle}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row nvhdrhde mbvw-dspn" style={{width: "100%", textAlign: "center", justifyContent: "center"}}></div>


                        <ul className="nav flex-row order-lg-2 mt--7px cstmhdrmnulcs">
                            <li>
                                <button type='button' className='cstmhdrmnulcsbtnn'>Checkout</button>
                            </li>
                            <li className="dropdown d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drpbtnndw">
                                        <div className="avatar">
                                            <div className="text-truncate csk-pfrl-nm" title='Username'>Username</div>
                                        </div>
                                        <i className="fa fa-caret-down hdr-fa-icon Aezakmi8"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="drpdwnmnu">
                                        <Link to='/u/profile' className="dropdown-item btnclclclk">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1655208369/Dashboard/profile_icon.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Profile</div>
                                        </Link>
                                        <Link to='/' className="dropdown-item btnclclclk drpdwnlastitm">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1638941210/Header%20Logo/logoutstf607712_mgmuyg.svg" width="22" height="20" alt="Logout Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Log out of Infoity</div>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>





                <Modal show={showSidebar} onHide={handleCloseSidebar} animation={false} className="cstmmtmodal sidebrmodll1" >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>
                                <img src='https://res.cloudinary.com/infoi/image/upload/v1641466337/Header%20Logo/main-logo_ulakd4.svg' width="120" style={{marginTop: '-4px', height: '30px'}} />
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pr-0 pl-0">
                        <div>
                            <Link to='/dashboard/home'>
                                <div className="sidebrmodll2">Dashboard</div>
                            </Link>
                            <div className="sidebrmdlbrdr"></div>
                            <div className="sidebrmodll3">
                                <div className="sidebrmodll4">Admin Apps</div>
                                <Link to='/company-profile/details'><div className="sidebrmodll2">Company Profile</div></Link>
                                <Link to=''><div className="sidebrmodll2">Directory</div></Link>
                                <Link to=''><div className="sidebrmodll2">Documents</div></Link>
                                <Link to=''><div className="sidebrmodll2">Payroll</div></Link>
                                <Link to=''><div className="sidebrmodll2">Time Off</div></Link>
                                <Link to='/hiring/overview'><div className="sidebrmodll2">Hiring</div></Link>
                                <Link to=''><div className="sidebrmodll2">Benefits Administration</div></Link>
                                <Link to=''><div className="sidebrmodll2">Business Intelligence</div></Link>
                                <Link to=''><div className="sidebrmodll2">Commuter Benefits</div></Link>
                                <Link to=''><div className="sidebrmodll2">Flexible Spending Account</div></Link>
                                <Link to=''><div className="sidebrmodll2">Health Savings Account</div></Link>
                                <Link to=''><div className="sidebrmodll2">Deductions</div></Link>
                                <Link to=''><div className="sidebrmodll2">Performance Management</div></Link>
                                <Link to=''><div className="sidebrmodll2">Well-being</div></Link>
                                <Link to=''><div className="sidebrmodll2">Engagement</div></Link>
                                <Link to=''><div className="sidebrmodll2">ClubZen</div></Link>
                                <Link to=''><div className="sidebrmodll2">People Hub</div></Link>
                                <Link to=''><div className="sidebrmodll2">Compliance Assistant</div></Link>
                            </div>
                            <div className="sidebrmdlbrdr mt-3 mb-4"></div>
                            <div className="sidebrmodll3">
                                <div className="sidebrmodll4">Employee Apps</div>
                                <Link to=''><div className="sidebrmodll2">Personal information</div></Link>
                                <Link to=''><div className="sidebrmodll2">Pay Stubs</div></Link>
                                <Link to=''><div className="sidebrmodll2">Time Off</div></Link>
                                <Link to=''><div className="sidebrmodll2">Hiring</div></Link>
                                <Link to=''><div className="sidebrmodll2">Time & Attendance</div></Link>
                                <Link to=''><div className="sidebrmodll2">Scheduling</div></Link>
                                <Link to=''><div className="sidebrmodll2">Org Chart</div></Link>
                                <Link to=''><div className="sidebrmodll2">My Team</div></Link>
                                <Link to=''><div className="sidebrmodll2">Medical Insurance</div></Link>
                                <Link to=''><div className="sidebrmodll2">Dental Insurance</div></Link>
                                <Link to=''><div className="sidebrmodll2">Vision Insurance</div></Link>
                                <Link to=''><div className="sidebrmodll2">Commuter Benefits</div></Link>
                                <Link to=''><div className="sidebrmodll2">Flexible Spending Account</div></Link>
                                <Link to=''><div className="sidebrmodll2">Business Intelligence</div></Link>
                                <Link to=''><div className="sidebrmodll2">Refer Customers</div></Link>
                                <Link to=''><div className="sidebrmodll2">Performance Management</div></Link>
                                <Link to=''><div className="sidebrmodll2">Well-being</div></Link>
                                <Link to=''><div className="sidebrmodll2">Engagement</div></Link>
                                <Link to=''><div className="sidebrmodll2">People Hub</div></Link>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>



    </div>
     
}