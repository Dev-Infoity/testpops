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
import Collapse from 'react-bootstrap/Collapse';

export const CompanyProfileAdmins = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);

    
    const mdlsvbtnn = () => {
        
        var slctdrpdwnvl = $('#mdlempdrpdwnvll').text();
        var slctdrpdwnvlerrmsg = $('#mdlinpflderrdrpdwn');

        if(slctdrpdwnvl == "" || slctdrpdwnvl == null) {
            
            if(slctdrpdwnvl === "" || slctdrpdwnvl === null) {
                slctdrpdwnvlerrmsg.show();
            }
            else {
                slctdrpdwnvlerrmsg.hide();
            }
        }
       
        else {
            slctdrpdwnvlerrmsg.hide();
            handleClose();
        }
    }

    const mdlsvbtnn2 = () => {

        var fname = $('#mdlinpfldmbllfrstnm1').val();
        var lname = $('#mdlinpfldmbllstnm1').val();
        var email = $('#mdlinpfldmbleml1').val();

        var fnamee = $('#mdlinpfldmbllfrstnm1');
        var lnamee = $('#mdlinpfldmbllstnm1');
        var emaill = $('#mdlinpfldmbleml1');

        var mdlerr1 = $('#mdlinpflderr1');
        var mdlerr2 = $('#mdlinpflderr2');
        var mdlerr3 = $('#mdlinpflderr3');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        
        if(!fname || !lname || !email) {
            
            if(!fname) {
                mdlerr1.show().text('This field cannot be empty');
                fnamee.addClass('errfldbrdr');
            } else if ($.trim(fname) === '') {
                mdlerr1.show().text('First name should not be blank');
                fnamee.addClass('errfldbrdr');
            } else {
                mdlerr1.hide();
                fnamee.removeClass('errfldbrdr');
            }

            if(!lname) {
                mdlerr2.show().text('This field cannot be empty');
                lnamee.addClass('errfldbrdr');
            } else if ($.trim(lname) === '') {
                mdlerr2.show().text('Last name should not be blank');
                lnamee.addClass('errfldbrdr');
            } else {
                mdlerr2.hide();
                lnamee.removeClass('errfldbrdr');
            }


            if (!email) {
                mdlerr3.show().text('This field cannot be empty');
                emaill.addClass('errfldbrdr');
            } else if ($.trim(email) === '') {
                mdlerr3.show().text('Please enter a valid email address');
                emaill.addClass('errfldbrdr');
            } else if (!emailRegex.test(email)) {
                mdlerr3.show().text('Please enter a valid email address');
                emaill.addClass('errfldbrdr');
            } else {
                mdlerr3.hide();
                emaill.removeClass('errfldbrdr');
            }

        } else if ($.trim(fname) === '') {
            mdlerr1.show().text('First name should not be blank');
            fnamee.addClass('errfldbrdr');
        } else if ($.trim(lname) === '') {
            mdlerr2.show().text('Last name should not be blank');
            lnamee.addClass('errfldbrdr');
        } else if ($.trim(email) === '') {
            mdlerr3.show().text('Email should not be blank');
            emaill.addClass('errfldbrdr');
        } else if (!emailRegex.test(email)) {
            mdlerr3.show().text('Please enter a valid email address');
            emaill.addClass('errfldbrdr');
        }
        else {
        
            mdlerr1.hide();
            mdlerr2.hide();
            mdlerr3.hide();

            fnamee.removeClass('errfldbrdr');
            lnamee.removeClass('errfldbrdr');
            emaill.removeClass('errfldbrdr');


            handleClose();
        }
    }


    const shwmdldv1 = () => {
        $('#radioone').prop('checked', true);
        $('#mdldv1').removeClass('hide');
        $('#mdldv2').addClass('hide');
        $('#mdlbtn1').removeClass('hide');
        $('#mdlbtn2').addClass('hide');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('#mdldv2').removeClass('hide');
        $('#mdldv1').addClass('hide');
        $('#mdlbtn1').addClass('hide');
        $('#mdlbtn2').removeClass('hide');
    }
    
    const EmployeeList = [
        { value: 'Martha', label: 'Martha' },
        { value: 'Alex', label: 'Alex' },
        { value: 'Yu', label: 'Yu' },
        { value: 'King', label: 'King' },
        { value: 'Emily', label: 'Emily' },
        { value: 'Jesse', label: 'Jesse' },
        { value: 'Roy Hill', label: 'Roy Hill' }
    ];

    const [empDrpDwnValue, setEmpDrpDwnValue] = useState(null);

    const handleChange1 = e => {
        setEmpDrpDwnValue(e.value);
    }

    const shwprmsadmn = () => {
        $('#admndtldta1').removeClass('hide');
        $('#admndtldta2').addClass('hide');
        $('#admndtldta3').addClass('hide');
    }

    const hdeprmsadmn = () => {
        $('#admndtldta1').addClass('hide');
        $('#admndtldta2').removeClass('hide');
        $('#admndtldta3').removeClass('hide');
    }

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
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm pr-3">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>PRIMARY ADMINISTRATOR</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 p-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <span className="cmpy-prfl-a8 mt-2" onClick={()=>{handleShow();}}>
                                                        Change
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-0 mb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3 pt-1">
                                                <div className="cmpy-prfl-ovrflwx">
                                                    df d 
                                                    <br/>
                                                    <div className="cmpy-prfl-font-light mt-2 mb-5">
                                                        zuehxhrk08esfuf@demo.zenefits.com
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">
                                                    <div className="row m-0">
                                                        <div className="cmpy-prfl-admin-a1">
                                                            Company
                                                        </div>
                                                    </div>
                                                    <div className="cmpy-prfl-admin-a2">
                                                        <i className="fa fa-users cmpy-prfl-admin-a3"></i> df’s permissions apply to everyone in the company
                                                    </div>
                                                    <div className="cmpy-prfl-admin-a4">
                                                        <div className="row m-0" id="admndtldta1" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                                                            <div className="cmpy-prfl-admin-a5">
                                                                {open ? '' : 'Show Permissions'} <i className={`fa fa-chevron-${open ? '' : 'down'} cmpy-prfl-admin-a6`}></i>
                                                            </div>
                                                        </div>
                                                        <Collapse in={open}>
                                                            <div id="example-collapse-text">
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> View your company profile
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Edit your company profile
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Add and remove admins
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> View basic staff info
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> View sensitive worker info (e.g., SSN, pay)
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Hire and terminate individuals, and edit info
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Can complete I-9 Form
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Run payroll
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Hire and terminate contractors*
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Manage contractor payments*
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Add apps to your account
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Manage integrated apps
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Create custom integrations
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Create time-off policies
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Approve PTO requests
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Create leave of absence policies
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Add, edit, and approve leave of absence requests
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> View, upload, and delete sensitive leave related documents (e.g. PHI)
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Edit & approve Time & Attendance Hours
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Submit worked hours to payroll
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Create/edit schedules in Scheduling
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> View company health plan info
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Edit employee and company benefits data and manage benefits renewals
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Complete tasks and receive notifications related to employee benefits
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Verify employee's qualifying life events
                                                                </div>
                                                                <div className="cmpy-prfl-admin-a7">
                                                                    <i className="fa fa-check cmpy-prfl-admin-a8"></i> Edit employee's ACA, Cobra, deductions and Flex Ben info
                                                                </div>
                                                                <div className="row m-0" id="admndtldta3" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                                                                    <div className="cmpy-prfl-admin-a5 mt-2 mb-2">Hide Permissions <i className="fa fa-chevron-up cmpy-prfl-admin-a6"></i></div>
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm pr-3">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>ADDITIONAL ADMINISTRATORS</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <Link to='/add-admin/basic-info'>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle"></i> Add Administrators
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 mb-3">
                                        <div className="tekila4">You don’t have any additional administrators. You can <Link to='/add-admin/basic-info'>add admins</Link> and give them permissions to help you manage your Infoity account.</div>
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


        <Modal show={show} onHide={handleClose} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>CHANGE GGFGF'S PRIMARY ADMINISTRATOR</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <div className="cmpy-prfl-mdl-admn-mdl1">
                            If you want someone else to manage your company’s Zenefits account, you can transfer your primary admin permissions to them. You’ll remain an admin with the same permissions you currently have, but you’ll no longer be the point of contact for your company’s account.
                        </div>
                    </div>
                    <div id="mdldv1">
                        <div className="cmpy-prfl-mdl2-dv3">
                            Select your new primary admin:
                        </div>
                        <div className="col-sm-6 pl-0">
                            <Select options={EmployeeList} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                            <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                            {empDrpDwnValue && <div style={{ display: 'none' }}>
                                <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                            </div>}
                        </div>
                    </div>
                    <div className="cmpy-prfl-mdl-admn-mdl2">
                        <div className="cmpy-prfl-mdl-admn-mdl1 mt-3">
                            To transfer your permissions, type "CONFIRM":
                        </div>
                        <div className="col-sm-6 pl-0">
                            <input type="text" className="tekila6" placeholder='Type "CONFIRM"' autocomplete="off" maxlength="10" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn cmpy-prfl-mdl-admn-mdl3-ds mr-0" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Transfer Permissions
                </Button>
                <Button variant="primary modalRedBtn cmpy-prfl-mdl-admn-mdl3-ds hide" id="mdlbtn2" onClick={mdlsvbtnn2}>
                    Transfer Permissions
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

