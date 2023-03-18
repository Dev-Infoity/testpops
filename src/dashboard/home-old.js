import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import { useDropzone } from 'react-dropzone';
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Content/Content/dashboard.css';
import '../Content/Content/home-old.css';
import { Headerschclssrm } from '../headerschclassroom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";


export const Home_Old = () => {


    return <div>
        <Headerschclssrm />
        
        <div className="content-main mt-4p" id="login" style={{backgroundColor: 'rgb(243, 246, 250) !important'}}>
            <div className="padding" style={{paddingBottom: '10%'}}>
                <div style={{maxWidth: 1200, margin: '12px auto 0', paddingLeft: 16, paddingRight: 16}}>
                <div style={{width: '16.6667%', padding: '0 16px'}} />
                <div style={{width: '86.6667%', padding: '0 16px 16px 16px', margin: '0 auto'}}>
                    <div>
                    <div className="dsh-ask-dv1">
                        <div>
                        <header className="dsh-ask-hdr">
                            <h3 className="dsh-ask-hd3 mb-20px">Hi, There </h3>
                        </header>
                        <div className="dsh-ask-rcnt-tl-dv" onclick="togetstarted('Level 1',189,'Design Accessibility',4);" style={{cursor: 'pointer'}}>
                            <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1643287544/Dashboard/08_thdjws.png" className="dsh-ask-rcnt-tl-dv-img" alt />
                            <div className="dsh-ask-rcnt-tl-dv2">Design Accessibility (Level 1)&nbsp; - 4 of 5<span style={{paddingLeft: 5}}> Tasks Remaining</span><span className="text-sm" /></div>
                            <div style={{width: 'auto', marginLeft: 'auto'}}>
                            <a onclick="togetstarted('Level 1',189,'Design Accessibility',4);" className="dsh-ask-rcnt-tl-a">
                                <span>Resume Course</span>
                                <img src="https://res.cloudinary.com/infoi/image/upload/v1643084113/Dashboard/arrow_right_sm_053249e7_wfofhc.svg" className="dsh-ask-rcnt-tl-a-img" />
                            </a>
                            </div>
                        </div>
                        <div className="dsh-ask-dv2 row">
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'UX Design Foundations',1);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637617/Dashboard/New%20courses%20images/final_images/ux_ui_design_foundations.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">UX Design Foundations </h4>
                                    <p className="dsh-ask-p">Build a solid foundation for your UX/UI...</p>
                                    <div className="mnht-68px">
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        37 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Easy
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'Design Terminology',2);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637615/Dashboard/New%20courses%20images/final_images/design_terminology.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">Design Terminology </h4>
                                    <p className="dsh-ask-p">Get familiar with the most commonly use...</p>
                                    <div className="mnht-68px">
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        16 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Easy
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'Color Psychology',3);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/color_psychology.svg " alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">Color Psychology </h4>
                                    <p className="dsh-ask-p">Get started with color psychology with ...</p>
                                    <div className="mnht-68px">
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        20 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Easy
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'Design Accessibility',4);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/design_accessibility.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">Design Accessibility </h4>
                                    <p className="dsh-ask-p">Accessibility and inclusivity are two o...</p>
                                    <div className="mnht-68px">
                                    <div className>
                                        <progress value={4} max={100} className="sc-csuQGl CQhxV sc-Rmtcm bZmcGk progress-lyt-blue-clr dsh-ask-prgrsbr-cstm " />
                                        <span className="lyt-blu-clr" style={{fontFamily: '"Circular-Book"', marginLeft: 10}}>
                                        4%
                                        </span>
                                    </div>
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        24 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Hard
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'UI Components',5);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637617/Dashboard/New%20courses%20images/final_images/intro_to_ui_components.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">UI Components </h4>
                                    <p className="dsh-ask-p">User Interface components are the build...</p>
                                    <div className="mnht-68px">
                                    <div className>
                                        <progress value={100} max={100} className="sc-csuQGl CQhxV sc-Rmtcm bZmcGk progress-lyt-blue-clr dsh-ask-prgrsbr-cstm hide" />
                                        <span className="lyt-prpll-clr" style={{fontFamily: '"Circular-Medium"'}}>
                                        <span>Course Completed</span> <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1647929468/Dashboard/check_prpl_gpf3ae.svg" style={{verticalAlign: 'baseline'}} />
                                        </span>
                                    </div>
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        37 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Medium
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'Advanced UI Components',8);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637616/Dashboard/New%20courses%20images/final_images/ui_components_best_practices.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">Advanced UI Components </h4>
                                    <p className="dsh-ask-p">Are you ready to take your knowledge of...</p>
                                    <div className="mnht-68px">
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        34 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Medium
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'Common Design Patterns',9);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1646637614/Dashboard/New%20courses%20images/final_images/design_patterns.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">Common Design Patterns </h4>
                                    <p className="dsh-ask-p">There are certain flows, controls, and ...</p>
                                    <div className="mnht-68px">
                                    <div className>
                                        <progress value={100} max={100} className="sc-csuQGl CQhxV sc-Rmtcm bZmcGk progress-lyt-blue-clr dsh-ask-prgrsbr-cstm hide" />
                                        <span className="lyt-prpll-clr" style={{fontFamily: '"Circular-Medium"'}}>
                                        <span>Course Completed</span> <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1647929468/Dashboard/check_prpl_gpf3ae.svg" style={{verticalAlign: 'baseline'}} />
                                        </span>
                                    </div>
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        28 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Medium
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
                            </div>
                            <div className="dsh-ask-dv2-tl">
                            <a onclick="togetstarted('Level 1',189,'UX Writing',10);">
                                <div className="dsh-ask-dv2-tl-dv1">
                                <div style={{margin: '-28px', backgroundColor: '#fff', marginBottom: '-10px'}}>
                                    <img className="dsh-ask-dv2-tl-img1" height={100} src="https://res.cloudinary.com/infoi/image/upload/v1646637616/Dashboard/New%20courses%20images/final_images/ux_writing.svg" alt="Course-Image" style={{width: '123%', height: 170, margin: '0 -35px'}} />
                                </div>
                                <div className="dsh-ask-dv2-tl-dv2">
                                    <h4 className="dsh-ask-hd4">UX Writing </h4>
                                    <p className="dsh-ask-p">Writing for user interfaces takes a spe...</p>
                                    <div className="mnht-68px">
                                    <div className>
                                        <progress value={100} max={100} className="sc-csuQGl CQhxV sc-Rmtcm bZmcGk progress-lyt-blue-clr dsh-ask-prgrsbr-cstm hide" />
                                        <span className="lyt-prpll-clr" style={{fontFamily: '"Circular-Medium"'}}>
                                        <span>Course Completed</span> <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1647929468/Dashboard/check_prpl_gpf3ae.svg" style={{verticalAlign: 'baseline'}} />
                                        </span>
                                    </div>
                                    </div>
                                    <div className="dsh-ask-dv2-tl-dv3">
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1, marginRight: 20}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643023372/Dashboard/triangle_blu_clr_mrefdd.svg" style={{height: 13, verticalAlign: 'baseline'}} />
                                        24 Activities
                                    </span>
                                    <span className="dsh-ask-dv2-tl-spn1" style={{color: '#333e63', opacity: 1}}>
                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height={22} style={{verticalAlign: 'top', marginRight: 0}} />
                                        Medium
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </a>
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
}

// export default Details;