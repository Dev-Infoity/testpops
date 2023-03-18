import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link, json } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const SurveyRunTeacherPage = () => {


    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal2(true);
    }

    const [showModal3, setShowModal3] = useState(false);
    const handleCloseModal3 = () => setShowModal3(false);
    const handleShowModal3 = () => {
        setShowModal3(true);
        
    }

    const [showModal4, setShowModal4] = useState(false);
    const handleCloseModal4 = () => setShowModal4(false);
    const handleShowModal4 = () => {
        setShowModal4(true);
        
    }


        
    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmsrvytmppdd" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-sm-12 mb-4">
                                        <div onClick={() => { handleShowModal2();}} className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-2">
                                        <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">Teacher Name</div>
                                            <div className="usrgrdsrvypgdnw">Subjects</div>
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-3 text-right">
                                        <div className="mt-15">
                                            <Link to="">
                                                <button className="modalGrayBtn btn1srvynwpgdsgn cstmmbtnn" onClick={() => { handleShowModal2();}}>Finish Later</button>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div id="errdv1" className="mt-5 col-sm-12">
                                <div className="col-sm-12">
                                    <div className="nodtadv1">
                                        <div>
                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                            <div className="nodtadv1txt">No Data Found</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tbldtaa1">
                            <div>
                                <div className="col-sm-12">
                                    <div className="mt-4">
                                        <div>
                                            <div className="col-sm-12 bgclrblu">
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12">
                                                        <h4 className="text-truncate srvynwdvh4 mb-0 mt-0">Teacher School Relationship- (Part 1) - Pulse 2</h4>
                                                        <div className="col-sm-12 pl-10px">
                                                            <div className="tbltddv2 cstmwdtbldv mb-2 mt--5px"> Teacher <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm pt-2 pb-2">
                                                            <div className="col-sm-12">
                                                                <h4 className="text-truncate ssrvydvhdng2 srvynwdvh4">Topics</h4>
                                                            </div>
                                                        </div>
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12">
                                                            <div className="col-sm-12 mt-3 pl-4">
                                                                    <h5 className="srvynwdvh5">1. On most days, how enthusiastic are the students about being at school? </h5>
                                                                     
                                                                    <div>
                                                                        <div>
                                                                            <div className="srvyndv1">
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5 crsr-auto">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">1</div>
                                                                                                        <div className="srvyndv9">Not at all enthusiastic</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5 crsr-auto">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">2</div>
                                                                                                        <div className="srvyndv9">Slightly enthusiastic</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5 crsr-auto">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">3</div>
                                                                                                        <div className="srvyndv9">Slightly enthusiastic</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5 crsr-auto">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">4</div>
                                                                                                        <div className="srvyndv9">Quite enthusiastic</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5 crsr-auto">
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">5</div>
                                                                                                        <div className="srvyndv9">Extremely enthusiastic</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                    <div className="srvyndv10 mt-4">
                                                                        <div className="srvyndv11">
                                                                            <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" maxLength="200" readOnly>No comment</textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            
                                                            <div className="dshbrd-dvv1 pl-0 pr-0 pt-4 pb-4">
                                                                <div className="text-right">
                                                                    <div>
                                                                        <button className="modalRedBtn mnwd-13p mr-4 cstmmbtnn" onClick={() => { handleShowModal3();}}>Submit Survey</button>
                                                                        <button className="modalGrayBtn mnwd-13p mr-4 cstmmbtnn" onClick={() => { handleShowModal4();}}>Submit Survey</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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


        <Modal show={showModal2} onHide={handleCloseModal2} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to leave this page? Any changes you have made will not be saved.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal2}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showModal3} onHide={handleCloseModal3} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to submit?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal3}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" id="mdlbtnn3n" style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr3" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt3">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showModal4} onHide={handleCloseModal4} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>To ensure that our survey results are as useful and informative as possible, we request that you answer all of the questions. Your participation is greatly appreciated.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal4}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        
    </div>
}

// export default Details;