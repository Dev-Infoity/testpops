import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Content/Content/dashboard.css';
import '../Content/Content/tblcss.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";


export const UserClass = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);


    const allstff222 = () => {
        $('#alstf222').addClass('active');
        $('#pendgaprvl222').removeClass('active');
        $('#stfinvtd222').removeClass('active');
        $('#stfrjct222').removeClass('active');

        $('#alstfff222').show();
        $('#psndaprvlstfff222').hide();
        $('#invtdstfff222').hide();
        $('#rjctstfff222').hide();
    }

    const pendingaproval222 = () => {
        $('#pendgaprvl222').addClass('active');
        $('#alstf222').removeClass('active');
        $('#stfinvtd222').removeClass('active');
        $('#stfrjct222').removeClass('active');

        $('#alstfff222').hide();
        $('#psndaprvlstfff222').show();
        $('#invtdstfff222').hide();
        $('#rjctstfff222').hide();        
    }

    const staffinvtd222 = () => {
        $('#stfinvtd222').addClass('active');
        $('#pendgaprvl222').removeClass('active');
        $('#alstf222').removeClass('active');
        $('#stfrjct222').removeClass('active');

        $('#alstfff222').hide();
        $('#psndaprvlstfff222').hide();
        $('#invtdstfff222').show();
        $('#rjctstfff222').hide();
        
    }

    const stffreject222 = () => {
        $('#stfrjct222').addClass('active');
        $('#pendgaprvl222').removeClass('active');
        $('#stfinvtd222').removeClass('active');
        $('#alstf222').removeClass('active');

        $('#alstfff222').hide();
        $('#psndaprvlstfff222').hide();
        $('#invtdstfff222').hide();
        $('#rjctstfff222').show();
        
    }
   

    const chckerslctallbx222 = () => {

        if($('#tblcstslctallstff1222').is(":checked")) {
            $('#actnstff1222').removeClass('dis');
        } else {
            $('#actnstff1222').addClass('dis');
        }
    }

    const chckerslctbx222 = () => {

        if($('.chckbxstffpg222').is(":checked")) {
            $('#actnstff1222').removeClass('dis');
        } else {
            $('#actnstff1222').addClass('dis');
        }
    }

    const chckerslctallbx2222 = () => {

        if($('#tblcstslctallstff2222').is(":checked")) {
            $('#actnstff2222').removeClass('dis');
        } else {
            $('#actnstff2222').addClass('dis');
        }
    }

    const chckerslctbx2222 = () => {

        if($('.chckbxstffpg2222').is(":checked")) {
            $('#actnstff2222').removeClass('dis');
        } else {
            $('#actnstff2222').addClass('dis');
        }
    }

    const chckerslctallbx3222 = () => {

        if($('#tblcstslctallstff3222').is(":checked")) {
            $('#actnstff3222').removeClass('dis');
        } else {
            $('#actnstff3222').addClass('dis');
        }
    }

    const chckerslctbx3222 = () => {

        if($('.chckbxstffpg3222').is(":checked")) {
            $('#actnstff3222').removeClass('dis');
        } else {
            $('#actnstff3222').addClass('dis');
        }
    }

    const chckerslctallbx4222 = () => {

        if($('#tblcstslctallstff4222').is(":checked")) {
            $('#actnstff4222').removeClass('dis');
        } else {
            $('#actnstff4222').addClass('dis');
        }
    }

    const chckerslctbx4222 = () => {

        if($('.chckbxstffpg4222').is(":checked")) {
            $('#actnstff4222').removeClass('dis');
        } else {
            $('#actnstff4222').addClass('dis');
        }
    }

      const data01 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
    ];
    


        const [hasDropdown, setHasDropdown] = useState(false);
    
        const adclstodvonclkdrpdwnbtn = () => {
            //alert('works');
            setHasDropdown(!hasDropdown);
        }

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        
        <div className="be-wrapper be-login innerwrapper" id="login">
          
            <div className="cs-pdng" id='schclsloader'>
                <div className="mt-3" style={{width: '85%', margin: '0 auto'}}>
                    <div>
                        <div className="col-sm-12 mb-4 p-0">
                            <NavLink className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>Back to classroom</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="pgnodtadv1 pt-1">
                    <div>
                        <img className="pgnodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="160" alt="Error Image" />
                        <div className="pgnodtadv1txt">No Data Found</div>
                    </div>
                </div>
            </div>

            <div className="cs-pdng" id='schclsdata'>

                <div className="mt-3" style={{width: '85%', margin: '0 auto'}}>
                    <div>
                        <div className="col-sm-12 mb-5 p-0">
                            <NavLink className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>Back to classroom</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="wdth-ipdwvw-cs mbvw-imgwd" style={{backgroundImage: `url(https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637617/Dashboard/New%20courses%20images/final_images/ux_ui_design_foundations.svg)`}}>
                    <div className="wdth-ipdwvw-csdvd mnht-215px">
                        <div className="srvydvvddv1">
                            <div className="srvydvvddv2">
                                <div>
                                    <h1 className="clshdngh1 text-truncate pr-0" title>Class 6th</h1>
                                </div>
                                <div className="srvydvvddv4">
                                    <div className="clsrmdv2-2-dv1-a1 text-truncate">
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                        <span title> Section A</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-10 pl-2">

                        {/* Teachers */}

                        <div id="survytbl"> 
                            <div>
                                <div className="col-sm-12 p-0 mbvw-mt3">
                                    <p className="kmcs_p mt-5 bluclr mt-5">Teacher's</p>
                                </div>
                            </div>

                            <div className="mt-10px">
                                <div>
                                    <div className="col-sm-12 cstsbx1">
                                        <div className="dshbrd-dvv1 row ml-0 mr-0 mt-0 pb-0 mb--10px">
                                            <div className="col-sm-10 pl-0">
                                                <ul className="dshbrd-dvv1-ul">
                                                    <li className="dshbrd-dvv1-ul-li">
                                                        <a className="dshbrd-dvv1-ul-li-a active">All Teachers (10)</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div className="col-sm-2 text-right pr-0">
                                                <Dropdown>
                                                    <Dropdown.Toggle className="adtchrbtn">
                                                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                        <div className="tbl-dropdown-item dropdown-item crsr-dis">Add teacher</div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div style={{display: 'block'}}>
                                    <div className="row">
                                        <div className="col-sm-12" id="stftabl">
                                        <div id="errdv1">
                                            <div className="nodtadv1 brdr-top-none">
                                                <div>
                                                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                    <div className="nodtadv1txt">No Data Found</div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table brdr-none mb-0 ertbl11" id="cstmtblfrschl">
                                                
                                                <tbody className="cstmtbdyy schclstbtbdy cstmpght3 cstmsrtbtbdybrdr">
                                                        <tr>
                                                            <td></td>
                                                            <td className="wd-70p pl-5px"><div title onClick={()=>{handleShow3(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Teacher Name 1 </div></td>
                                                            <td className="text-right">
                                                            </td>
                                                            <td className="text-right pr-4">
                                                                <Dropdown drop="down-centered">
                                                                    <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                        <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                        </a>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow3(); }}>View Details</div>
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow4(); }}>Make subject teacher</div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td></td>
                                                            <td className="wd-70p pl-5px"><div title onClick={()=>{handleShow3(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Teacher Name 2 </div></td>
                                                            <td className="text-right">
                                                            </td>
                                                            <td className="text-right pr-4">
                                                                <Dropdown drop="down-centered">
                                                                    <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                        <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                        </a>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow3(); }}>View Details</div>
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow4(); }}>Make subject teacher</div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td></td>
                                                            <td className="wd-70p pl-5px"><div title onClick={()=>{handleShow3(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Teacher Name 3 </div></td>
                                                            <td className="text-right">
                                                            </td>
                                                            <td className="text-right pr-4">
                                                                <Dropdown drop="down-centered">
                                                                    <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                        <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                        </a>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow3(); }}>View Details</div>
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow4(); }}>Make subject teacher</div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td></td>
                                                            <td className="wd-70p pl-5px"><div title onClick={()=>{handleShow3(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Teacher Name 4 </div></td>
                                                            <td className="text-right">
                                                            </td>
                                                            <td className="text-right pr-4">
                                                                <Dropdown drop="down-centered">
                                                                    <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                        <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                            <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                        </a>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow3(); }}>View Details</div>
                                                                        <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow4(); }}>Make subject teacher</div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                
                                                </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        {/* Students */}

                        <div id="survytbl"> 
                            <div>
                                <div className="col-sm-12 p-0 mbvw-mt3">
                                    <p className="kmcs_p mt-5 bluclr mt-5">Student's</p>
                                </div>
                            </div>

                            <div className="mt-10px">
                                <div>
                                    <div className="col-sm-12 cstsbx1">
                                        <div className="dshbrd-dvv1 row ml-0 mr-0 mt-0 pb-0 mb--10px">
                                            <div className="col-sm-10 pl-0">
                                                <ul className="dshbrd-dvv1-ul">
                                                    <li className="dshbrd-dvv1-ul-li">
                                                        <a onClick={allstff222} id="alstf222" className="dshbrd-dvv1-ul-li-a active">All Students (10)</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2 text-right pr-0">
                                                <Dropdown>
                                                    <Dropdown.Toggle className="adtchrbtn">
                                                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                        <div className="tbl-dropdown-item dropdown-item crsr-dis">Add student</div>
                                                        <div className="tbl-dropdown-item dropdown-item crsr-dis">Bulk Import</div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="alstfff222" style={{display: 'block'}}>
                                    <div className="row">
                                        <div className="col-sm-12" id="stftabl">
                                        <div id="errdv2">
                                            <div className="nodtadv1 brdr-top-none">
                                                <div>
                                                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                    <div className="nodtadv1txt">No Data Found</div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table brdr-none mb-0 ertbl12" id="cstmtblfrschl">
                                            <CheckboxGroup>
                                                
                                                <tbody className="cstmtbdyy cstmpght3 cstmsrtbtbdybrdr">

                                                <tr>
                                                    <td></td>
                                                    <td className="wd-70p pl-5px">
                                                        <div title onClick={()=>{handleShow2(); }}>
                                                            <img src="../Images/user-blue-imgg.png" className="tblusricnimg mr-3" /> 
                                                            <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                            <span className="blu-clr">Student Name 1 </span>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td></td>
                                                    <td className="wd-70p pl-5px">
                                                        <div title onClick={()=>{handleShow2(); }}>
                                                            <img src="../Images/user-blue-imgg.png" className="tblusricnimg mr-3" /> 
                                                            <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                            <span className="blu-clr">Student Name 2 </span>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td></td>
                                                    <td className="wd-70p pl-5px">
                                                        <div title onClick={()=>{handleShow2(); }}>
                                                            <img src="../Images/user-blue-imgg.png" className="tblusricnimg mr-3" /> 
                                                            <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                            <span className="blu-clr">Student Name 3 </span>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td></td>
                                                    <td className="wd-70p pl-5px">
                                                        <div title onClick={()=>{handleShow2(); }}>
                                                            <img src="../Images/user-blue-imgg.png" className="tblusricnimg mr-3" /> 
                                                            <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                            <span className="blu-clr">Student Name 4 </span>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a onClick={adclstodvonclkdrpdwnbtn} className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </CheckboxGroup>
                                        </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>            
        </div>
        

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 srvycstmhtmdlbd">
                 
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user-blue-imgg.png" className="infomdvmdl1-img" alt="User Profile" style={{borderRadius: '50%'}} />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2" title>Student Name</p>
                            <div className="infomdvmdl3 row m-0 col-sm-12 p-0">
                                <div className="col-sm-4 p-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Student
                                </div>
                                <div className="infomdvmdl2dvdr m-0 col-sm-1 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title>
                                    <i className="fa fa-envelope mr-7px"></i>
                                    Email
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infomdvmdl3 col-sm-12 mt-4">
                        <h3 className="infomdvmdl3-h3">Class Name</h3>
                        <div readOnly className="infomdvmdl3-txtara"> Subjects </div>
                    </div>
                </div>
                
            </Modal.Body>
        </Modal>


        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 srvycstmhtmdlbd">
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2" title>Teacher Name</p>
                            <div className="infomdvmdl3 row m-0 col-sm-12 p-0">
                                <div className="col-sm-4 p-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Teacher
                                </div>
                                <div className="infomdvmdl2dvdr m-0 col-sm-1 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title>
                                    <i className="fa fa-envelope mr-7px"></i>
                                    Email
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <div className="infomdvmdl3 col-sm-12 mt-4">
                            <h3 className="infomdvmdl3-h3">Class Name</h3>
                            <div readOnly className="infomdvmdl3-txtara"> Subjects </div>
                        </div>
                    </div>
                          
                </div>

            </Modal.Body>
        </Modal>

        <Modal show={show4} onHide={handleClose4} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to change?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose4}>
                Close
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose4} style={{minWidth: '80px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>



    </div>
}

// export default Details;