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

export const CompanyProfileAddressInfo = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22 = () => setShow22(true);
    
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    
    const [show42, setShow42] = useState(false);
    const handleClose42 = () => setShow42(false);
    const handleShow42 = () => setShow42(true);
    
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    
    const [show72, setShow72] = useState(false);
    const handleClose72 = () => setShow72(false);
    const handleShow72 = () => setShow72(true);
    
    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
    
    const [show82, setShow82] = useState(false);
    const handleClose82 = () => setShow82(false);
    const handleShow82 = () => setShow82(true);

    const editfld1 = () => {
        $('#fielddv1').addClass('hide');
        $('#fielddv1-1').removeClass('hide');
    }

    const savefld1 = () => {

        var inpp1 = $('#inpfld11');
        var inpp2 = $('#inpfld12');
        var inpp3 = $('#inpfld13');
        var inpp4 = $('#inpfld14');
        var inpp5 = $('#inpfld15');

        var inp1 = $('#inpfld11').val();
        var inp2 = $('#inpfld12').val();
        var inp3 = $('#inpfld13').val();
        var inp4 = $('#inpfld14').val();
        var inp5 = $('#inpfld15').val();
        
        var inperr1 = $('#inpflderr11');
        var inperr2 = $('#inpflderr12');
        var inperr3 = $('#inpflderr13');
        var inperr4 = $('#inpflderr14');
        var inperr5 = $('#inpflderr15');
        
        if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5) {
            
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
            } else if (inp4 === 'State/Province') {
                inperr4.show().text('Please select the valid option');
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


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
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

            $('#fielddv1-1').addClass('hide');
            $('#fielddv1').removeClass('hide');
        }
    }

    const cancelfld1 = () => {

        var inpp1 = $('#inpfld11');
        var inpp2 = $('#inpfld12');
        var inpp3 = $('#inpfld13');
        var inpp4 = $('#inpfld14');
        var inpp5 = $('#inpfld15');

        var inp1 = $('#inpfld11').val();
        var inp2 = $('#inpfld12').val();
        var inp3 = $('#inpfld13').val();
        var inp4 = $('#inpfld14').val();
        var inp5 = $('#inpfld15').val();
        
        var inperr1 = $('#inpflderr11');
        var inperr2 = $('#inpflderr12');
        var inperr3 = $('#inpflderr13');
        var inperr4 = $('#inpflderr14');
        var inperr5 = $('#inpflderr15');

        
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

        $('#fielddv1-1').addClass('hide');
        $('#fielddv1').removeClass('hide');
    }
    

    const editfld3 = () => {
        $('#fielddv3').addClass('hide');
        $('#fielddv3-1').removeClass('hide');
    }

    const savefld3 = () => {

        var inpp1 = $('#inpfld21');
        var inpp2 = $('#inpfld22');
        var inpp3 = $('#inpfld23');
        var inpp4 = $('#inpfld24');
        var inpp5 = $('#inpfld25');

        var inp1 = $('#inpfld21').val();
        var inp2 = $('#inpfld22').val();
        var inp3 = $('#inpfld23').val();
        var inp4 = $('#inpfld24').val();
        var inp5 = $('#inpfld25').val();
        
        var inperr1 = $('#inpflderr21');
        var inperr2 = $('#inpflderr22');
        var inperr3 = $('#inpflderr23');
        var inperr4 = $('#inpflderr24');
        var inperr5 = $('#inpflderr25');
        
        
        if(!inp1 || !inp2 || !inp3 || !inp4 || !inp5) {
            
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
            } else if (inp4 === 'State/Province') {
                inperr4.show().text('Please select the valid option');
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


        } else if ($.trim(inp1) === '') {
            inperr1.show().text('This field should not be blank');
            inpp1.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if ($.trim(inp3) === '') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
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

        var inpp1 = $('#inpfld21');
        var inpp2 = $('#inpfld22');
        var inpp3 = $('#inpfld23');
        var inpp4 = $('#inpfld24');
        var inpp5 = $('#inpfld25');

        var inp1 = $('#inpfld21').val();
        var inp2 = $('#inpfld22').val();
        var inp3 = $('#inpfld23').val();
        var inp4 = $('#inpfld24').val();
        var inp5 = $('#inpfld25').val();
        
        var inperr1 = $('#inpflderr21');
        var inperr2 = $('#inpflderr22');
        var inperr3 = $('#inpflderr23');
        var inperr4 = $('#inpflderr24');
        var inperr5 = $('#inpflderr25');

        
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
                inperr4.show().text('This field should not be blank');
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

    
    const mdlsvbtnn4 = () => {
        
        var inpp = $('#mdlinpfld21');
        var inpp2 = $('#mdlinpfld22');
        var inp = $('#mdlinpfld21').val();
        var inp2 = $('#mdlinpfld22').val();
        var inperr = $('#mdlinpflderr21');
        var inperr2 = $('#mdlinpflderr22');
        
        if(!inp || !inp) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            handleClose4();
        }
        
    }

    
    const mdlsvbtnn42 = () => {
        
        var inpp = $('#mdlinpfld212');
        var inpp2 = $('#mdlinpfld222');
        var inp = $('#mdlinpfld212').val();
        var inp2 = $('#mdlinpfld222').val();
        var inperr = $('#mdlinpflderr212');
        var inperr2 = $('#mdlinpflderr222');
        
        if(!inp || !inp) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            handleClose42();
        }
        
    }

    
    const mdlsvbtnn5 = () => {
        
        var inpp = $('#mdlinpfld31');
        var inpp2 = $('#mdlinpfld32');
        var inp = $('#mdlinpfld31').val();
        var inp2 = $('#mdlinpfld32').val();
        var inperr = $('#mdlinpflderr31');
        var inperr2 = $('#mdlinpflderr32');
        
        if(!inp || !inp2) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

            inpp2.removeClass('errfldbrdr');
            inperr2.hide();

            handleClose5();
        }
        
    }

    
    const mdlsvbtnn6 = () => {
        
        var inpp = $('#mdlinpfld41');
        var inpp2 = $('#mdlinpfld42');
        var inpp3 = $('#mdlinpfld43');
        var inpp4 = $('#mdlinpfld44');
        var inpp5 = $('#mdlinpfld45');
        var inpp6 = $('#mdlinpfld46');
        var inpp7 = $('#mdlinpfld47');
        var inpp8 = $('#mdlinpfld48');
        var inpp9 = $('#mdlinpfld49');
        var inpp10 = $('#mdlinpfld410');

        var inp = $('#mdlinpfld41').val();
        var inp2 = $('#mdlinpfld42').val();
        var inp3 = $('#mdlinpfld43').val();
        var inp4 = $('#mdlinpfld44').val();
        var inp5 = $('#mdlinpfld45').val();
        var inp6 = $('#mdlinpfld46').val();
        var inp7 = $('#mdlinpfld47').val();
        var inp8 = $('#mdlinpfld48').val();
        var inp9 = $('#mdlinpfld49').val();
        var inp10 = $('#mdlinpfld410').val();

        var inperr = $('#mdlinpflderr41');
        var inperr2 = $('#mdlinpflderr42');
        var inperr3 = $('#mdlinpflderr43');
        var inperr4 = $('#mdlinpflderr44');
        var inperr5 = $('#mdlinpflderr45');
        var inperr6 = $('#mdlinpflderr46');
        var inperr7 = $('#mdlinpflderr47');
        var inperr8 = $('#mdlinpflderr48');
        var inperr9 = $('#mdlinpflderr49');
        var inperr10 = $('#mdlinpflderr410');
        
        if(!inp || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8 || !inp9 || !inp10) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('Please select country.');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if (inp3 === 'Country') {
                inperr3.show().text('Please select country');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }
            
            if(!inp4) {
                inperr4.show().text('Please enter details.');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }
            
            if(!inp5) {
                inperr5.show().text('Please enter details.');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }
            
            if(!inp6) {
                inperr6.show().text('Please enter details.');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '') {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6.removeClass('errfldbrdr');
            }
            
            if(!inp7) {
                inperr7.show().text('Please select state.');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if (inp7 === 'State') {
                inperr7.show().text('Please select state');
                inpp7.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7.removeClass('errfldbrdr');
            }
            
            if(!inp8) {
                inperr8.show().text('Please enter details.');
                inpp8.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else {
                inperr8.hide();
                inpp8.removeClass('errfldbrdr');
            }
            
            if(!inp9) {
                inperr9.show().text('Please enter phone number.');
                inpp9.addClass('errfldbrdr');
            } else if ($.trim(inp9) === '') {
                inperr9.show().text('This field should not be blank');
                inpp9.addClass('errfldbrdr');
            } else {
                inperr9.hide();
                inpp9.removeClass('errfldbrdr');
            }
            
            if(!inp10) {
                inperr10.show().text('Please select location.');
                inpp10.addClass('errfldbrdr');
            } else if ($.trim(inp10) === '') {
                inperr10.show().text('This field should not be blank');
                inpp10.addClass('errfldbrdr');
            } else if (inp10 === 'Select Location') {
                inperr10.show().text('Please select location');
                inpp10.addClass('errfldbrdr');
            } else {
                inperr10.hide();
                inpp10.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if (inp3 === 'Country') {
            inperr3.show().text('Please select country');
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
        } else if (inp7 === 'State') {
            inperr7.show().text('This field should not be blank');
            inpp7.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
        } else if ($.trim(inp9) === '') {
            inperr9.show().text('This field should not be blank');
            inpp9.addClass('errfldbrdr');
        } else if (inp10 === 'Select Location') {
            inperr10.show().text('Please select location');
            inpp10.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

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
            
            inpp7.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            inpp9.removeClass('errfldbrdr');
            inperr9.hide();

            handleClose6();
        }
        
    }
   

    
    const mdlsvbtnn7 = () => {
        
        var inpp = $('#mdlinpfld51');
        var inpp2 = $('#mdlinpfld52');
        var inpp3 = $('#mdlinpfld53');
        var inpp4 = $('#mdlinpfld54');
        var inpp5 = $('#mdlinpfld55');
        var inpp6 = $('#mdlinpfld56');
        var inpp7 = $('#mdlinpfld57');
        var inpp8 = $('#mdlinpfld58');
        var inpp9 = $('#mdlinpfld59');

        var inp = $('#mdlinpfld51').val();
        var inp2 = $('#mdlinpfld52').val();
        var inp3 = $('#mdlinpfld53').val();
        var inp4 = $('#mdlinpfld54').val();
        var inp5 = $('#mdlinpfld55').val();
        var inp6 = $('#mdlinpfld56').val();
        var inp7 = $('#mdlinpfld57').val();
        var inp8 = $('#mdlinpfld58').val();
        var inp9 = $('#mdlinpfld59').val();

        var inperr = $('#mdlinpflderr51');
        var inperr2 = $('#mdlinpflderr52');
        var inperr3 = $('#mdlinpflderr53');
        var inperr4 = $('#mdlinpflderr54');
        var inperr5 = $('#mdlinpflderr55');
        var inperr6 = $('#mdlinpflderr56');
        var inperr7 = $('#mdlinpflderr57');
        var inperr8 = $('#mdlinpflderr58');
        var inperr9 = $('#mdlinpflderr59');
        
        if(!inp || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8 || !inp9) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('Please select country.');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if (inp3 === 'Country') {
                inperr3.show().text('Please select country');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }
            if(!inp4) {
                inperr4.show().text('Please enter details.');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }
            
            if(!inp5) {
                inperr5.show().text('Please enter details.');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }
            
            if(!inp6) {
                inperr6.show().text('Please enter details.');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '') {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6.removeClass('errfldbrdr');
            }
            
            if(!inp7) {
                inperr7.show().text('Please select state.');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if (inp7 === 'State') {
                inperr7.show().text('Please select state');
                inpp7.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7.removeClass('errfldbrdr');
            }
            
            if(!inp8) {
                inperr8.show().text('Please enter details.');
                inpp8.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else {
                inperr8.hide();
                inpp8.removeClass('errfldbrdr');
            }
            
            if(!inp9) {
                inperr9.show().text('Please enter phone number.');
                inpp9.addClass('errfldbrdr');
            } else if ($.trim(inp9) === '') {
                inperr9.show().text('This field should not be blank');
                inpp9.addClass('errfldbrdr');
            } else {
                inperr9.hide();
                inpp9.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if (inp3 === 'Country') {
            inperr3.show().text('Please select country');
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
        } else if (inp7 === 'State') {
            inperr7.show().text('This field should not be blank');
            inpp7.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
        } else if ($.trim(inp9) === '') {
            inperr9.show().text('This field should not be blank');
            inpp9.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

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
            
            inpp7.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            inpp9.removeClass('errfldbrdr');
            inperr9.hide();

            handleClose7();
        }
        
    }

    
    const mdlsvbtnn72 = () => {
        
        var inpp = $('#mdlinpfld512');
        var inpp2 = $('#mdlinpfld522');
        var inpp3 = $('#mdlinpfld532');
        var inpp4 = $('#mdlinpfld542');
        var inpp5 = $('#mdlinpfld552');
        var inpp6 = $('#mdlinpfld562');
        var inpp7 = $('#mdlinpfld572');
        var inpp8 = $('#mdlinpfld582');
        var inpp9 = $('#mdlinpfld592');

        var inp = $('#mdlinpfld512').val();
        var inp2 = $('#mdlinpfld522').val();
        var inp3 = $('#mdlinpfld532').val();
        var inp4 = $('#mdlinpfld542').val();
        var inp5 = $('#mdlinpfld552').val();
        var inp6 = $('#mdlinpfld562').val();
        var inp7 = $('#mdlinpfld572').val();
        var inp8 = $('#mdlinpfld582').val();
        var inp9 = $('#mdlinpfld592').val();

        var inperr = $('#mdlinpflderr512');
        var inperr2 = $('#mdlinpflderr522');
        var inperr3 = $('#mdlinpflderr532');
        var inperr4 = $('#mdlinpflderr542');
        var inperr5 = $('#mdlinpflderr552');
        var inperr6 = $('#mdlinpflderr562');
        var inperr7 = $('#mdlinpflderr572');
        var inperr8 = $('#mdlinpflderr582');
        var inperr9 = $('#mdlinpflderr592');
        
        if(!inp || !inp2 || !inp3 || !inp4 || !inp5 || !inp6 || !inp7 || !inp8 || !inp9) {
            
            if(!inp) {
                inperr.show().text('Please enter name.');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter code.');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('Please select country.');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else if (inp3 === 'Country') {
                inperr3.show().text('Please select country');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }
            if(!inp4) {
                inperr4.show().text('Please enter details.');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }
            
            if(!inp5) {
                inperr5.show().text('Please enter details.');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }
            
            if(!inp6) {
                inperr6.show().text('Please enter details.');
                inpp6.addClass('errfldbrdr');
            } else if ($.trim(inp6) === '') {
                inperr6.show().text('This field should not be blank');
                inpp6.addClass('errfldbrdr');
            } else {
                inperr6.hide();
                inpp6.removeClass('errfldbrdr');
            }
            
            if(!inp7) {
                inperr7.show().text('Please select state.');
                inpp7.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr7.show().text('This field should not be blank');
                inpp7.addClass('errfldbrdr');
            } else if (inp7 === 'State') {
                inperr7.show().text('Please select state');
                inpp7.addClass('errfldbrdr');
            } else {
                inperr7.hide();
                inpp7.removeClass('errfldbrdr');
            }
            
            if(!inp8) {
                inperr8.show().text('Please enter details.');
                inpp8.addClass('errfldbrdr');
            } else if ($.trim(inp8) === '') {
                inperr8.show().text('This field should not be blank');
                inpp8.addClass('errfldbrdr');
            } else {
                inperr8.hide();
                inpp8.removeClass('errfldbrdr');
            }
            
            if(!inp9) {
                inperr9.show().text('Please enter phone number.');
                inpp9.addClass('errfldbrdr');
            } else if ($.trim(inp9) === '') {
                inperr9.show().text('This field should not be blank');
                inpp9.addClass('errfldbrdr');
            } else {
                inperr9.hide();
                inpp9.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if (inp3 === 'Country') {
            inperr3.show().text('Please select country');
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
        } else if (inp7 === 'State') {
            inperr7.show().text('This field should not be blank');
            inpp7.addClass('errfldbrdr');
        } else if ($.trim(inp8) === '') {
            inperr8.show().text('This field should not be blank');
            inpp8.addClass('errfldbrdr');
        } else if ($.trim(inp9) === '') {
            inperr9.show().text('This field should not be blank');
            inpp9.addClass('errfldbrdr');
        }
        else {
            inpp.removeClass('errfldbrdr');
            inperr.hide();

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
            
            inpp7.removeClass('errfldbrdr');
            inperr7.hide();

            inpp8.removeClass('errfldbrdr');
            inperr8.hide();

            inpp9.removeClass('errfldbrdr');
            inperr9.hide();

            handleClose72();
        }
        
    }

    

    function isNumberKey(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
    }

    const companyloc = () => {
        $('#cmpnylctn').addClass('active');
        $('#rmtlctn').removeClass('active');
        
        $('#cmpyydv').removeClass('hide');
        $('#remoteedv').addClass('hide');
    }

    const remoteloc = () => {
        $('#rmtlctn').addClass('active');
        $('#cmpnylctn').removeClass('active');
        
        $('#remoteedv').removeClass('hide');
        $('#cmpyydv').addClass('hide');
    }

    const mdlsvbtnn8 = () => {
        
        var inpp = $('#hdaddrsinpfld1');
        var inpp2 = $('#hdaddrsinpfld2');
        var inpp3 = $('#hdaddrsinpfld3');
        var inpp4 = $('#hdaddrsinpfld4');
        var inpp5 = $('#hdaddrsinpfld5');

        var inpp11 = $('#lgladdrsinpfld1');
        var inpp12 = $('#lgladdrsinpfld2');
        var inpp13 = $('#lgladdrsinpfld3');
        var inpp14 = $('#lgladdrsinpfld4');
        var inpp15 = $('#lgladdrsinpfld5');

        var inpp21 = $('#bladdrsinpfld1');
        var inpp22 = $('#bladdrsinpfld2');
        var inpp23 = $('#bladdrsinpfld3');
        var inpp24 = $('#bladdrsinpfld4');
        var inpp25 = $('#bladdrsinpfld5');

        var inp = $('#hdaddrsinpfld1').val();
        var inp2 = $('#hdaddrsinpfld2').val();
        var inp3 = $('#hdaddrsinpfld3').val();
        var inp4 = $('#hdaddrsinpfld4').val();
        var inp5 = $('#hdaddrsinpfld5').val();

        var inp11 = $('#lgladdrsinpfld1').val();
        var inp12 = $('#lgladdrsinpfld2').val();
        var inp13 = $('#lgladdrsinpfld3').val();
        var inp14 = $('#lgladdrsinpfld4').val();
        var inp15 = $('#lgladdrsinpfld5').val();

        var inp21 = $('#bladdrsinpfld1').val();
        var inp22 = $('#bladdrsinpfld2').val();
        var inp23 = $('#bladdrsinpfld3').val();
        var inp24 = $('#bladdrsinpfld4').val();
        var inp25 = $('#bladdrsinpfld5').val();

        var inperr = $('#hdaddrsinpflderr1');
        var inperr2 = $('#hdaddrsinpflderr2');
        var inperr3 = $('#hdaddrsinpflderr3');
        var inperr4 = $('#hdaddrsinpflderr4');
        var inperr5 = $('#hdaddrsinpflderr5');

        var inperr11 = $('#lgladdrsinpflderr1');
        var inperr12 = $('#lgladdrsinpflderr2');
        var inperr13 = $('#lgladdrsinpflderr3');
        var inperr14 = $('#lgladdrsinpflderr4');
        var inperr15 = $('#lgladdrsinpflderr5');

        var inperr21 = $('#bladdrsinpflderr1');
        var inperr22 = $('#bladdrsinpflderr2');
        var inperr23 = $('#bladdrsinpflderr3');
        var inperr24 = $('#bladdrsinpflderr4');
        var inperr25 = $('#bladdrsinpflderr5');
        
        if(!inp || !inp2 || !inp3 || !inp4 || !inp5 || !inp11 || !inp12 || !inp13 || !inp14 || !inp15 || !inp21 || !inp22 || !inp23 || !inp24 || !inp25) {
            
            if(!inp) {
                inperr.show().text('Please enter value');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter value');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('Please enter value');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }
            if(!inp4) {
                inperr4.show().text('Please select state.');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else if (inp4 === 'State/Province') {
                inperr4.show().text('Please select state');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }
            
            if(!inp5) {
                inperr5.show().text('Please enter value');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }

            
            if(!inp11) {
                inperr11.show().text('Please enter value');
                inpp11.addClass('errfldbrdr');
            } else if ($.trim(inp11) === '') {
                inperr11.show().text('This field should not be blank');
                inpp11.addClass('errfldbrdr');
            } else {
                inperr11.hide();
                inpp11.removeClass('errfldbrdr');
            }
            
            if(!inp12) {
                inperr12.show().text('Please enter value');
                inpp12.addClass('errfldbrdr');
            } else if ($.trim(inp12) === '') {
                inperr12.show().text('This field should not be blank');
                inpp12.addClass('errfldbrdr');
            } else {
                inperr12.hide();
                inpp12.removeClass('errfldbrdr');
            }
            
            if(!inp13) {
                inperr13.show().text('Please enter value');
                inpp13.addClass('errfldbrdr');
            } else if ($.trim(inp13) === '') {
                inperr13.show().text('This field should not be blank');
                inpp13.addClass('errfldbrdr');
            } else {
                inperr13.hide();
                inpp13.removeClass('errfldbrdr');
            }
            if(!inp14) {
                inperr14.show().text('Please select state.');
                inpp14.addClass('errfldbrdr');
            } else if ($.trim(inp14) === '') {
                inperr14.show().text('This field should not be blank');
                inpp14.addClass('errfldbrdr');
            } else if (inp14 === 'State/Province') {
                inperr14.show().text('Please select state');
                inpp14.addClass('errfldbrdr');
            } else {
                inperr14.hide();
                inpp14.removeClass('errfldbrdr');
            }
            
            if(!inp15) {
                inperr15.show().text('Please enter value');
                inpp15.addClass('errfldbrdr');
            } else if ($.trim(inp15) === '') {
                inperr15.show().text('This field should not be blank');
                inpp15.addClass('errfldbrdr');
            } else {
                inperr15.hide();
                inpp15.removeClass('errfldbrdr');
            }

            
            if(!inp21) {
                inperr21.show().text('Please enter value');
                inpp21.addClass('errfldbrdr');
            } else if ($.trim(inp21) === '') {
                inperr21.show().text('This field should not be blank');
                inpp21.addClass('errfldbrdr');
            } else {
                inperr21.hide();
                inpp21.removeClass('errfldbrdr');
            }
            
            if(!inp22) {
                inperr22.show().text('Please enter value');
                inpp22.addClass('errfldbrdr');
            } else if ($.trim(inp22) === '') {
                inperr22.show().text('This field should not be blank');
                inpp22.addClass('errfldbrdr');
            } else {
                inperr22.hide();
                inpp22.removeClass('errfldbrdr');
            }
            
            if(!inp23) {
                inperr23.show().text('Please enter value');
                inpp23.addClass('errfldbrdr');
            } else if ($.trim(inp23) === '') {
                inperr23.show().text('This field should not be blank');
                inpp23.addClass('errfldbrdr');
            } else {
                inperr23.hide();
                inpp23.removeClass('errfldbrdr');
            }
            if(!inp24) {
                inperr24.show().text('Please select state.');
                inpp24.addClass('errfldbrdr');
            } else if ($.trim(inp24) === '') {
                inperr24.show().text('This field should not be blank');
                inpp24.addClass('errfldbrdr');
            } else if (inp24 === 'State/Province') {
                inperr24.show().text('Please select state');
                inpp24.addClass('errfldbrdr');
            } else {
                inperr24.hide();
                inpp24.removeClass('errfldbrdr');
            }
            
            if(!inp25) {
                inperr25.show().text('Please enter value');
                inpp25.addClass('errfldbrdr');
            } else if ($.trim(inp25) === '') {
                inperr25.show().text('This field should not be blank');
                inpp25.addClass('errfldbrdr');
            } else {
                inperr25.hide();
                inpp25.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if (inp3 === 'Country') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        } else if (inp4 === 'State/Province') {
            inperr4.show().text('Please select state');
            inpp4.addClass('errfldbrdr');
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
        } else if ($.trim(inp11) === '') {
            inperr11.show().text('This field should not be blank');
            inpp11.addClass('errfldbrdr');
        } else if ($.trim(inp12) === '') {
            inperr12.show().text('This field should not be blank');
            inpp12.addClass('errfldbrdr');
        } else if (inp13 === 'Country') {
            inperr13.show().text('This field should not be blank');
            inpp13.addClass('errfldbrdr');
        } else if (inp14 === 'State/Province') {
            inperr14.show().text('Please select state');
            inpp14.addClass('errfldbrdr');
        } else if ($.trim(inp15) === '') {
            inperr15.show().text('This field should not be blank');
            inpp15.addClass('errfldbrdr');
        } else if ($.trim(inp21) === '') {
            inperr21.show().text('This field should not be blank');
            inpp21.addClass('errfldbrdr');
        } else if ($.trim(inp22) === '') {
            inperr22.show().text('This field should not be blank');
            inpp22.addClass('errfldbrdr');
        } else if (inp23 === 'Country') {
            inperr23.show().text('This field should not be blank');
            inpp23.addClass('errfldbrdr');
        } else if (inp24 === 'State/Province') {
            inperr24.show().text('Please select state');
            inpp24.addClass('errfldbrdr');
        } else if ($.trim(inp25) === '') {
            inperr25.show().text('This field should not be blank');
            inpp25.addClass('errfldbrdr');
        }
        else {

            inpp11.removeClass('errfldbrdr');
            inperr11.hide();

            inpp12.removeClass('errfldbrdr');
            inperr12.hide();
            
            inpp13.removeClass('errfldbrdr');
            inperr13.hide();

            inpp14.removeClass('errfldbrdr');
            inperr14.hide();
            
            inpp15.removeClass('errfldbrdr');
            inperr15.hide();
            
            inpp21.removeClass('errfldbrdr');
            inperr21.hide();

            inpp22.removeClass('errfldbrdr');
            inperr22.hide();
            
            inpp23.removeClass('errfldbrdr');
            inperr23.hide();

            inpp24.removeClass('errfldbrdr');
            inperr24.hide();
            
            inpp25.removeClass('errfldbrdr');
            inperr25.hide();

            handleClose8();
        }

    }


    const mdlsvbtnn82 = () => {
        
        var inpp = $('#hdaddrsedtinpfld1');
        var inpp2 = $('#hdaddrsedtinpfld2');
        var inpp3 = $('#hdaddrsedtinpfld3');
        var inpp4 = $('#hdaddrsedtinpfld4');
        var inpp5 = $('#hdaddrsedtinpfld5');

        var inpp11 = $('#lgladdrsedtinpfld1');
        var inpp12 = $('#lgladdrsedtinpfld2');
        var inpp13 = $('#lgladdrsedtinpfld3');
        var inpp14 = $('#lgladdrsedtinpfld4');
        var inpp15 = $('#lgladdrsedtinpfld5');

        var inpp21 = $('#bladdrsedtinpfld1');
        var inpp22 = $('#bladdrsedtinpfld2');
        var inpp23 = $('#bladdrsedtinpfld3');
        var inpp24 = $('#bladdrsedtinpfld4');
        var inpp25 = $('#bladdrsedtinpfld5');

        var inp = $('#hdaddrsedtinpfld1').val();
        var inp2 = $('#hdaddrsedtinpfld2').val();
        var inp3 = $('#hdaddrsedtinpfld3').val();
        var inp4 = $('#hdaddrsedtinpfld4').val();
        var inp5 = $('#hdaddrsedtinpfld5').val();

        var inp11 = $('#lgladdrsedtinpfld1').val();
        var inp12 = $('#lgladdrsedtinpfld2').val();
        var inp13 = $('#lgladdrsedtinpfld3').val();
        var inp14 = $('#lgladdrsedtinpfld4').val();
        var inp15 = $('#lgladdrsedtinpfld5').val();

        var inp21 = $('#bladdrsedtinpfld1').val();
        var inp22 = $('#bladdrsedtinpfld2').val();
        var inp23 = $('#bladdrsedtinpfld3').val();
        var inp24 = $('#bladdrsedtinpfld4').val();
        var inp25 = $('#bladdrsedtinpfld5').val();

        var inperr = $('#hdaddrsedtinpflderr1');
        var inperr2 = $('#hdaddrsedtinpflderr2');
        var inperr3 = $('#hdaddrsedtinpflderr3');
        var inperr4 = $('#hdaddrsedtinpflderr4');
        var inperr5 = $('#hdaddrsedtinpflderr5');

        var inperr11 = $('#lgladdrsedtinpflderr1');
        var inperr12 = $('#lgladdrsedtinpflderr2');
        var inperr13 = $('#lgladdrsedtinpflderr3');
        var inperr14 = $('#lgladdrsedtinpflderr4');
        var inperr15 = $('#lgladdrsedtinpflderr5');

        var inperr21 = $('#bladdrsedtinpflderr1');
        var inperr22 = $('#bladdrsedtinpflderr2');
        var inperr23 = $('#bladdrsedtinpflderr3');
        var inperr24 = $('#bladdrsedtinpflderr4');
        var inperr25 = $('#bladdrsedtinpflderr5');
        
        if(!inp || !inp2 || !inp3 || !inp4 || !inp5 || !inp11 || !inp12 || !inp13 || !inp14 || !inp15 || !inp21 || !inp22 || !inp23 || !inp24 || !inp25) {
            
            if(!inp) {
                inperr.show().text('Please enter value');
                inpp.addClass('errfldbrdr');
            } else if ($.trim(inp) === '') {
                inperr.show().text('This field should not be blank');
                inpp.addClass('errfldbrdr');
            } else {
                inperr.hide();
                inpp.removeClass('errfldbrdr');
            }
            
            if(!inp2) {
                inperr2.show().text('Please enter value');
                inpp2.addClass('errfldbrdr');
            } else if ($.trim(inp2) === '') {
                inperr2.show().text('This field should not be blank');
                inpp2.addClass('errfldbrdr');
            } else {
                inperr2.hide();
                inpp2.removeClass('errfldbrdr');
            }
            
            if(!inp3) {
                inperr3.show().text('Please enter value');
                inpp3.addClass('errfldbrdr');
            } else if ($.trim(inp3) === '') {
                inperr3.show().text('This field should not be blank');
                inpp3.addClass('errfldbrdr');
            } else {
                inperr3.hide();
                inpp3.removeClass('errfldbrdr');
            }
            if(!inp4) {
                inperr4.show().text('Please select state.');
                inpp4.addClass('errfldbrdr');
            } else if ($.trim(inp4) === '') {
                inperr4.show().text('This field should not be blank');
                inpp4.addClass('errfldbrdr');
            } else if (inp4 === 'State/Province') {
                inperr4.show().text('Please select state');
                inpp4.addClass('errfldbrdr');
            } else {
                inperr4.hide();
                inpp4.removeClass('errfldbrdr');
            }
            
            if(!inp5) {
                inperr5.show().text('Please enter value');
                inpp5.addClass('errfldbrdr');
            } else if ($.trim(inp5) === '') {
                inperr5.show().text('This field should not be blank');
                inpp5.addClass('errfldbrdr');
            } else {
                inperr5.hide();
                inpp5.removeClass('errfldbrdr');
            }

            
            if(!inp11) {
                inperr11.show().text('Please enter value');
                inpp11.addClass('errfldbrdr');
            } else if ($.trim(inp11) === '') {
                inperr11.show().text('This field should not be blank');
                inpp11.addClass('errfldbrdr');
            } else {
                inperr11.hide();
                inpp11.removeClass('errfldbrdr');
            }
            
            if(!inp12) {
                inperr12.show().text('Please enter value');
                inpp12.addClass('errfldbrdr');
            } else if ($.trim(inp12) === '') {
                inperr12.show().text('This field should not be blank');
                inpp12.addClass('errfldbrdr');
            } else {
                inperr12.hide();
                inpp12.removeClass('errfldbrdr');
            }
            
            if(!inp13) {
                inperr13.show().text('Please enter value');
                inpp13.addClass('errfldbrdr');
            } else if ($.trim(inp13) === '') {
                inperr13.show().text('This field should not be blank');
                inpp13.addClass('errfldbrdr');
            } else {
                inperr13.hide();
                inpp13.removeClass('errfldbrdr');
            }
            if(!inp14) {
                inperr14.show().text('Please select state.');
                inpp14.addClass('errfldbrdr');
            } else if ($.trim(inp14) === '') {
                inperr14.show().text('This field should not be blank');
                inpp14.addClass('errfldbrdr');
            } else if (inp14 === 'State/Province') {
                inperr14.show().text('Please select state');
                inpp14.addClass('errfldbrdr');
            } else {
                inperr14.hide();
                inpp14.removeClass('errfldbrdr');
            }
            
            if(!inp15) {
                inperr15.show().text('Please enter value');
                inpp15.addClass('errfldbrdr');
            } else if ($.trim(inp15) === '') {
                inperr15.show().text('This field should not be blank');
                inpp15.addClass('errfldbrdr');
            } else {
                inperr15.hide();
                inpp15.removeClass('errfldbrdr');
            }

            
            if(!inp21) {
                inperr21.show().text('Please enter value');
                inpp21.addClass('errfldbrdr');
            } else if ($.trim(inp21) === '') {
                inperr21.show().text('This field should not be blank');
                inpp21.addClass('errfldbrdr');
            } else {
                inperr21.hide();
                inpp21.removeClass('errfldbrdr');
            }
            
            if(!inp22) {
                inperr22.show().text('Please enter value');
                inpp22.addClass('errfldbrdr');
            } else if ($.trim(inp22) === '') {
                inperr22.show().text('This field should not be blank');
                inpp22.addClass('errfldbrdr');
            } else {
                inperr22.hide();
                inpp22.removeClass('errfldbrdr');
            }
            
            if(!inp23) {
                inperr23.show().text('Please enter value');
                inpp23.addClass('errfldbrdr');
            } else if ($.trim(inp23) === '') {
                inperr23.show().text('This field should not be blank');
                inpp23.addClass('errfldbrdr');
            } else {
                inperr23.hide();
                inpp23.removeClass('errfldbrdr');
            }
            if(!inp24) {
                inperr24.show().text('Please select state.');
                inpp24.addClass('errfldbrdr');
            } else if ($.trim(inp24) === '') {
                inperr24.show().text('This field should not be blank');
                inpp24.addClass('errfldbrdr');
            } else if (inp24 === 'State/Province') {
                inperr24.show().text('Please select state');
                inpp24.addClass('errfldbrdr');
            } else {
                inperr24.hide();
                inpp24.removeClass('errfldbrdr');
            }
            
            if(!inp25) {
                inperr25.show().text('Please enter value');
                inpp25.addClass('errfldbrdr');
            } else if ($.trim(inp25) === '') {
                inperr25.show().text('This field should not be blank');
                inpp25.addClass('errfldbrdr');
            } else {
                inperr25.hide();
                inpp25.removeClass('errfldbrdr');
            }

        } else if ($.trim(inp) === '') {
            inperr.show().text('This field should not be blank');
            inpp.addClass('errfldbrdr');
        } else if ($.trim(inp2) === '') {
            inperr2.show().text('This field should not be blank');
            inpp2.addClass('errfldbrdr');
        } else if (inp3 === 'Country') {
            inperr3.show().text('This field should not be blank');
            inpp3.addClass('errfldbrdr');
        } else if (inp4 === 'State/Province') {
            inperr4.show().text('Please select state');
            inpp4.addClass('errfldbrdr');
        } else if ($.trim(inp5) === '') {
            inperr5.show().text('This field should not be blank');
            inpp5.addClass('errfldbrdr');
        } else if ($.trim(inp11) === '') {
            inperr11.show().text('This field should not be blank');
            inpp11.addClass('errfldbrdr');
        } else if ($.trim(inp12) === '') {
            inperr12.show().text('This field should not be blank');
            inpp12.addClass('errfldbrdr');
        } else if (inp13 === 'Country') {
            inperr13.show().text('This field should not be blank');
            inpp13.addClass('errfldbrdr');
        } else if (inp14 === 'State/Province') {
            inperr14.show().text('Please select state');
            inpp14.addClass('errfldbrdr');
        } else if ($.trim(inp15) === '') {
            inperr15.show().text('This field should not be blank');
            inpp15.addClass('errfldbrdr');
        } else if ($.trim(inp21) === '') {
            inperr21.show().text('This field should not be blank');
            inpp21.addClass('errfldbrdr');
        } else if ($.trim(inp22) === '') {
            inperr22.show().text('This field should not be blank');
            inpp22.addClass('errfldbrdr');
        } else if (inp23 === 'Country') {
            inperr23.show().text('This field should not be blank');
            inpp23.addClass('errfldbrdr');
        } else if (inp24 === 'State/Province') {
            inperr24.show().text('Please select state');
            inpp24.addClass('errfldbrdr');
        } else if ($.trim(inp25) === '') {
            inperr25.show().text('This field should not be blank');
            inpp25.addClass('errfldbrdr');
        }
        else {

            inpp11.removeClass('errfldbrdr');
            inperr11.hide();

            inpp12.removeClass('errfldbrdr');
            inperr12.hide();
            
            inpp13.removeClass('errfldbrdr');
            inperr13.hide();

            inpp14.removeClass('errfldbrdr');
            inperr14.hide();
            
            inpp15.removeClass('errfldbrdr');
            inperr15.hide();
            
            inpp21.removeClass('errfldbrdr');
            inperr21.hide();

            inpp22.removeClass('errfldbrdr');
            inperr22.hide();
            
            inpp23.removeClass('errfldbrdr');
            inperr23.hide();

            inpp24.removeClass('errfldbrdr');
            inperr24.hide();
            
            inpp25.removeClass('errfldbrdr');
            inperr25.hide();

            handleClose82();
        }


    }
    
    
    const [headquarterAddress1, setheadquarterAddress1] = useState("");
    const [headquarterAddress2, setheadquarterAddress2] = useState("");
    const [headquarterAddress3, setheadquarterAddress3] = useState("");
    const [headquarterAddress4, setheadquarterAddress4] = useState("");
    const [headquarterAddress5, setheadquarterAddress5] = useState("");
    
    const [legalAddress1, setlegalAddress1] = useState("");
    const [legalAddress2, setlegalAddress2] = useState("");
    const [legalAddress3, setlegalAddress3] = useState("");
    const [legalAddress4, setlegalAddress4] = useState("");
    const [legalAddress5, setlegalAddress5] = useState("");
    
    const [billingAddress1, setbillingAddress1] = useState("");
    const [billingAddress2, setbillingAddress2] = useState("");
    const [billingAddress3, setbillingAddress3] = useState("");
    const [billingAddress4, setbillingAddress4] = useState("");
    const [billingAddress5, setbillingAddress5] = useState("");

    const [isCheckedchkbx1, setisCheckedchkbx1] = useState(false);
    const [isCheckedchkbx2, setisCheckedchkbx2] = useState(false);

    const copyhdqtrAddressTolgl = () => {
        if (isCheckedchkbx1) {
            setlegalAddress1(headquarterAddress1);
            setlegalAddress2(headquarterAddress2);
            setlegalAddress3(headquarterAddress3);
            setlegalAddress4(headquarterAddress4);
            setlegalAddress5(headquarterAddress5);
        }
        else {
            setlegalAddress1('');
            setlegalAddress2('');
            setlegalAddress3('');
            setlegalAddress4('');
            setlegalAddress5('');
        }
    };
    
    const copyhdqtrAddressTobling = () => {
        if (isCheckedchkbx2) {
            setbillingAddress1(headquarterAddress1);
            setbillingAddress2(headquarterAddress2);
            setbillingAddress3(headquarterAddress3);
            setbillingAddress4(headquarterAddress4);
            setbillingAddress5(headquarterAddress5);
        }
        else {
            setbillingAddress1('');
            setbillingAddress2('');
            setbillingAddress3('');
            setbillingAddress4('');
            setbillingAddress5('');
        }
    };

    useEffect(() => {
        copyhdqtrAddressTolgl();
    }, [isCheckedchkbx1]);
    

    useEffect(() => {
        copyhdqtrAddressTobling();
    }, [isCheckedchkbx2]);


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
                                                <span>Addresses</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <div onClick={()=>{handleShow8();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-plus-circle"></i> Add Address
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pt-0 cmpy-prfl-cspdd2 hide">
                                                    <div onClick={()=>{handleShow82();}}>
                                                        <span className="cmpy-prfl-a8 mt-2">
                                                            <i className="fa fa-pen"></i> Edit Address
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label className="col-sm-4 col-xs-4 col-form-label tekila3">Headquarters Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">250 Brannan Street <br/> San Francisco, CA 94107</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label className="col-sm-4 col-xs-4 col-form-label tekila3">Legal Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">250 Brannan Street <br/> San Francisco, CA 94107</label>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4 mb-3">
                                            <label className="col-sm-4 col-xs-4 col-form-label tekila3">Billing Address</label>
                                            <div className="col-sm-8 col-xs-8 pl-0">
                                                <label className="col-form-label tekila4">250 Brannan Street <br/> San Francisco, CA 94107</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 pt-16px mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-3 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>WORK LOCATIONS</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to='' className="cmpy-prfl-adrs-a5" >
                                                Learn more
                                            </Link>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <span className="cmpy-prfl-a8 mt-2" onClick={()=>{handleShow6();}}>
                                                        <i className="fa fa-plus-circle"></i> Add Company Location
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body" id="contact">
                                    <div className="cmpy-prfl-adrs-a6">
                                        <div className="cmpy-prfl-adrs-a7">
                                            <ul className="cmpy-prfl-adrs-a8 row">
                                                <li className="cmpy-prfl-adrs-a9 active" id='cmpnylctn' onClick={companyloc}>
                                                    <span>
                                                        Company Locations (1)
                                                    </span>
                                                </li>
                                                <li className="cmpy-prfl-adrs-a9" id='rmtlctn' onClick={remoteloc}>
                                                    <span>
                                                        Remote Locations (1)
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form>
                                   
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">San Francisco</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="cmpyydv">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">
                                                        250 Brannan Street <br/> San Francisco, CA 94107 <br/> <Link to=''> 19 People </Link>
                                                    </label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <span className="cmpy-prfl-a7" title="Delete" onClick={()=>{handleShow2();}}>
                                                            <i className="fa fa-trash fs-11px"></i>
                                                        </span>
                                                        <span className="cmpy-prfl-a7 ml--8px" title="Edit" onClick={()=>{handleShow7();}}>
                                                            <i className="fa fa-pen fs-11px"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 hide" id="remoteedv">
                                            <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">
                                                        250 Brannan Street <br/> San Francisco, CA 94107 <br/> <Link to=''> 19 People </Link>
                                                    </label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <span className="cmpy-prfl-a7" title="Delete" onClick={()=>{handleShow22();}}>
                                                            <i className="fa fa-trash fs-11px"></i>
                                                        </span>
                                                        <span className="cmpy-prfl-a7 ml--8px" title="Edit" onClick={()=>{handleShow72();}}>
                                                            <i className="fa fa-pen fs-11px"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-16px mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-2 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>DEPARTMENTS</span>
                                            </h5>
                                        </div>
                                        <div className="col-sm-4">
                                            <Link to='' className="cmpy-prfl-adrs-a5" >
                                                Learn more
                                            </Link>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <span className="cmpy-prfl-a8 mt-2" onClick={()=>{handleShow4();}}>
                                                        <i className="fa fa-plus-circle"></i> Add Department
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <form>
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-3 pb-4">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Fitness Training</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">
                                                        <Link to=''> 15 People </Link>
                                                    </label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <span className="cmpy-prfl-a7" title="Delete" onClick={()=>{handleShow3();editfld1();}}>
                                                            <i className="fa fa-trash fs-11px"></i>
                                                        </span>
                                                        <span className="cmpy-prfl-a7 ml--8px" title="Edit" onClick={()=>{handleShow5();editfld1();}}>
                                                            <i className="fa fa-pen fs-11px"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <div className="row m-0">
                                        <div className="col-sm-6 p-0">
                                            <h5 className="cmpy-prfl-a5">
                                                <span>DESIGNATIONS</span>
                                                <Link to='' className="cmpy-prfl-adrs-a5 ml-4" >
                                                    Learn more
                                                </Link>
                                            </h5>
                                        </div>
                                        <div className="col-sm-6 pr-0">
                                            <div className="text-right">
                                                <div className="pt-0 cmpy-prfl-cspdd2">
                                                    <span className="cmpy-prfl-a8 mt-2" onClick={()=>{handleShow42();}}>
                                                        <i className="fa fa-plus-circle"></i> Add Designation
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <form>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Cashier</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">
                                                        2 Assigned People
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld mb-3 ml-0 mr-0 cmpy-prfl-a6 pt-2 pb-3">
                                            <label htmlFor className="col-sm-4 col-xs-4 col-form-label tekila3">Cook</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">
                                                        6 Assigned People
                                                    </label>
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
                <Modal.Title>ADD LABOR GROUP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Group Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld11" placeholder="E.g. Division" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr11">Please enter a Labor Group name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn1}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show2} onHide={handleClose2} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ASSIGN DIFFERENT WORK LOCATIONS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            19 current employees are assigned to this work location. You need to assign each of your San Francisco employees to a different work location before you can delete this one.
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose2}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={handleClose2}>
                    View Employees
                </Button>
            </Modal.Footer>
        </Modal>
        
        
        <Modal show={show22} onHide={handleClose22} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ASSIGN DIFFERENT WORK LOCATIONS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            19 current employees are assigned to this work location. You need to assign each of your San Francisco employees to a different work location before you can delete this one.
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose22}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={handleClose22}>
                    View Employees
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show3} onHide={handleClose3} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>DELETE DEPARTMENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div>
                        <p className="cmpy-prfl-mdl2-dv1-txninfdv1p">
                            Are you sure you want to delete your Fitness Training department? If you do, the 15 current employees in Fitness Training won’t be assigned to a department.
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={handleClose3}>
                    Yes, Delete
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show4} onHide={handleClose4} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ADD DEPARTMENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld21" placeholder="Engineering" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr21">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld22" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr22">Please enter code.</div>
                                    <span className="cmpy-prfl-mdl-dvsp1">You must have a code to use this position in <b>Time & Attendance</b> or <b>Payroll</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose4}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn4}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>

        
        
        <Modal show={show42} onHide={handleClose42} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ADD DESIGNATION</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld212" placeholder="Engineering" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr212">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld222" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr222">Please enter code.</div>
                                    <span className="cmpy-prfl-mdl-dvsp1">You must have a code to use this position in <b>Time & Attendance</b> or <b>Payroll</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose42}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn42}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show5} onHide={handleClose5} className="cmpy-prfl-mdl2" >
        <Modal.Header closeButton>
                <Modal.Title>EDIT DEPARTMENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld31" placeholder="Engineering" autocomplete="off" maxlength="30" defaultValue='Fitness Training' />
                                    <div className="flderrmsgdv" id="mdlinpflderr31">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld32" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr32">Please enter code.</div>
                                    <span className="cmpy-prfl-mdl-dvsp1">You must have a code to use this position in <b>Time & Attendance</b> or <b>Payroll</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose5}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn5}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show6} onHide={handleClose6} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ADD COMPANY LOCATION</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld41" placeholder="San Francisco Office" autocomplete="off" maxlength="30" defaultValue='Fitness Training' />
                                    <div className="flderrmsgdv" id="mdlinpflderr41">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld42" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr42">Please enter code.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Address</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <select className="tekila6 cmpy-prfl-adrs-a10" id="mdlinpfld43">
                                        <option value='Country'>Country</option>
                                        <option value='India' selected>India</option>
                                    </select>
                                    <div className="flderrmsgdv" id="mdlinpflderr43">Please select country.</div>
                                </div>
                                <div className="col-sm-9 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld44" placeholder="Street Address" autocomplete="off" maxlength="80" />
                                    <div className="flderrmsgdv" id="mdlinpflderr44">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld45" placeholder="Apt/Suite" autocomplete="off" maxlength="50" />
                                    <div className="flderrmsgdv" id="mdlinpflderr45">Please enter details.</div>
                                </div>
                                <div className="col-sm-6 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld46" placeholder="City" autocomplete="off" maxlength="80" />
                                    <div className="flderrmsgdv" id="mdlinpflderr46">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pl-2 pr-0 mb-2">
                                    <select className="tekila6 cmpy-prfl-adrs-a10" id="mdlinpfld47">
                                        <option value='State'>State</option>
                                        <option value='India'>Delhi</option>
                                    </select>
                                    <div className="flderrmsgdv" id="mdlinpflderr47">Please select state.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld48" placeholder="ZIP Code" autocomplete="off" maxlength="50" />
                                    <div className="flderrmsgdv" id="mdlinpflderr48">Please enter details.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Phone Number</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld49" placeholder="Phone Number" autocomplete="off" maxlength="15" onKeyPress={isNumberKey} />
                                    <div className="flderrmsgdv" id="mdlinpflderr49">Please enter phone number.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Location</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <select className="tekila6 cmpy-prfl-adrs-a10" id="mdlinpfld410">
                                        <option value='Select Location'>-- Select Location --</option>
                                        <option value='Company Location'>Company Location</option>
                                        <option value='Remote Location'>Remote Location</option>
                                    </select>
                                    <div className="flderrmsgdv" id="mdlinpflderr410">Please select location.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose6}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn6}>
                    Add Location
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show7} onHide={handleClose7} className="cmpy-prfl-mdl2" >
        <Modal.Header closeButton>
                <Modal.Title>EDIT WORK LOCATION</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld51" placeholder="San Francisco" autocomplete="off" maxlength="30" defaultValue='Fitness Training' />
                                    <div className="flderrmsgdv" id="mdlinpflderr51">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld52" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr52">Please enter code.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Address</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input className="tekila6 cmpy-prfl-dsblfld" id="mdlinpfld53" readOnly value='India' />
                                    <div className="flderrmsgdv" id="mdlinpflderr53">Please select country.</div>
                                </div>
                                <div className="col-sm-9 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld54" placeholder="Street Address" autocomplete="off" maxlength="80" defaultValue='250 Brannan Street' />
                                    <div className="flderrmsgdv" id="mdlinpflderr54">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld55" placeholder="Apt/Suite" autocomplete="off" maxlength="50" />
                                    <div className="flderrmsgdv" id="mdlinpflderr55">Please enter details.</div>
                                </div>
                                <div className="col-sm-6 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld56" placeholder="City" autocomplete="off" maxlength="80" defaultValue='San Francisco' />
                                    <div className="flderrmsgdv" id="mdlinpflderr56">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pl-2 pr-0 mb-2">
                                    <select className="tekila6 cmpy-prfl-adrs-a10" id="mdlinpfld57">
                                        <option value='State'>State</option>
                                        <option value='India' selected>Delhi</option>
                                    </select>
                                    <div className="flderrmsgdv" id="mdlinpflderr57">Please select state.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld58" placeholder="ZIP Code" autocomplete="off" maxlength="50" defaultValue='94107' />
                                    <div className="flderrmsgdv" id="mdlinpflderr58">Please enter details.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Phone Number</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld59" placeholder="Phone Number" autocomplete="off" maxlength="15" onKeyPress={isNumberKey} />
                                    <div className="flderrmsgdv" id="mdlinpflderr59">Please enter phone number.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose7}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn7}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>


        
        
        <Modal show={show72} onHide={handleClose72} className="cmpy-prfl-mdl2" >
        <Modal.Header closeButton>
                <Modal.Title>EDIT WORK LOCATION</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Name</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld512" placeholder="San Francisco" autocomplete="off" maxlength="30" defaultValue='Fitness Training' />
                                    <div className="flderrmsgdv" id="mdlinpflderr512">Please enter name.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Code <br/> <span className="cmpy-prfl-mdl-dvsp1">Optional</span></label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld522" placeholder="ABC 123" autocomplete="off" maxlength="30" />
                                    <div className="flderrmsgdv" id="mdlinpflderr522">Please enter code.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Address</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input className="tekila6 cmpy-prfl-dsblfld" id="mdlinpfld532" readOnly value='India' />
                                    <div className="flderrmsgdv" id="mdlinpflderr532">Please select country.</div>
                                </div>
                                <div className="col-sm-9 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld542" placeholder="Street Address" autocomplete="off" maxlength="80" defaultValue='250 Brannan Street' />
                                    <div className="flderrmsgdv" id="mdlinpflderr542">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld552" placeholder="Apt/Suite" autocomplete="off" maxlength="50" />
                                    <div className="flderrmsgdv" id="mdlinpflderr552">Please enter details.</div>
                                </div>
                                <div className="col-sm-6 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld562" placeholder="City" autocomplete="off" maxlength="80" defaultValue='San Francisco' />
                                    <div className="flderrmsgdv" id="mdlinpflderr562">Please enter details.</div>
                                </div>
                                <div className="col-sm-3 pl-2 pr-0 mb-2">
                                    <select className="tekila6 cmpy-prfl-adrs-a10" id="mdlinpfld572">
                                        <option value='State'>State</option>
                                        <option value='India' selected>Delhi</option>
                                    </select>
                                    <div className="flderrmsgdv" id="mdlinpflderr572">Please select state.</div>
                                </div>
                                <div className="col-sm-3 pr-0 pl-2 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld582" placeholder="ZIP Code" autocomplete="off" maxlength="50" defaultValue='94107' />
                                    <div className="flderrmsgdv" id="mdlinpflderr582">Please enter details.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-3 pl-0 col-xs-4 col-form-label tekila3">Phone Number</label>
                        <div className="col-sm-9 col-xs-9 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <input type="text" className="tekila6" id="mdlinpfld592" placeholder="Phone Number" autocomplete="off" maxlength="15" onKeyPress={isNumberKey} />
                                    <div className="flderrmsgdv" id="mdlinpflderr592">Please enter phone number.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose72}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn72}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

        

        
        <Modal show={show8} onHide={handleClose8} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>ADD ADDRESSES</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Headquarters Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="hdaddrsinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" value={headquarterAddress1} onChange={(e) => setheadquarterAddress1(e.target.value)} />
                                            <div className="flderrmsgdv" id="hdaddrsinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="hdaddrsinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" value={headquarterAddress2} onChange={(e) => setheadquarterAddress2(e.target.value)} />
                                            <div className="flderrmsgdv" id="hdaddrsinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="hdaddrsinpfld3" placeholder="City" autocomplete="off" maxlength="60" value={headquarterAddress3} onChange={(e) => setheadquarterAddress3(e.target.value)} />
                                            <div className="flderrmsgdv" id="hdaddrsinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="hdaddrsinpfld4" value={headquarterAddress4} onChange={(e) => setheadquarterAddress4(e.target.value)}>
                                                <option value="State/Province">State/Province</option>
                                                <option value="AK">AK</option>
                                                <option value="AL">AL</option>
                                                <option value="AS">AS</option>
                                                <option value="AR">AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="hdaddrsinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="hdaddrsinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" value={headquarterAddress5} onChange={(e) => setheadquarterAddress5(e.target.value)} />
                                            <div className="flderrmsgdv" id="hdaddrsinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group cmpy-prfl-csm-mdl-bdrtp mt-3 pt-3">
                        <div className="col-sm-12 text-right">
                            <div>
                                <label for="cmpyprflchkbx1" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm cmpy-prfl-mdlcs-lbl1 mr-3">
                                    Same as Headquarters Address
                                </label>
                                <input type="checkbox" id="cmpyprflchkbx1" className="cmpy-prfl-adadmn-rls1" checked={isCheckedchkbx1} onChange={(e) => setisCheckedchkbx1(e.target.checked)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Legal Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="lgladdrsinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" value={legalAddress1} onChange={(e) => setlegalAddress1(e.target.value)} />
                                            <div className="flderrmsgdv" id="lgladdrsinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="lgladdrsinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" value={legalAddress2} onChange={(e) => setlegalAddress2(e.target.value)} />
                                            <div className="flderrmsgdv" id="lgladdrsinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="lgladdrsinpfld3" placeholder="City" autocomplete="off" maxlength="60" value={legalAddress3} onChange={(e) => setlegalAddress3(e.target.value)} />
                                            <div className="flderrmsgdv" id="lgladdrsinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="lgladdrsinpfld4" value={legalAddress4} onChange={(e) => setlegalAddress4(e.target.value)}>
                                                <option value='State/Province'>State/Province</option>
                                                <option value='AK'>AK</option>
                                                <option value='AL'>AL</option>
                                                <option value='AS'>AS</option>
                                                <option value='AR'>AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="lgladdrsinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="lgladdrsinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" value={legalAddress5} onChange={(e) => setlegalAddress5(e.target.value)} />
                                            <div className="flderrmsgdv" id="lgladdrsinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group cmpy-prfl-csm-mdl-bdrtp mt-3 pt-3">
                        <div className="col-sm-12 text-right">
                            <div>
                                <label for="cmpyprflchkbx2" className="cmpy-prfl-adadmn-rls2 cmpy-prfl-adadmn-rls2cstm cmpy-prfl-mdlcs-lbl1 mr-3">
                                    Same as Headquarters Address
                                </label>
                                <input type="checkbox" id="cmpyprflchkbx2" className="cmpy-prfl-adadmn-rls1" checked={isCheckedchkbx2} onChange={(e) => setisCheckedchkbx2(e.target.checked)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Billing Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="bladdrsinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" value={billingAddress1} onChange={(e) => setbillingAddress1(e.target.value)} />
                                            <div className="flderrmsgdv" id="bladdrsinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="bladdrsinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" value={billingAddress2} onChange={(e) => setbillingAddress2(e.target.value)} />
                                            <div className="flderrmsgdv" id="bladdrsinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="bladdrsinpfld3" placeholder="City" autocomplete="off" maxlength="60" value={billingAddress3} onChange={(e) => setbillingAddress3(e.target.value)} />
                                            <div className="flderrmsgdv" id="bladdrsinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="bladdrsinpfld4" value={billingAddress4} onChange={(e) => setbillingAddress4(e.target.value)}>
                                                <option value='State/Province'>State/Province</option>
                                                <option value='AK'>AK</option>
                                                <option value='AL'>AL</option>
                                                <option value='AS'>AS</option>
                                                <option value='AR'>AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="bladdrsinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="bladdrsinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" value={billingAddress5} onChange={(e) => setbillingAddress5(e.target.value)} />
                                            <div className="flderrmsgdv" id="bladdrsinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose8}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn8}>
                    Add Data
                </Button>
            </Modal.Footer>
        </Modal>


        
        <Modal show={show82} onHide={handleClose82} className="cmpy-prfl-mdl2" >
            <Modal.Header closeButton>
                <Modal.Title>EDIT ADDRESSES</Modal.Title>
            </Modal.Header>
            <Modal.Body className="cmpy-prfl-mdl-bdy-ht">
                <div className="cmpy-prfl-mdl2-dv1">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Headquarters Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="hdaddrsedtinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" defaultValue='250 Brannan Street' />
                                            <div className="flderrmsgdv" id="hdaddrsedtinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="hdaddrsedtinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" defaultValue='' />
                                            <div className="flderrmsgdv" id="hdaddrsedtinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="hdaddrsedtinpfld3" placeholder="City" autocomplete="off" maxlength="60" defaultValue='San Francisco' />
                                            <div className="flderrmsgdv" id="hdaddrsedtinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="hdaddrsedtinpfld4">
                                                <option value='State/Province'>State/Province</option>
                                                <option value='AK' selected>AK</option>
                                                <option value='AL'>AL</option>
                                                <option value='AS'>AS</option>
                                                <option value='AR'>AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="hdaddrsedtinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="hdaddrsedtinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" defaultValue='94107' />
                                            <div className="flderrmsgdv" id="hdaddrsedtinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0 cmpy-prfl-csm-mdl-bdrtp cmpy-prfl-csm-mdl-bdrbtm mt-3 mb-3 pt-3 pb-3">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Legal Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="lgladdrsedtinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" defaultValue='250 Brannan Street' />
                                            <div className="flderrmsgdv" id="lgladdrsedtinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="lgladdrsedtinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" defaultValue='' />
                                            <div className="flderrmsgdv" id="lgladdrsedtinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="lgladdrsedtinpfld3" placeholder="City" autocomplete="off" maxlength="60" defaultValue='San Francisco' />
                                            <div className="flderrmsgdv" id="lgladdrsedtinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="lgladdrsedtinpfld4">
                                                <option value='State/Province'>State/Province</option>
                                                <option value='AK' selected>AK</option>
                                                <option value='AL'>AL</option>
                                                <option value='AS'>AS</option>
                                                <option value='AR'>AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="lgladdrsedtinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="lgladdrsedtinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" defaultValue='94107' />
                                            <div className="flderrmsgdv" id="lgladdrsedtinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="inputEmail3" className="col-sm-4 pl-0 col-xs-4 col-form-label tekila3">Billing Address</label>
                        <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0">
                            <div className="col-sm-12 col-xs-12 pr-0 pl-0 row m-0 cmpy-prfl-cspdd1">
                                <div className="col-sm-12 pl-0 pr-0 mb-2">
                                    <div className="col-sm-12 col-xs-12 row m-0 cmpy-prfl-cspdd1">
                                        <div className="col-sm-8 pl-0 pr-1 mb-2">
                                            <input type="text" className="tekila6" id="bladdrsedtinpfld1" placeholder="Street Address" autocomplete="off" maxlength="60" defaultValue='250 Brannan Street' />
                                            <div className="flderrmsgdv" id="bladdrsedtinpflderr1">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-4 pl-1 pr-0 mb-2">
                                            <input type="text" className="tekila6" id="bladdrsedtinpfld2" placeholder="Apt/Suite" autocomplete="off" maxlength="60" defaultValue='' />
                                            <div className="flderrmsgdv" id="bladdrsedtinpflderr2">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-6 pl-0 pr-1">
                                            <input type="text" className="tekila6" id="bladdrsedtinpfld3" placeholder="City" autocomplete="off" maxlength="60" defaultValue='San Francisco' />
                                            <div className="flderrmsgdv" id="bladdrsedtinpflderr3">This field should not be blank</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-1">
                                            <select className="tekila6 cmpy-prfl-adrs-a10" id="bladdrsedtinpfld4">
                                                <option value='State/Province'>State/Province</option>
                                                <option value='AK' selected>AK</option>
                                                <option value='AL'>AL</option>
                                                <option value='AS'>AS</option>
                                                <option value='AR'>AR</option>
                                            </select>
                                            <div className="flderrmsgdv" id="bladdrsedtinpflderr4">This field is required</div>
                                        </div>
                                        <div className="col-sm-3 pl-1 pr-0">
                                            <input type="text" className="tekila6" id="bladdrsedtinpfld5" placeholder="Postal Code" autocomplete="off" maxlength="60" defaultValue='' />
                                            <div className="flderrmsgdv" id="bladdrsedtinpflderr5">This field should not be blank</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary modalGrayBtn" onClick={handleClose82}>
                    Cancel
                </Button>
                <Button variant="primary modalRedBtn" id="mdlbtn1" onClick={mdlsvbtnn82}>
                    Add Data
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;

