import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import { useDropzone } from 'react-dropzone';
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


export const Staffpage = () => {


    const allstff = () => {
        $('#alstf').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').show();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').hide();
        $('#rjctstfff').hide();
    }

    const pendingaproval = () => {
        $('#pendgaprvl').addClass('active');
        $('#alstf').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').show();
        $('#invtdstfff').hide();
        $('#rjctstfff').hide();        
    }

    const staffinvtd = () => {
        $('#stfinvtd').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#alstf').removeClass('active');
        $('#stfrjct').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').show();
        $('#rjctstfff').hide();
        
    }

    const stffreject = () => {
        $('#stfrjct').addClass('active');
        $('#pendgaprvl').removeClass('active');
        $('#stfinvtd').removeClass('active');
        $('#alstf').removeClass('active');

        $('#alstfff').hide();
        $('#psndaprvlstfff').hide();
        $('#invtdstfff').hide();
        $('#rjctstfff').show();
        
    }

    const chckerslctallbx = () => {

        if($('#tblcstslctallstff1').is(":checked")) {
            $('#actnstff1').removeClass('dis');
        } else {
            $('#actnstff1').addClass('dis');
        }
    }



    const chckerslctbx = (name) => {
        if($('.chckbxstffpg').is(":checked")) {         
            $('#actnstff1').removeClass('dis');                                 
        } else {         
            $('#actnstff1').addClass('dis');     
        }           
    }
   
    const chckerslctallbx2 = () => {
        if($('#tblcstslctallstff2').is(":checked")) {
            $('#actnstff2').removeClass('dis');
        } else {
            $('#actnstff2').addClass('dis');
        }
    }

    const chckerslctbx2 = () => {

        if($('.chckbxstffpg2').is(":checked")) {
            $('#actnstff2').removeClass('dis');
        } else {
            $('#actnstff2').addClass('dis');
        }
    }

    const chckerslctallbx3 = () => {

        if($('#tblcstslctallstff3').is(":checked")) {
            $('#actnstff3').removeClass('dis');
        } else {
            $('#actnstff3').addClass('dis');
        }
    }

    const chckerslctbx3 = () => {

        if($('.chckbxstffpg3').is(":checked")) {
            $('#actnstff3').removeClass('dis');
        } else {
            $('#actnstff3').addClass('dis');
        }
    }

    const chckerslctallbx4 = () => {

        if($('#tblcstslctallstff4').is(":checked")) {
            $('#actnstff4').removeClass('dis');
        } else {
            $('#actnstff4').addClass('dis');
        }
    }

    const chckerslctbx4 = () => {

        if($('.chckbxstffpg4').is(":checked")) {
            $('#actnstff4').removeClass('dis');
        } else {
            $('#actnstff4').addClass('dis');
        }
    }
    

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



    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="cs-pdng cstmmtpgg">
                <div className="wdth-ipdwvw-cs wdth-ipdwvw-cs22">
                    <div className="wdth-ipdwvw-csdvd wdth-ipdwvw-csdvd22">
                        <h1 className="kmcs_h1">Explore New &amp; Trending Design Jobs</h1>
                        <p className="kmcs_p mt-3">
                        Build a solid foundation for your UX/UI design knowledge and get a crash course into the inner workings of the design world. Whether you’re just getting started or have years of experience, ensuring that you correctly understand key concepts.
                        </p>
                    </div>
                </div>


                <div>
                    <div className="wd-84p mt-5">
                        <div className="col-sm-12 p-0">
                           

                            <div className="mt-10px" id="survytbl">
                                <div>
                                    <div className="col-sm-12 cstsbx1">
                                        <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0 mb--10px">
                                            <div className="col-sm-10 pl-0">
                                                <ul className="dshbrd-dvv1-ul">
                                                    <li className="dshbrd-dvv1-ul-li">
                                                        <a onClick={allstff} id="alstf" className="dshbrd-dvv1-ul-li-a active">All Staff (10)</a>
                                                    </li>
                                                    <li className="dshbrd-dvv1-ul-li">
                                                        <a onClick={pendingaproval} id="pendgaprvl" className="dshbrd-dvv1-ul-li-a">Pending Approval (20)</a>
                                                    </li>
                                                    <li className="dshbrd-dvv1-ul-li">
                                                        <a onClick={stffreject} id="stfrjct" className="dshbrd-dvv1-ul-li-a">Rejected (30)</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2 text-right pr-0">
                                                <Dropdown>
                                                    <Dropdown.Toggle className="adtchrbtn">
                                                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                        <div className="tbl-dropdown-item dropdown-item crsr-dis">Add teacher</div>
                                                        <div className="tbl-dropdown-item dropdown-item">Bulk Import</div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="alstfff" style={{display: 'block'}}>
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
                                        
                                        <table className="table cstmbrdrdvcs" id="tbl1">
                                            <CheckboxGroup  >
                                                <thead>
                                                <tr>
                                                    <th className="brdr-n csstftblthcs">
                                                        <div>
                                                            <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff1" className="alstfclsnmslctall1" title="Select all" onClick = {() => { chckerslctallbx(); }}  />
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n">                                            
                                                        <div className="cstmmtactnbtn">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="tblcstslctbtn dis cstmrdclrrr" id="actnstff1">
                                                                <span>Action</span>
                                                                <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item">Delete</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n text-right pr-4">
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="cstmpght2">

                                                    <tr>
                                                        <td className="pl-26px">
                                                            <div>
                                                                <Checkbox type="checkbox" id="tblcstslctstff1" title="Select" className="slct1id chckbxstffpg" onClick={() => { chckerslctbx(); }} />
                                                            </div>
                                                        </td>
                                                        <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 1</div></td>
                                                        <td className="text-right pr-4">
                                                            <Dropdown drop="down-centered">
                                                                <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = `mailto:(email@email.com)`}>Send Email</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }}>Delete</div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-26px">
                                                            <div>
                                                                <Checkbox type="checkbox" id="tblcstslctstff1" title="Select" className="slct1id chckbxstffpg" onClick={() => { chckerslctbx(); }} />
                                                            </div>
                                                        </td>
                                                        <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 2</div></td>
                                                        <td className="text-right pr-4">
                                                            <Dropdown drop="down-centered">
                                                                <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = `mailto:(email@email.com)`}>Send Email</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }} >Delete</div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-26px">
                                                            <div>
                                                                <Checkbox type="checkbox" id="tblcstslctstff1" title="Select" className="slct1id chckbxstffpg" onClick={() => { chckerslctbx(); }} />
                                                            </div>
                                                        </td>
                                                        <td className="cstmtblwd80pp"><div className="text-truncate" onClick={()=>{handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 3</div></td>
                                                        <td className="text-right pr-4">
                                                            <Dropdown drop="down-centered">
                                                                <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = `mailto:(email@email.com)`}>Send Email</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }} >Delete</div>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-26px">
                                                            <div>
                                                                <Checkbox type="checkbox" id="tblcstslctstff1" title="Select" className="slct1id chckbxstffpg" onClick={() => { chckerslctbx(); }} />
                                                            </div>
                                                        </td>
                                                        <td className="cstmtblwd80pp"><div className="text-truncate" onClick={()=>{handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 4</div></td>
                                                        <td className="text-right pr-4">
                                                            <Dropdown drop="down-centered">
                                                                <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                    <a className="cstmbtndrpdwnpddd">
                                                                        <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                    </a>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = `mailto:(email@email.com)`}>Send Email</div>
                                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }} >Delete</div>
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

                                <div id="psndaprvlstfff" style={{display: 'none'}}>
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

                                        <table className="table cstmbrdrdvcs" id="tbl2">
                                            <CheckboxGroup  >
                                                <thead>
                                            
                                                <tr>
                                                    <th className="brdr-n csstftblthcs">
                                                        <div>
                                                            <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff2" title="Select all" onClick={chckerslctallbx2} />
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n">                                            
                                                        <div className="cstmmtactnbtn">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="tblcstslctbtn dis cstmrdclrrr" id="actnstff2">
                                                                <span>Action</span>
                                                                <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={handleShow6}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={handleShow5}>Reject</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n text-right pr-4">
                                                      
                                                    </th>
                                                </tr>

                                                
                                                </thead>
                                                <tbody className="cstmpght2">

                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff1" title="Select" value='1' />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{ handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 1</div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow6(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow5(); }}>Reject</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff1" title="Select" value='1' />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{ handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 2</div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow6(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow5(); }}>Reject</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff1" title="Select" value='1' />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{ handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 3</div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow6(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow5(); }}>Reject</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg2" onClick={chckerslctbx2} id="tblcstslctstff1" title="Select" value='1' />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{ handleShow2(); }}><img src="../Images/user_green.png" className="tblusricnimg" /> Staff name 4</div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={()=>{handleShow2(); }}>View Details</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow6(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => {handleShow5(); }}>Reject</div>
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


                                <div id="rjctstfff" style={{display: 'none'}}>
                                    <div className="row">
                                        <div className="col-sm-12" id="stftabl">
                                        <div id="errdv4">
                                            <div className="nodtadv1 brdr-top-none">
                                                <div>
                                                    <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                    <div className="nodtadv1txt">No Data Found</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <table className="table cstmbrdrdvcs" id="tbl4">                    
                                            <CheckboxGroup  >
                                                <thead>
                                                <tr>
                                                    <th className="brdr-n csstftblthcs">
                                                        <div>
                                                            <AllCheckerCheckbox type="checkbox" id="tblcstslctallstff4" title="Select all" onClick={chckerslctallbx4} />
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n">                                            
                                                        <div className="cstmmtactnbtn">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="tblcstslctbtn dis cstmrdclrrr" id="actnstff4">
                                                                <span>Action</span>
                                                                <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={handleShow4}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Delete</div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        </div>
                                                    </th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n"></th>
                                                    <th className="brdr-n text-right pr-4"></th>
                                                </tr>
                                                </thead>
                                                <tbody className="cstmpght2 tblrspndpwntbdy">
                                            
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} value='1' id="tblcstslctstff1" title="Select" />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_brown.png" className="tblusricnimg" /> Staff Name 1 </div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow4(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }}>Delete</div>
                                                                
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} value='1' id="tblcstslctstff1" title="Select" />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_brown.png" className="tblusricnimg" /> Staff Name 2 </div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow4(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }}>Delete</div>
                                                                
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} value='1' id="tblcstslctstff1" title="Select" />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_brown.png" className="tblusricnimg" /> Staff Name 3 </div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow4(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }}>Delete</div>
                                                                
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="pl-26px">
                                                        <div>
                                                            <Checkbox type="checkbox" className="slct1id chckbxstffpg4" onClick={chckerslctbx4} value='1' id="tblcstslctstff1" title="Select" />
                                                        </div>
                                                    </td>
                                                    <td className="cstmtblwd80pp"><div className="text-truncate" title onClick={()=>{handleShow2(); }}><img src="../Images/user_brown.png" className="tblusricnimg" /> Staff Name 4 </div></td>
                                                    <td className="text-right pr-4">
                                                        <Dropdown drop="down-centered">
                                                            <Dropdown.Toggle className="tbl-drpbtnndw p-0">
                                                                <a className="cstmbtndrpdwnpddd">
                                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                                </a>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu  className="tbl-drpdwnmnu">
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow4(); }}>Approve</div>
                                                                <div className="tbl-dropdown-item dropdown-item" onClick={() => { handleShow(); }}>Delete</div>
                                                                
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

        <Modal show={show} onHide={handleClose} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>

        

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv" closeButton>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 ht-250px">
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2">Staff Name</p>
                            <div className="infomdvmdl3 row m-0 col-sm-12 p-0">
                                <div className="col-sm-4 pl-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Designation
                                </div>
                                <div className="infomdvmdl2dvdr m-0 col-sm-1 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title='Email'>
                                    <i className="fa fa-envelope mr-7px"></i>
                                Email
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="infomdvmdl3 col-sm-12 mt-4">
                            <h3 className="infomdvmdl3-h3">Grade Name</h3>
                            <div readOnly className="infomdvmdl3-txtara">Subject Name </div>
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
                <p>Are you sure you want to put this back?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose4}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose4} style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show5} onHide={handleClose5} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to reject?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose5}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose5} style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show6} onHide={handleClose6} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to confirm?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose6}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" onClick={handleClose6} style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>


        <Modal show={show7} onHide={handleClose7} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Resent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Mail is re-sent on <b>test@gmail.com</b>.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleClose7}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>




    </div>
}

// export default Details;