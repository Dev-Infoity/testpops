import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/hiringcss.css';
import { DoubleHeaderMain } from '../doubleheadermain';
import { Footer } from '../footer';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const HiringOverview = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <div>
        <DoubleHeaderMain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
            <div className="padding hrng-cstmdpd mbvwpd" id="prflpg">
                <div className="row mt-6-cstm mt-4 mr-0 ml-0">
                    <div className="col-md-8 col-sm-12">
                        <div className="hrng-dv1 mr-4">
                            <div>
                                <div className="hrng-dv2">
                                    <div>
                                        <h2 className="hrng-dv3">Ready to expand the team?</h2>
                                        <p className="hrng-dv4">Grow your workforce by adding a hire and track their onboarding progress.</p>
                                        <div className="hrng-dv5">
                                            <button className="hrng-dv6">Add Team Member</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hrng-dv1 mr-4">
                            <div>
                                <div className="hrng-dw1">
                                    <div className="hrng-dw2">
                                        <p className="hrng-dw3">Offers To Be Finalized</p>
                                    </div>
                                    <div className="hrng-dw4">
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-6 hrng-dw5 p-0 row ml-0 mr-0">
                                                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 p-0">
                                                    <Link to=''>
                                                        <div className="hrng-dw6">
                                                            <div className="hrng-dw7">
                                                                <div className="hrng-dw8" title="Gloria Gonzales">GG</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-9 u-textLeft pr-0">
                                                    <div className="row m-0">
                                                        <div className="hrng-dw9">Gloria Gonzales</div>
                                                        <div onClick={() => { handleShow(); }}>
                                                            <i className="fa fa-info-circle hrng-dw10"></i>
                                                        </div>
                                                    </div>
                                                    <div className="hrng-dw11">
                                                        <Link to='' className="hrng-dw12">
                                                            Finish Hiring
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hrng-dv1 mr-4">
                            <div>
                                <div className="hrng-dw1">
                                    <div className="hrng-dw2">
                                        <p className="hrng-dw3">Offers Sent</p>
                                    </div>
                                    <div className="hrng-dw4">
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-6 hrng-dw5 p-0 row ml-0 mr-0">
                                                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 p-0">
                                                    <Link to=''>
                                                        <div className="hrng-dw6">
                                                            <div className="hrng-dw7">
                                                                <div className="hrng-dw8-2" style={{backgroundImage: 'url(https://res.cloudinary.com/infoi/image/upload/v1677570138/Dashboard-Icons/erin_vqihrm.png)'}}></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-9 u-textLeft pr-0">
                                                    <div className="row m-0">
                                                        <div className="hrng-dw9">Erin Maxwell</div>
                                                        <div>
                                                            <i className="fa fa-info-circle hrng-dw10"></i>
                                                        </div>
                                                    </div>
                                                    <div className="hrng-dw11">
                                                        <Link to='' className="hrng-dw12">
                                                            Edit Offer
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hrng-dv1 mr-4">
                            <div>
                                <div className="hrng-dw1">
                                    <div className="hrng-dw2">
                                        <p className="hrng-dw3">New Hire Onboarding and I-9 Verification</p>
                                    </div>
                                    <div className="hrng-dw4">
                                        <div className="row m-0">
                                            <div className="col-lg-4 col-md-6 hrng-dw5 p-0 row ml-0 mr-0">
                                                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 p-0">
                                                    <Link to=''>
                                                        <div className="hrng-dw6">
                                                            <div className="hrng-dw7">
                                                                <div className="hrng-dw8-2" style={{backgroundImage: 'url(https://res.cloudinary.com/infoi/image/upload/v1677570096/Dashboard-Icons/michael_jhkovk.png)'}}></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-9 u-textLeft pr-0">
                                                    <div className="row m-0">
                                                        <div className="hrng-dw9">Michael Garcia</div>
                                                        <div>
                                                            <i className="fa fa-info-circle hrng-dw10"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="hrng-dw11-1">
                                                            Onboarding in progress
                                                        </div>
                                                        <Link to='' className="hrng-dw12">
                                                            Edit Offer
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 hrng-dw5 p-0 row ml-0 mr-0">
                                                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 p-0">
                                                    <Link to=''>
                                                        <div className="hrng-dw6">
                                                            <div className="hrng-dw7">
                                                                <div className="hrng-dw8-2" style={{backgroundImage: 'url(https://res.cloudinary.com/infoi/image/upload/v1677569998/Dashboard-Icons/alison_m2zl3o.png)'}}></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-sm-10 col-xs-9 u-textLeft pr-0">
                                                    <div className="row m-0">
                                                        <div className="hrng-dw9">Alison Everert</div>
                                                        <div>
                                                            <i className="fa fa-info-circle hrng-dw10"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="hrng-dw11-1">
                                                            Onboarding in progress
                                                        </div>
                                                        <Link to='' className="hrng-dw12">
                                                            Edit Offer
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hrng-dv1 mr-4">
                            <div>
                                <div className="hrng-dw1">
                                    <div className="hrng-dw2">
                                        <p className="hrng-dw3">Background Checks</p>
                                    </div>
                                    <div className="hrng-dw4 text-center">
                                        <Link to='' className="hrng-dw13">
                                            Set Up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 row pl-1">
                        <div className="w-100">
                            <div className="hrng-dv1 mr-4">
                                <div>
                                    <div className="hrng-dw1">
                                        <div className="hrng-dw2">
                                            <p className="hrng-dw3">Frequently Asked Questions</p>
                                        </div>
                                        <div className="hrng-dw4">
                                            <div>
                                                <Link to='' className="hrng-dw13">
                                                    What types of background checks do you offer and how much do they cost?
                                                </Link>
                                            </div>
                                            <div className="mt-2">
                                                <Link to='' className="hrng-dw13">
                                                    How long does a background check take to process?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

        </div>      


        <br/><br/><br/><br/>
        <Footer />




        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
        <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 srvycstmhtmdlbd">
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="hrngmdlrds50 infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2 text-truncate" title='Gloria Gonzales'>Gloria Gonzales <span title='Role - Fitness Training Lead' style={{fontSize: '14px'}}>(Fitness Training Lead)</span></p>
                            <div className="infomdvmdl3 row m-0 col-sm-12 p-0">
                                <div className="col-sm-6 pl-0 text-truncate" title='Department'>
                                    <i className="fa fa-user mr-7px"></i>
                                    Fitness Training
                                </div>
                                <div className="infomdvmdl2dvdr m-0 col-sm-1 p-0">|</div>
                                <div className="col-sm-4 p-0 text-truncate" title='Start Date'>
                                    Nov 15, 2022
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <div className="infomdvmdl3 col-sm-9 mt-4" style={{marginLeft: '19%'}}>
                            <h3 className="infomdvmdl3-h3 hrngfntmd">Administrator Tasks</h3>
                            <div className="ml-1">
                                <div className="mdldtdvvdv1 mdlgrnclrdv">
                                    <i className="fa fa-check mr-2"></i> Contact Info
                                </div>
                                <div className="mdldtdvvdv1 mdlgrnclrdv">
                                    <i className="fa fa-check mr-2"></i> Job Details
                                </div>
                                <div className="mdldtdvvdv1 mdlgryclrdv">
                                    <i className="fa fa-minus mr-2"></i> Offer Details
                                </div>
                                <div className="mdldtdvvdv1 mdlgryclrdv">
                                    <i className="fa fa-minus mr-2"></i> Payroll Settings
                                </div>
                                <div className="mdldtdvvdv1 mdlgryclrdv">
                                    <i className="fa fa-minus mr-2"></i> Apps
                                </div>
                                <div className="mdldtdvvdv1 mdlgryclrdv" >
                                    <i className="fa fa-minus mr-2"></i> Previews
                                </div>
                            </div>
                        </div>
                    </div>
                          
                </div>

            </Modal.Body>
        </Modal>

    </div>
}

// export default Details;

