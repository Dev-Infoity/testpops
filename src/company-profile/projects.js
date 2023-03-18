import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { CompanyProfileLogo } from './companyprofilelogo';
import { CompanyProfileSidebar } from './companyprofilesidebar';
import { CompanyProfileUsernameDetails } from './companyprofileusernmdtls';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const CompanyProfileProjects = () => {
    
 

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-4">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <CompanyProfileLogo />
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 36, paddingLeft: 10}}>
                        <CompanyProfileSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mt-2 mb-2">
                        <CompanyProfileUsernameDetails />
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm cmpy-prfl-prjctsdv1">
                                    <div className="row m-0">
                                        <div className="col-sm-4 pl-0">Projects</div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-6 text-right pr-0">
                                            <Link to='' className="cmpy-prfl-prjctsdv2 mr-3">
                                                <i className="fa fa-plus-circle cmpy-prfl-prjctsdv2icn"></i> Manage Projects
                                            </Link>
                                            <Link to='' className="cmpy-prfl-prjctsdv2">
                                                <i className="fa fa-users cmpy-prfl-prjctsdv2icn"></i> Assign
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3" id="profile">
                                    <div className="cmpy-prfl-prjctsdv4">
                                        <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                        <div className="cmpy-prfl-prjctsdv5">There are no projects set up.</div>
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



    </div>
}

// export default Details;

