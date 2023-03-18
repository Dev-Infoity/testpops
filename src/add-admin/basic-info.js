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

export const AddAdminBasicInfo = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    const savefld1 = () => {

        var inpp1 = $('#inpfldmbllstnm1');
        var inpp2 = $('#inpfldmbllstnm2');
        var inpp3 = $('#inpfldmbllstnm3');
        var inpp4 = $('#inpfldmbllstnm4');

        var inp1 = $('#inpfldmbllstnm1').val();
        var inp2 = $('#inpfldmbllstnm2').val();
        var inp3 = $('#inpfldmbllstnm3').val();
        var inp4 = $('#inpfldmbllstnm4').val();
        
        var inperr1 = $('#inpflderr1');
        var inperr2 = $('#inpflderr2');
        var inperr3 = $('#inpflderr3');
        var inperr4 = $('#inpflderr4');
        
        if(!inp1 || !inp2 || !inp3 || !inp4) {
            
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
            
            if(!inp4) {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
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
        } else if ($.trim(inp4) === '') {
            inperr4.show().text('This field should not be blank');
            inpp4.addClass('errfldbrdr');
        }
        else {
            inpp1.removeClass('errfldbrdr');
            inperr1.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            inpp3.removeClass('errfldbrdr');
            inperr3.hide();

            inpp4.removeClass('errfldbrdr');
            inperr4.hide();

            $('#fielddv1-1').addClass('hide');
            $('#fielddv1').removeClass('hide');
            window.location.href = '/add-admin/roles';
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

    const rdosvbtnn = () => {
        
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
            window.location.href = '/add-admin/roles';
        }
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
                                    Who’s your new admin?
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
                                        <span>NEW ADMIN</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="form-group  ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3 mb-3">
                                            <div className="row m-0" id="mdldv1">
                                                <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Name</label>
                                                <div className="col-sm-6 pl-0">
                                                    <Select options={EmployeeList} className="crsr-pntr" value={EmployeeList.find(obj => obj.value === empDrpDwnValue)} onChange={handleChange1} isClearable />
                                                    <div className="flderrmsgdv" id="mdlinpflderrdrpdwn">Please select option</div>
                                                    {empDrpDwnValue && <div style={{ display: 'none' }}>
                                                        <div id="mdlempdrpdwnvll">{empDrpDwnValue}</div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group  ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-3 cmpy-prfl-mdl-admn-mdl4">
                                            <div className="text-right mr-2 ">
                                                <button type="button" className="primary modalRedBtn" id="btndt1" onClick={rdosvbtnn}>Continue</button>
                                                <button type="button" className="primary modalRedBtn hide" id="btndt2" onClick={savefld1}>Continue</button>
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

