import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyStudentToSchoolPage = () => {

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

      const [selectedclass, setselectedclass] = useState();

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const slctdrpdwnoptions = [
        { label: 'All Classes', value: 'All Classes'},
        { label: 'Class 6th - A', value: 'Class 6th - A'},
      ];

      
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
      
      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => {
          setShow3(true);
      }
          

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
 
         <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12">
                        <div className="col-sm-12 mb-4 cstmtab-pane tab-pane">
                            <NavLink className="srvylnkbtnnn">
                                <i className="fa fa-chevron-left mr-2"></i>
                                <span>All Surveys</span>
                            </NavLink>
                        </div>
                    </div>
                    <div id="errdv1" className="col-sm-12">
                        <div className="nodtadv1 nobrdrnobg">
                            <div>
                                <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                <div className="nodtadv1txt">No Data Found</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active pt-0 tbldtaa1" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                        <div className="col-sm-12 row ml-0 mr-0 mb-4 p-0">
                            <div className="col-sm-3">
                                <Select options={slctdrpdwnoptions} defaultValue={{ label: "All Classes", value: 0 }} value={slctdrpdwnoptions.find(obj => obj.value === selectedclass)} />
                            </div>

                            { /*{selectedclass} && */ <div style={{ display: 'none' }}>
                                <div id="slctcdclasval">{selectedclass}</div>
                            </div>}
                        
                            <div className="col-sm-5"></div>
                            <div className="col-sm-4 text-right">
                                <a><button className="modalGrayBtn cstmmbtnn mr-3" style={{minWidth: '120px'}}> Preview Survey </button></a>
                                <button className="modalRedBtn cstmmbtnn mr-1" style={{minWidth: '90px'}} onClick={()=>{handleShow3(); }}> View Result </button>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-12 bgclrblu">
                                <div className="dshbrd-dvv1 col-sm-12 row ml-0 mr-0">
                                    <div className="col-sm-9">
                                        <div className="nwsrvdvdvd1">Survey Name - Student School Relationship - Pulse 2</div>
                                        <div className="nwsrvdvdvd2"> Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        <input className="nwsrvdvdvi1" placeholder="Search Student..." type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="mmysrvv">

                        <div className="cstm-mrgn cstmbracrdnn" id="accordion">
                                
                                <div>
                                    <div className="panel box no-border mb-0">
                                        <div id="c_2020" className="in collapse show">
                                            <div className="box-body row m-0">
                                                <div className="table-responsive ht-auto">
                                                
                                                    <div className="text-center cstmnodtatbldvv">
                                                        <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                                        <div className="nodtadv1txt">No Data Found</div>
                                                    </div>
                                                
                                                        
                                                        
                                                            <table id="nwsrvytbblll" className="table brdr-none cstmtable2 v-middle p-0 m-0 box">
                                                                <thead>
                                                                <tr className="bglytbluclr cstmsrtbthdbrdr">
                                                                    <th className="pl-24px tblsccshdng">6th-A (8 / 11 )</th>
                                                                    <th className="tblsccshdng">Period</th>
                                                                    <th className="tblsccshdng pl-0">Response Progress</th>
                                                                    <th />
                                                                </tr>
                                                                </thead>
                                                                <tbody className="ht-cstmtbdysvy cstmsrtbtbdybrdr cstmmxhtbdytbb2">

                                                                    <tr>
                                                                        <td>
                                                                            <div className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow();}} title>
                                                                                <img src="../Images/user_green.png" className="nwsrvdvdvdimg mr-3" /> 
                                                                                <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                                                <span className="blu-clr">Vedant Patel</span> 
                                                                            </div>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `0%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{handleShow2();}} >
                                                                                    <span className="tblsvprgstxt">Not Started</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="modalGrayBtn cstmmbtnn" onClick={()=>{handleShow();}} >View</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="tbltddv1 txttrnsfrm-cpl text-truncate cstmwdtbldv crsr-pntr" onClick={()=>{handleShow();}} title>
                                                                                <img src="../Images/user_green.png" className="nwsrvdvdvdimg mr-3" /> 
                                                                                <span className="blu-clr mr-2" title="Roll Number">100 &nbsp;  - </span>
                                                                                <span className="blu-clr">Vedant Patel</span> 
                                                                            </div>
                                                                        </td>
                                                                        <td className="cstmtblltbwddwd">
                                                                            <span className="tbltddv3">Feb 20, 2023 - Apr 20, 2023</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="srvytblprgbrsvdv">
                                                                                <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                    <div className="progress-bar primary" style={{width: `100%`}}></div>
                                                                                </div>
                                                                                <div className="text-left tbltddv4" onClick={()=>{handleShow2();}} >
                                                                                    <span className="tblsvprgstxt">Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="modalGrayBtn cstmmbtnn" onClick={()=>{handleShow();}} >View</button>
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
            
            <Modal.Header className="cstmmdlinfodv" closeButton></Modal.Header>

            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div>
                    <div className="infomdvmdl1 col-sm-12 row m-0">
                        <div className="col-sm-2">
                            <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                        </div>
                        <div className="col-sm-10">
                            <p className="infomdvmdl2">Student Name</p>
                            <div className="infomdvmdl3 col-sm-12 p-0 row m-0">
                                <div className="col-sm-4 pl-0">
                                    <i className="fa fa-user mr-7px"></i>
                                    Student
                                </div>
                                <div className="infomdvmdl2dvdr col-sm-1 m-0 p-0">|</div>
                                <div className="col-sm-6 p-0 text-truncate" title>
                                    <i className="fa fa-envelope mr-7px"></i>
                                    Email
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="infomdvmdl3 col-sm-12 mt-10px">
                        <h3 className="infomdvmdl3-h3">Class Name</h3>
                        <div readOnly className="infomdvmdl3-txtara"> Subjects </div>
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
                                        <span className="text-truncate mdldvdv12d cstmwdmdl" title> School Name </span>
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
                                        <span className="text-truncate mdldvdv12d cstmwdmdl" title> School Name </span>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <span className="text-truncate mdldvdv12d">Completed</span>
                                    <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="25" alt="Image" />
                                </div>
                            </div>
            </Modal.Body>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal" >
            <Modal.Header closeButton>
                <Modal.Title>Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="cstmmdlptx">Unfortunately, results cannot be generated at this time as a sufficient number of surveys have not been completed by students.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
                <Button variant="primary modalGrayBtn" onClick={handleClose3}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>


    </div>
}

// export default Details;