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

export const CompanyProfileDetails = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22 = () => setShow22(true);

    const editfld1 = () => {
        $('#fielddv1').addClass('hide');
        $('#fielddv1-1').removeClass('hide');
    }

    const savefld1 = () => {
        var inpp1 = $('#inpfld1');
        var inp1 = $('#inpfld1').val();
        var inperr1 = $('#inpflderr1');
        
        if(!inp1) {
            
            if(!inp1) {
                inperr1.show().text('This field cannot be empty');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            $('#fielddv1-1').addClass('hide');
            $('#fielddv1').removeClass('hide');
        }
    }

    const cancelfld1 = () => {
        var inpp1 = $('#inpfld1');
        var inp1 = $('#inpfld1').val();
        var inperr1 = $('#inpflderr1');

        inpp1.removeClass('errfldbrdr');
        inperr1.hide();

        $('#fielddv1-1').addClass('hide');
        $('#fielddv1').removeClass('hide');
    }
    

    const editfld2 = () => {
        $('#fielddv2').addClass('hide');
        $('#fielddv2-1').removeClass('hide');
    }

    const savefld2 = () => {
        var inpp2 = $('#inpfld2');
        var inp2 = $('#inpfld2').val();
        var inperr2 = $('#inpflderr2');
        
        if(!inp2) {
            
            if(!inp2) {
                inperr2.show().text('This field cannot be empty');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        }
        else {
            inpp2.removeClass('errfldbrdr');
            $('#fielddv2-1').addClass('hide');
            $('#fielddv2').removeClass('hide');
        }
    }

    const cancelfld2 = () => {
        var inpp2 = $('#inpfld2');
        var inp2 = $('#inpfld2').val();
        var inperr2 = $('#inpflderr2');

        inpp2.removeClass('errfldbrdr');
        inperr2.hide();

        $('#fielddv2-1').addClass('hide');
        $('#fielddv2').removeClass('hide');
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

    var mobnum = $('#mdlinpfldmblnum1');
    $(mobnum).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    function isNumberKey(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
    }

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


    const mdlsvbtnn3 = () => {
        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        
        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');

        if(!inp1 || !inp2 || !inp3) {
            
            if(!inp1) {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

        }
    }

    const mdlsvbtnn32 = () => {

        var inpp1 = $('#mdlinpfld421');
        var inpp2 = $('#mdlinpfld422');
        var inpp3 = $('#mdlinpfld423');
        
        var inp1 = $('#mdlinpfld421').val();
        var inp2 = $('#mdlinpfld422').val();
        var inp3 = $('#mdlinpfld423').val();
        
        var inperr1 = $('#mdlinpflderr421');
        var inperr2 = $('#mdlinpflderr422');
        var inperr3 = $('#mdlinpflderr423');

        if(!inp1 || !inp2 || !inp3) {
            
            if(!inp1) {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else if ($.trim(inp1) === '') {
                inperr1.show().text('This field should not be blank');
                inpp1.addClass('errfldbrdr');
            } else {
                inperr1.hide();
                inpp1.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

        }

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
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>General Information</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={()=>{handleShow2();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle"></i> Add Info
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-0 cmpy-prfl-cspdd2 hide">
                                                    <div onClick={()=>{handleShow22();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen"></i> Edit Info
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body hide" id="dtlsgnrlinfo-viwfld">
                                    <form>
                                        <div className="form-group row cmpy-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Doing Business As (DBA)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Infoity</label>
                                                </div>
                                                <div className="col-sm-3"></div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Legal Name</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">Username</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Company Website</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv2-2">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">website url</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="">
                                    <div className="box-body cmpy-prfl-a6 cmpy-prfl-prjctsdv3">
                                        <div className="cmpy-prfl-prjctsdv4">
                                            <i className="fa fa-info-circle cmpy-prfl-prjctsdv4icn"></i>
                                            <div className="cmpy-prfl-prjctsdv5">No data found.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>Contact Information</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                    
                                        <div className="form-group row ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 cmp-prfl-mtcsfld">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Primary Admin</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">zuehxhrk08esfuf@demo.infoity.com</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">HR Contact</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 hide">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Name <br/> email <br/> phone number</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={()=>{handleShow11(); }}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 cmpy-prfl-cspdd2">
                                                <span className="cmpy-prfl-a8 mt-2" onClick={()=>{handleShow(); }}>
                                                    <i className="fa fa-plus-circle"></i> Add HR Contact
                                                </span>
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
            <Modal.Header>
                <Modal.Title>CHANGE GGFGF'S HR CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div id="mdldv1">
                        <div className="cmpy-prfl-mdl2-dv3">
                            Employee Name
                        </div>
                        <div className="col-sm-6 pl-0">
                            <Select options={EmployeeList} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                            <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                            {empDrpDwnValue && <div style={{ display: 'none' }}>
                                <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show11} onHide={handleClose11} className="cmpy-prfl-mdl2" >
            <Modal.Header>
                <Modal.Title>CHANGE GGFGF'S HR CONTACT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div id="mdldv1">
                        <div className="cmpy-prfl-mdl2-dv3">
                            Employee Name
                        </div>
                        <div className="col-sm-6 pl-0">
                            <Select options={EmployeeList} defaultValue={{ label: "Roy Hill", value: 4 }} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                            <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select an employee</div>
                            {empDrpDwnValue && <div style={{ display: 'none' }}>
                                <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose11}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>General Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Doing Business As (DBA)</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="Company Name" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter company name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Legal Name </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="Legal Name" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Company Website </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld43" placeholder="Website URL" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr43">Please enter website url</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose2}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn3}>
                    Add Data
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show22} onHide={handleClose22} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>General Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Doing Business As (DBA)</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld421" placeholder="Company Name" autocomplete="off" maxlength="30" defaultValue='Infoity' />
                                    <div className="flderrmsgdv" id="mdlinpflderr421">Please enter company name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Legal Name </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld422" placeholder="Legal Name" autocomplete="off" maxlength="30" defaultValue='Username' />
                                    <div className="flderrmsgdv" id="mdlinpflderr422">Please enter name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Company Website </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" placeholder="Website URL" autocomplete="off" maxlength="30" defaultValue='Website url' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter website url</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose22}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn32}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

