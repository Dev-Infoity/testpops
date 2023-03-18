import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyPage = () => {
 
    const mysurvyy = (e) => {
        $('#mysrvy').addClass('active');
        $('#pndingsuvry').removeClass('active');
        $('#mmysrvv').show();
        $('#pnndnggsrvv').hide();
      }

      const pndngsrvyy = (e) => {
        $('#mysrvy').removeClass('active');
        $('#pndingsuvry').addClass('active');
        $('#mmysrvv').hide();
        $('#pnndnggsrvv').show();
      }

   

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
          setShow(true);
      }

      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => {
          setShow2(true);
      }


    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />

        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12">
                            <h1 className="kmcs_h1 bluclr">Overview</h1>
                            <p className="kmcs_p mt-5 bluclr mt-0 mb-4">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                <div className="col-sm-8 pl-0">
                                    <ul className="dshbrd-dvv1-ul">
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="mysrvy" className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0" onClick={mysurvyy}>All Surveys (10)</a>
                                        </li>
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a dshbrd-dvv1-ul-li-a-mbvw mbvw-mr0" onClick={pndngsrvyy}>Expired (5)</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                    <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <div id="errdv1">
                                                    <div className="nodtadv1 brdr-top-none">
                                                        <div>
                                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                            <div className="nodtadv1txt">No Data Found</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box tbldtaa1 brdr-none">
                                                    <thead className="cstmsrtbthdbrdr">
                                                    <tr><th>Surveys (10 / 15)</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody className="cstmmxhtbdytbb cstmsrtbtbdybrdr">
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 1
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `0%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Not Started</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalRedBtn cstmmbtnn">Start</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 2
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `50%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Inprogress</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 3
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `100%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv" title>
                                                                            Survey Name 4
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `0%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Upcoming</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn upcmngdsblbtnnn">Upcoming</button>
                                                                </Link>
                                                            </td>
                                                        </tr>                                                       
                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="pnndnggsrvv" style={{display: 'none'}}>

                        <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <div id="errdv2">
                                                    <div className="nodtadv1 brdr-top-none">
                                                        <div>
                                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                            <div className="nodtadv1txt">No Data Found</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box tbldtaa2 brdr-none">
                                                    <thead className="cstmsrtbthdbrdr">
                                                    <tr><th>Surveys (5 / 10)</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody className="cstmmxhtbdytbb cstmsrtbtbdybrdr">
                                                    
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 1
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `0%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Not Started</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn">Expired</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 1
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `100%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link>
                                                                    <div className="col-sm-12 row p-0 m-0">
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv crsrpntr" title>
                                                                            Survey Name 1
                                                                        </div>                                                                                
                                                                        <Link>
                                                                        <i className=" fa fa-eye cstmfaicneyeclr" title="View Survey Template" ></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher </div>
                                                                </Link>
                                                            </td>
                                                            <td className="cstmtblltbwddwd">
                                                                <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: `50%`}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Inprogress</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link>
                                                                    <button className="modalGrayBtn cstmmbtnn">View</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <br />
                    </div>
                </div>
            </div>

        </div>

        
        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teachers</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm cstmhtscrlmdl">
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title>Teacher Name</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">Not Started</span>
                                            <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title>Teacher Name</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">Inprogress</span>
                                            <img className="ml-4" src="../Images/greycircle-1.png" width="22" alt="Image" />
                                            </div>
                                        </div>
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d wd-70p" title>Teacher Name</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">Completed</span>
                                            <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                        </div>
                                    </div>
                
            </Modal.Body>



            
        </Modal>

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">School</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                    <div className="col-sm-6 pl-0">
                                        <div className="row m-0">
                                            <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                                            <span className="text-truncate mdldvdv12d cstmwdmdl" title>School Name</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <span className="text-truncate mdldvdv12d">Not Started</span>
                                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                                    </div>
                                </div>
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/school-building.png" width="24" className="mr-3 mt--5px" alt="School Image" />
                                                <span className="text-truncate mdldvdv12d cstmwdmdl" title>School Name</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">Inprogress</span>
                                            <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                        </div>
                                    </div>
                                    <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                                        <div className="col-sm-6 pl-0">
                                            <div className="row m-0">
                                                <img src="../Images/school-building.png" width="24" className="mr-3" alt="User Profile" />
                                                <span className="text-truncate mdldvdv12d cstmwdmdl" title>School Name</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <span className="text-truncate mdldvdv12d">Completed</span>
                                            <img className="ml-4" src="../Images/grey circle-1.png" width="22" alt="Image" />
                                        </div>
                                    </div>
                
            </Modal.Body>
        </Modal>


    </div>
}

// export default Details;