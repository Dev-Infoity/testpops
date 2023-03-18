import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { AddAdminSidebar } from './addadminsidebar';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const AddAdminPermissions = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const savechkkbxdv = () => {
        var chkbx1 = $('#cmpyprflchkbx1');
        var chkbx2 = $('#cmpyprflchkbx2');
        var chkbx3 = $('#cmpyprflchkbx3');
        var chkbx4 = $('#cmpyprflchkbx4');
        var chkbx5 = $('#cmpyprflchkbx5');
        var chkbx6 = $('#cmpyprflchkbx6');
        var chkbx7 = $('#cmpyprflchkbx7');
    
        var inperr = $('#chkbxerrr');
    
        if (!chkbx1.is(':checked') && !chkbx2.is(':checked') && !chkbx3.is(':checked') && !chkbx4.is(':checked') && !chkbx5.is(':checked') && !chkbx6.is(':checked') && !chkbx7.is(':checked')) {
            inperr.css('display', 'initial');
        } else {
            inperr.css('display', 'none');
        }
    }
    
    


    const EmployeeList = [
        { value: 0, label: 'Corporation' },
        { value: 1, label: 'LLC' },
        { value: 2, label: 'Partnership' },
        { value: 3, label: 'S-Corporaton' },
        { value: 4, label: 'Sole Proprietorship' },
        { value: 5, label: 'LLP' },
        { value: 6, label: 'Non-Profit Corporation' },
        { value: 7, label: 'Single-Member LLC' }
    ];



    const [empDrpDwnValue, setEmpDrpDwnValue] = useState(null);

    const handleChange1 = e => {
        setEmpDrpDwnValue(e.value);
    }

    const gobckbtnchkbx = () => {
        window.location.href = '/add-admin/roles';
    }


    const shwmdldv1 = () => {
        $('#radioone').prop('checked', true);
        $('#mdldv1').removeClass('hide');
        $('#mdldv2').addClass('hide');
        $('#btndt1').removeClass('hide');
        $('#btndt2').addClass('hide');
    }

    const shwmdldv2 = () => {
        $('#radiotwo').prop('checked', true);
        $('#mdldv2').removeClass('hide');
        $('#mdldv1').addClass('hide');
        $('#btndt1').addClass('hide');
        $('#btndt2').removeClass('hide');
    }

    var mobnum = $('#mdlinpfldmblnum1');
    $(mobnum).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    const mdlsvbtnn1 = () => {
        
        var inpp = $('#mdlinpfld11');
        var inp = $('#mdlinpfld11').val();
        var inperr = $('#mdlinpflderr11');
        
        if(!inp) {
            
            if(!inp) {
                inperr.show().text('Please enter a Labor Group name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

            handleClose();
        }
        
    }

    function isNumberKey(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
    }

    const mdlcsbtnn1 = () => {
        window.location.href = '/company-profile/admins';
    }


    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-2">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                        <div className="tblt-vw-prfl1-dv cmpy-prfl-a2 cmpy-prfl-a2cs">
                            <div className="cmpy-prfl-a3 cmpy-prfl-a3cs">
                                <img src="https://res.cloudinary.com/infoi/image/upload/v1677558398/Header%20Logo/Infoity-Favicon_eqjenk.png" className="cmpy-prfl-img1" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 0, paddingLeft: 4}}>
                        <AddAdminSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cmpy-prfl-a1cs cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mb-2">
                        <div style={{paddingTop: 7, paddingBottom: 28, display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                            <div className="col-sm-10 p-0">
                                <h2 style={{fontSize: 23, lineHeight: '1.25', color: '#333e63', fontWeight: 600, margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                    Confirm Alex’s permissions.
                                </h2>
                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="text-right cmpy-prfl-adrs-a3 pr-3">
                                    <button className="cmpy-prfl-adrs-a4 w-100" onClick={()=>{handleShow();}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>Admin Permissions</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3">
                                            <div className="col-sm-12 pb-4 cmpy-prfl-admn-prms-a1">
                                                As a Company Admin, Alex can:
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx1" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx1" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        View your company profile
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx2" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx2" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Edit your company profile
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx3" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx3" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Add and remove admins
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row col-sm-12 ml-1 mr-3">
                                                <div className="cmpy-prfl-adadmn-rls4 w-100"></div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx4" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx4" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        View basic staff info
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx5" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx5" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        View sensitive worker info (e.g., SSN, pay)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx6" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx6" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Hire and terminate individuals, and edit info
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx7" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx7" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Can complete I-9 Form
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx8" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx8" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Run payroll
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx9" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx9" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Hire and terminate contractors*
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx10" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx10" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Manage contractor payments*
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx11" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx11" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Add apps to your account
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx12" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx12" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Manage integrated apps
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx13" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx13" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Create custom integrations
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx14" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx14" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Create time-off policies
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx15" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx15" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Approve PTO requests
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx16" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx16" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Create leave of absence policies
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx17" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx17" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Add, edit, and approve leave of absence requests
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx18" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx18" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        View, upload, and delete sensitive leave related documents (e.g. PHI)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx19" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx19" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Edit and approve Time & Attendance Hours 
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx20" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx20" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Submit worked hours to payroll
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx21" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx21" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Create/edit schedules in Scheduling
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx22" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx22" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        View company health plan info
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx23" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx23" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Edit employee and company benefits data and manage benefits renewals
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx24" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx24" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Complete tasks and receive notifications related to employee benefits 
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx25" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx25" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Serve as the point of contact for employees' benefits questions 
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div>
                                                    <input type="checkbox" id="cmpyprflchkbx26" className="cmpy-prfl-adadmn-rls1" />
                                                    <label for="cmpyprflchkbx26" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Verify employees' qualifying life events 
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12">
                                                <div className="dvdsbled">
                                                    <input type="checkbox" id="cmpyprflchkbx27" className="cmpy-prfl-adadmn-rls1" checked />
                                                    <label for="cmpyprflchkbx27" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm">
                                                        Edit employees' ACA, Cobra, deductions, and Flex Ben info
                                                    </label>
                                                </div>
                                            </div>

                                            
                                            <div className="row m-0 col-sm-12">
                                                <div className="cmpy-prfl-admn-a1">
                                                    *These permissions only apply to people in the Contractors App.
                                                </div>
                                            </div>

                                            
                                            <div className="row m-0 col-sm-12">
                                                <div className="col-sm-12 p-0 cmpy-prfl-admn-a2">
                                                   Alex’s permissions apply to:
                                                </div>
                                                <div className="col-sm-12 p-0 cmpy-prfl-admn-a3">
                                                    All Workers
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group  ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3 cmpy-prfl-mdl-admn-mdl4">
                                            <div className="text-right mr-2">                                            
                                                <span id="chkbxerrr" className="cmpy-prfl-erdv mr-3">Select at least one role.</span>
                                                <button type="button" className="primary modalGrayBtn mr-3" onClick={gobckbtnchkbx}>Go Back</button>
                                                <button type="button" className="primary modalRedBtn" onClick={savechkkbxdv}>Add Admin</button>
                                            </div>
                                        </div>
                                    </form>
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
                <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            Do you want to leave without saving your changes?
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Go Back
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlcsbtnn1}>
                    Yes, cancel
                </Button>
            </Modal.Footer>
        </Modal>
        


    </div>
}

// export default Details;

