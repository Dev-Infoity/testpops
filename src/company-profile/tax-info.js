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

export const CompanyProfileTaxInfo = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    

    const editfld3 = () => {
        $('#fielddv3').addClass('hide');
        $('#fielddv3-1').removeClass('hide');
    }

    const savefld3 = () => {
        var inpp3 = $('#inpfld3');
        var inp3 = $('#inpfld3').val();
        var inperr3 = $('#inpflderr3');
        
        if(!inp3) {
            
            if(!inp3) {
                inperr3.show().text('This field cannot be empty');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        }
        else {
            inpp3.removeClass('errfldbrdr');
            $('#fielddv3-1').addClass('hide');
            $('#fielddv3').removeClass('hide');
        }
    }

    const [datevalue, setDatevalue] = useState('');

    function handleChange(event) {
        const inputValue = event.target.value.replace(/[^\d]/g, '');
        //alert(inputValue)
        const formattedValue = inputValue.replace(/^(\d{2})(\d{0,4})/, '$1 / $2');
        //alert(formattedValue)
        setDatevalue(formattedValue);
    }



    const cancelfld3 = () => {
        var inpp3 = $('#inpfld3');
        var inp3 = $('#inpfld3').val();
        var inperr3 = $('#inpflderr3');

        inpp3.removeClass('errfldbrdr');
        inperr3.hide();

        $('#fielddv3-1').addClass('hide');
        $('#fielddv3').removeClass('hide');
    }


    const editfld4 = () => {
        $('#fielddv4').addClass('hide');
        $('#fielddv4-1').removeClass('hide');
    }

    const savefld4 = () => {
        var inpp4 = $('#inpfld4');
        var inp4 = $('#inpfld4').val();
        var inperr4 = $('#inpflderr4');
        
        if(!inp4) {
            
            if(!inp4) {
                inperr4.show().text('This field cannot be empty');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp4) === '') {
            inperr4.show().text('This field should not be blank');
            inpp4.addClass('errfldbrdr');
        }
        else {
            inpp4.removeClass('errfldbrdr');
            $('#fielddv4-1').addClass('hide');
            $('#fielddv4').removeClass('hide');
        }
    }

    const cancelfld4 = () => {
        var inpp4 = $('#inpfld4');
        var inp4 = $('#inpfld4').val();
        var inperr4 = $('#inpflderr4');

        inpp4.removeClass('errfldbrdr');
        inperr4.hide();

        $('#fielddv4-1').addClass('hide');
        $('#fielddv4').removeClass('hide');
    }


    const editfld5 = () => {
        $('.fielddvv5').addClass('hide');
        $('.fielddvv5-1').removeClass('hide');
    }

    const savefld5 = () => {
       
        $('.fielddvv5-1').addClass('hide');
        $('.fielddvv5').removeClass('hide');
    }

    const cancelfld5 = () => {
        var inpp5 = $('#inpfld5');
        var inp5 = $('#inpfld5').val();
        var inperr5 = $('#inpflderr5');

        inpp5.removeClass('errfldbrdr');
        inperr5.hide();

        $('.fielddvv5-1').addClass('hide');
        $('.fielddvv5').removeClass('hide');
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

    const EmployeeList2 = [
        { value: 0, label: 'df d' },
        { value: 1, label: 'Ashely' },
        { value: 2, label: 'Jane' },
        { value: 3, label: 'Jess' },
        { value: 4, label: 'Roy' },
        { value: 5, label: 'Emily Anderson' },
        { value: 6, label: 'James' },
        { value: 7, label: 'Steve' }
    ];



    const [empDrpDwnValue2, setEmpDrpDwnValue2] = useState();

    const handleChange11 = e => {
        setEmpDrpDwnValue2(Array.isArray(e) ? e.map(x => x.value) : []);
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
        
        editfld5();
        handleClose();
        
    }

    const mdlsvbtnn2 = () => {

        var fname = $('#mdlinpfldmbllfrstnm1').val();
        var lname = $('#mdlinpfldmbllstnm1').val();
        var email = $('#mdlinpfldmbleml1').val();
        var mobnum = $('#mdlinpfldmblnum1').val();

        var fnamee = $('#mdlinpfldmbllfrstnm1');
        var lnamee = $('#mdlinpfldmbllstnm1');
        var emaill = $('#mdlinpfldmbleml1');
        var mobnumm = $('#mdlinpfldmblnum1');

        var mdlerr1 = $('#mdlinpflderr1');
        var mdlerr2 = $('#mdlinpflderr2');
        var mdlerr3 = $('#mdlinpflderr3');
        var mdlerr4 = $('#mdlinpflderr4');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        
        if(!fname || !lname || !email || !mobnum) {
            
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

            if(!mobnum) {
                mdlerr4.show().text('This field cannot be empty');
                mobnumm.addClass('errfldbrdr');
            } else if ($.trim(mobnum) === '') {
                mdlerr4.show().text('Mobile number should not be blank');
                mobnumm.addClass('errfldbrdr');
            } else if (mobnum.length < 10) {
                mdlerr4.show().text('Please enter the valid mobile number');
                mobnumm.addClass('errfldbrdr');
            } else {
                mdlerr4.hide();
                mobnumm.removeClass('errfldbrdr');
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
          } else if ($.trim(mobnum) === '') {
            mdlerr4.show().text('Mobile number should not be blank');
            mobnumm.addClass('errfldbrdr');
        }
        else {
        
            mdlerr1.hide();
            mdlerr2.hide();
            mdlerr3.hide();
            mdlerr4.hide();

            fnamee.removeClass('errfldbrdr');
            lnamee.removeClass('errfldbrdr');
            emaill.removeClass('errfldbrdr');
            mobnumm.removeClass('errfldbrdr');


            handleClose();
        }
    }

    
    const editfldACI = () => {
        $('#fielddvACI1').addClass('hide');
        $('#fielddvACI1-1').removeClass('hide');
    }

    const savefldACI = () => {
        var inppACI1 = $('#inpfielddvACI1');
        var inpACI1 = $('#inpfielddvACI1').val();
        var inperrACI1 = $('#inpflderrdvACI2');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!inpACI1) {
            
            if(!inpACI1) {
                inperrACI1.show().text('This field cannot be empty');
                inppACI1.addClass('errfldbrdr');
            } else if ($.trim(inpACI1) === '') {
                inperrACI1.show().text('This field should not be blank');
                inppACI1.addClass('errfldbrdr');
            } else if (!emailRegex.test(inpACI1)) {
                inperrACI1.show().text('Please enter a valid email address');
                inppACI1.addClass('errfldbrdr');
              } else {
                inperrACI1.hide();
                inppACI1.removeClass('errfldbrdr');
            }

        } else if ($.trim(inpACI1) === '') {
            inperrACI1.show().text('This field should not be blank');
            inppACI1.addClass('errfldbrdr');
        } else if (!emailRegex.test(inpACI1)) {
            inperrACI1.show().text('Please enter a valid email address');
            inppACI1.addClass('errfldbrdr');
          }
        else {
            inppACI1.removeClass('errfldbrdr');
            inperrACI1.hide();
            $('#fielddvACI1-1').addClass('hide');
            $('#fielddvACI1').removeClass('hide');
        }
    }

    const cancelfldACI = () => {
        var inppACI1 = $('#inpfielddvACI1');
        var inpACI1 = $('#inpfielddvACI1').val();
        var inperrACI1 = $('#inpflderrdvACI2');

        inppACI1.removeClass('errfldbrdr');
        inperrACI1.hide();

        $('#fielddvACI1-1').addClass('hide');
        $('#fielddvACI1').removeClass('hide');
    }

    
    const editfldACII = () => {
        $('#fielddvACI1-2').addClass('hide');
        $('#fielddvACI1-11').removeClass('hide');
    }

    const savefldACII = () => {
        var inppACI1 = $('#inpfielddvACI11');
        var inpACI1 = $('#inpfielddvACI11').val();
        var inperrACI1 = $('#inpflderrdvACI1');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!inpACI1) {
            
            if(!inpACI1) {
                inperrACI1.show().text('This field cannot be empty');
                inppACI1.addClass('errfldbrdr');
            } else if ($.trim(inpACI1) === '') {
                inperrACI1.show().text('This field should not be blank');
                inppACI1.addClass('errfldbrdr');
            } else if (!emailRegex.test(inpACI1)) {
                inperrACI1.show().text('Please enter a valid email address');
                inppACI1.addClass('errfldbrdr');
              } else {
                inperrACI1.hide();
                inppACI1.removeClass('errfldbrdr');
            }

        } else if ($.trim(inpACI1) === '') {
            inperrACI1.show().text('This field should not be blank');
            inppACI1.addClass('errfldbrdr');
        } else if (!emailRegex.test(inpACI1)) {
            inperrACI1.show().text('Please enter a valid email address');
            inppACI1.addClass('errfldbrdr');
          }
        else {
            inppACI1.removeClass('errfldbrdr');
            inperrACI1.hide();
            $('#fielddvACI1-11').addClass('hide');
            $('#fielddvACI1-2').removeClass('hide');
        }
    }

    const cancelfldACII = () => {
        var inppACI1 = $('#inpfielddvACI11');
        var inpACI1 = $('#inpfielddvACI11').val();
        var inperrACI1 = $('#inpflderrdvACI1');

        inppACI1.removeClass('errfldbrdr');
        inperrACI1.hide();

        $('#fielddvACI1-11').addClass('hide');
        $('#fielddvACI1-2').removeClass('hide');
    }

    const mdlsvbtnn3 = () => {

        var inpp1 = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        var inpp4 = $('#mdlinpfld44');
        var inpp5 = $('#mdlinpfld45');
        var inpp6 = $('#mdlinpfld46');
        var inpp7 = $('#mdlinpfld47');
        var inpp8 = $('#mdlinpfld48');
        
        var inp1 = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        var inp4 = $('#mdlinpfld44').val();
        var inp5 = $('#mdlinpfld45').val();
        var inp6 = $('#mdlinpfld46').val();
        var inp7 = $('#mdlinpfld47').val();
        var inp8 = $('#mdlinpfld48').val();
        
        var inperr1 = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');
        var inperr4 = $('#mdlinpflderr44');
        var inperr5 = $('#mdlinpflderr45');
        var inperr6 = $('#mdlinpflderr46');
        var inperr7 = $('#mdlinpflderr47');
        var inperr8 = $('#mdlinpflderr48');

        if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8) {
            
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
            
            if(!inp5) {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }
            
            if(!inp6) {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '') {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6.removeClass('errfldbrdr');
            }
            
            if(!inp7) {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp7) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7.removeClass('errfldbrdr');
            }
            
            if(!inp8) {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else {
                inperr8.hide();
                inpp8.removeClass('errfldbrdr');
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
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
        } else if ($.trim(inp6) === '') {
            inperr6.show().text('This field should not be blank');
            inpp6.addClass('errfldbrdr');
        } else if ($.trim(inp7) === '') {
            inperr7.show().text('This field should not be blank');
            inpp7.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
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

            inpp5.removeClass('errfldbrdr');
            inperr5.hide();

            inpp6.removeClass('errfldbrdr');
            inperr6.hide();
            
            inpp6.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            handleClose2();

        }
    }

    

    const mdlsvbtnn32 = () => {

        var inpp1 = $('#mdlinpfld421');
        var inpp2 = $('#mdlinpfld422');
        var inpp3 = $('#mdlinpfld423');
        var inpp4 = $('#mdlinpfld424');
        var inpp5 = $('#mdlinpfld425');
        var inpp6 = $('#mdlinpfld426');
        var inpp7 = $('#mdlinpfld427');
        var inpp8 = $('#mdlinpfld428');
        
        var inp1 = $('#mdlinpfld421').val();
        var inp2 = $('#mdlinpfld422').val();
        var inp3 = $('#mdlinpfld423').val();
        var inp4 = $('#mdlinpfld424').val();
        var inp5 = $('#mdlinpfld425').val();
        var inp6 = $('#mdlinpfld426').val();
        var inp7 = $('#mdlinpfld427').val();
        var inp8 = $('#mdlinpfld428').val();
        
        var inperr1 = $('#mdlinpflderr421');
        var inperr2 = $('#mdlinpflderr422');
        var inperr3 = $('#mdlinpflderr423');
        var inperr4 = $('#mdlinpflderr424');
        var inperr5 = $('#mdlinpflderr425');
        var inperr6 = $('#mdlinpflderr426');
        var inperr7 = $('#mdlinpflderr427');
        var inperr8 = $('#mdlinpflderr428');

        if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8) {
            
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
            
            if(!inp5) {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }
            
            if(!inp6) {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '') {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6.removeClass('errfldbrdr');
            }
            
            if(!inp7) {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp7) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7.removeClass('errfldbrdr');
            }
            
            if(!inp8) {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else {
                inperr8.hide();
                inpp8.removeClass('errfldbrdr');
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
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
        } else if ($.trim(inp6) === '') {
            inperr6.show().text('This field should not be blank');
            inpp6.addClass('errfldbrdr');
        } else if ($.trim(inp7) === '') {
            inperr7.show().text('This field should not be blank');
            inpp7.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
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

            inpp5.removeClass('errfldbrdr');
            inperr5.hide();

            inpp6.removeClass('errfldbrdr');
            inperr6.hide();
            
            inpp6.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            handleClose22();

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
                                                <span>TAX FILING INFORMATION</span>
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
                                <div className="box-body hide" id="profile">
                                    <form>
                                        <div className="form-group row cmp-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Company Identification Number (CIN)</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">999999999</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">PAN Number</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">AEZD73AS72</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">GST Number</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">EINGST5231341511</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Date Established</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">March, 2017</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">State of Incorporation</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">CA</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Business Description</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">The industry leader in fitness and personal training.</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 mb-3">
                                            <div className="row m-0 col-sm-12 p-0 pt-3 pb-4">
                                                <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Business Entity Type</label>
                                                <div className="col-sm-8 col-xs-8 pl-0">
                                                    <label className="col-form-label tekila4">Corporation</label>
                                                </div>
                                            </div>
                                            <div className="row m-0 col-sm-12 p-0 pt-3 pb-4">
                                                <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Company Officers</label>
                                                <div className="col-sm-8 col-xs-8 pl-0">
                                                    <label className="col-form-label tekila4">df d</label>
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
                                        <span>ACCOUNTANT CONTACT INFORMATION</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                   
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Accountant Email</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 hide" id="fielddvACI1-2">
                                                <div className="col-sm-12 col-xs-12 pl-0 row m-0">
                                                    <div className="col-sm-9 col-xs-9 pl-0">
                                                        <label className="col-form-label tekila4">Accountant Email</label>
                                                    </div>
                                                    <div className="col-sm-1"></div>
                                                    <div className="col-sm-2 col-xs-2 pr-0">
                                                        <div className="text-right">
                                                            <div className="cmpy-prfl-a7" title="Edit" onClick={()=>{editfldACII(); }}>
                                                                <i className="fa fa-pen"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddvACI1-11">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <input type="text" className="tekila6" id="inpfielddvACI11" autocomplete="off" maxlength="30" defaultValue='Website url' />
                                                    <div className="flderrmsgdv" id="inpflderrdvACI1">This field cannot be empty</div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefldACII}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfldACII}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 pr-0" id="fielddvACI1">
                                                <div className="col-sm-8 col-xs-8 pl-0 cmpy-prfl-cspdd2">
                                                    <span className="cmpy-prfl-a8 mt-2" onClick={editfldACI}>
                                                        <i className="fa fa-plus-circle"></i> Add Accountant Email
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddvACI1-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <input type="text" className="tekila6" id="inpfielddvACI1" autocomplete="off" maxlength="30" />
                                                    <div className="flderrmsgdv" id="inpflderrdvACI2">This field cannot be empty</div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefldACI}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfldACI}>Cancel</span>
                                                    </div>
                                                </div>
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
                <Modal.Title>THIS AFFECTS YOUR PAYROLL AND TAXES</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="cmpy-prfl-mdl2-dv1-txninfdv1">
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            Changing your company's entity type or tax classification affects your payroll and taxes. Before you save any changes, make sure they're correct. 
                            If you're not sure, <a className="cmpy-prfl-mdl2-dv1-txninfdv1a">contact our support team for help</a>.
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn}>
                    Got it
                </Button>
            </Modal.Footer>
        </Modal>

        
        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>TAX FILING INFORMATION</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Company Identification Number (CIN)</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="Company Identification Number" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> PAN Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="PAN Number" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> GST Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld43" placeholder="GST Number" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr43">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Date Established </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="date" className="tekila6" id="mdlinpfld44" placeholder="GST Number" autocomplete="off" maxlength="10" />
                                    <div className="flderrmsgdv" id="mdlinpflderr44">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> State of Incorporation </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld45" placeholder="State of Incorporation" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr45">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Business Description </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld46" placeholder="Business Description" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr46">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Business Entity Type </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld47" placeholder="Business Entity Type" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr47">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Company Officers </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld48" placeholder="Company Officers" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr48">Please enter value</div>
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
                <Modal.Title>TAX FILING INFORMATION</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Company Identification Number (CIN)</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld421" placeholder="Company Identification Number" autocomplete="off" maxlength="30" defaultValue='999999999' />
                                    <div className="flderrmsgdv" id="mdlinpflderr421">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> PAN Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld422" placeholder="PAN Number" autocomplete="off" maxlength="30" defaultValue='AEZD73AS72' />
                                    <div className="flderrmsgdv" id="mdlinpflderr422">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> GST Number </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld423" placeholder="GST Number" autocomplete="off" maxlength="30" defaultValue='EINGST5231341511' />
                                    <div className="flderrmsgdv" id="mdlinpflderr423">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Date Established </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="date" className="tekila6" id="mdlinpfld424" placeholder="GST Number" autocomplete="off" maxlength="30" defaultValue='2017-03-13' />
                                    <div className="flderrmsgdv" id="mdlinpflderr424">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> State of Incorporation </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld425" placeholder="State of Incorporation" autocomplete="off" maxlength="30" defaultValue='CA' />
                                    <div className="flderrmsgdv" id="mdlinpflderr425">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Business Description </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld426" placeholder="Business Description" autocomplete="off" maxlength="30" defaultValue='The industry leader in fitness and personal training.' />
                                    <div className="flderrmsgdv" id="mdlinpflderr426">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Business Entity Type </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld427" placeholder="Business Entity Type" autocomplete="off" maxlength="30" defaultValue='Corporation' />
                                    <div className="flderrmsgdv" id="mdlinpflderr427">Please enter value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3"> Company Officers </label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld428" placeholder="Company Officers" autocomplete="off" maxlength="30" defaultValue='df d' />
                                    <div className="flderrmsgdv" id="mdlinpflderr428">Please enter value</div>
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
                    Add Data
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

