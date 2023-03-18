import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import { useDropzone } from 'react-dropzone';
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../Content/Content/dashboard.css';
import '../Content/Content/home.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";


export const Home = () => {

    const hmadmin = () => {
        $('#admin').addClass('active');
        $('#personal').removeClass('active');
        $('#admndata').show();
        $('#prsnldata').hide();
    }
    
    const hmprsnl = () => {
        $('#personal').addClass('active');
        $('#admin').removeClass('active');
        $('#prsnldata').show();
        $('#admndata').hide();
    }

    return <div>
        <Headermain />
        
        <div className="hm1" id="login">
            <div className="hm2">
                <div className="hm3">
                    <div className="hm3-a1">
                        <div className="hm3-a2">
                            <div className="hm3-a21">
                                <div className="hm3-a22">
                                    <img className="hm3-a23img" src="https://res.cloudinary.com/infoi/image/upload/v1677558398/Header%20Logo/Infoity-Favicon_eqjenk.png" alt="Company Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="hm3-a3">Company Name</div>
                    </div>
                </div>
                <div className="hm4">
                    <div className="hm4-a1">
                        <h2 className="hm4-a1-b1">
                            Hello, There
                        </h2>
                        <div className="hm4-a1-b2">
                            <ul className="hm4-a1-b2ul">
                                <li className="hm4-a1-b2ulli">
                                    <button className="hm4-a1-b2ullibtn active" onClick={hmadmin} id="admin">
                                        Admin
                                    </button>
                                </li>
                                <li className="hm4-a1-b2ulli">
                                    <button className="hm4-a1-b2ullibtn" onClick={hmprsnl} id="personal">
                                        Personal
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hm4-a2">
                        <div className="hm4-a2-b1">
                            <h6 className="hm4-a2-b2">Tasks</h6>
                            <a className="hm4-a2-b3">View All</a>
                        </div>
                        <div className="hm4-a2-c1">
                            <div className="hm4-a2-c2">
                                <div className="hm4-a2-c3">
                                   <div className="hm4-a2-c4">
                                    <div className="hm4-a2-c5">
                                        <div className="hm4-a2-c6">
                                            <img className="hm4-a2-c6-img" src="https://res.cloudinary.com/infoi/image/upload/v1677569934/Dashboard-Icons/icon-talent-bigger_h3fsim.svg" />
                                        </div>
                                        <div className="hm4-a2-c7">Complete your reviews for Quarterly Trainer Evaluation</div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="hm4-a2-c2">
                                <div className="hm4-a2-c3">
                                   <div className="hm4-a2-c4">
                                    <div className="hm4-a2-c5">
                                        <div className="hm4-a2-c6">
                                            <img className="hm4-a2-c6-img" src="https://res.cloudinary.com/infoi/image/upload/v1677569934/Dashboard-Icons/icon-talent-bigger_h3fsim.svg" />
                                        </div>
                                        <div className="hm4-a2-c7">Complete your reviews for Quarterly Review-Your-Manager Review</div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hm4-a3">
                        <div className="hm4-a3-b1">
                            <h6 className="hm4-a2-b2">Feed</h6>
                        </div>
                        <div className="hm4-a3-b2">
                            <div className="hm4-a3-b3">
                                <img className="hm4-a3-b3-img" src="https://res.cloudinary.com/infoi/image/upload/v1677569975/Dashboard-Icons/Brandi_Gordon_frazvs.jpg" alt="User Image" />
                                <div className="hm4-a3-b4">
                                    <div className="hm4-a3-b4-a1">
                                        <div className="hm4-a3-b4-a11">
                                            <h4 className="hm4-a3-b4-a12">Your Name</h4>
                                            <div className="hm4-a3-b4-a13">
                                                <div className="hm4-a3-b4-a14">•</div>
                                                <div className="hm4-a3-b4-a15">
                                                    <div className="hm4-a3-b4-a16">CEO</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a3-b4-a21">
                                            <div className="hm4-a3-b4-a22">4mo</div>
                                        </div>
                                    </div>
                                    <div className="hm4-a3-b4-a2">
                                        <div className="hm4-a3-b4-a221">
                                            <div className="hm4-a3-b4-a222">
                                                <span>
                                                    <div className="hm4-a3-b4-a223">
                                                        Wins of the week!!! Congrats to
                                                        &nbsp;<span className="hm4-a3-b4-a224">@Emily Anderson</span>&nbsp;
                                                        ! Keep it up!! Appreciate you! 
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="admndata">
                        <div className="hm4-a4">
                            <div className="hm4-a4-b1">
                                <h6 className="hm4-a4-b2">WORKERS</h6>
                            </div>
                            <div className="hm4-a4-bb1">
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <div className="hm4-a4-bb4">
                                            <div className="hm4-a4-bb41">+</div>
                                        </div>
                                        <div className="hm4-a4-bb5">Add</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677569998/Dashboard-Icons/alison_m2zl3o.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Alison</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570021/Dashboard-Icons/emily_xua7b4.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Emily</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <div className="hm4-a4-bb4 hm4-a4-bb4cs">
                                            <div className="hm4-a4-bb41">GG</div>
                                        </div>
                                        <div className="hm4-a4-bb5">Gloria</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570096/Dashboard-Icons/michael_jhkovk.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Michael</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570138/Dashboard-Icons/erin_vqihrm.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Erin</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <div className="hm4-a4-bb4 hm4-a4-bb4cs">
                                            <div className="hm4-a4-bb41">JL</div>
                                        </div>
                                        <div className="hm4-a4-bb5">Jane</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570173/Dashboard-Icons/female-3_bxkygc.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Ashley</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570191/Dashboard-Icons/male-2_jcv1x0.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Kenneth</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570208/Dashboard-Icons/dog-6_pnn2ui.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Evelyn</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570243/Dashboard-Icons/male-4_gnnw2n.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Roy</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570270/Dashboard-Icons/female-4_y5erea.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Deborah</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570320/Dashboard-Icons/female-2_sq1nsn.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Teresa</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570370/Dashboard-Icons/male-3_y22uuc.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Jesse</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570405/Dashboard-Icons/alex_ujdyda.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Alex</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <div className="hm4-a4-bb4 hm4-a4-bb4cs2">
                                            <div className="hm4-a4-bb41">...</div>
                                        </div>
                                        <div className="hm4-a4-bb5">See All</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="hm4-a5">
                            <h6 className="hm4-a5-b1">APPS</h6>
                            <div className="hm4-a5-b2">
                                
                                <div className="hm4-a5-b3">
                                    <a href="/company-profile/details" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570458/Dashboard-Icons/icon-z2-company_bcpevk.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Company Profile</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570484/Dashboard-Icons/icon-z2-directory_vzpp7n.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Directory</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570510/Dashboard-Icons/icon-z2-documents_rbvkzp.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Document</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570533/Dashboard-Icons/icon-z2-payroll_uq9fbc.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Payroll</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5cs">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570551/Dashboard-Icons/icon-z2-timeAttendance_as0i1a.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Time & Attendance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570574/Dashboard-Icons/icon-z2-pto_yfazah.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Time Off</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="/hiring/overview" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570596/Dashboard-Icons/icon-z2-hiring_pyskmh.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Hiring</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570625/Dashboard-Icons/icon-z2-medical_tqu141.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Benefits Administration</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5cs">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570647/Dashboard-Icons/icon-z2-aca_knib49.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">ACA Compliance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5cs">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570664/Dashboard-Icons/icon-z2-hrAdvisor_xokp2z.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">HR Library</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570683/Dashboard-Icons/icon-z2-reports_lbngaf.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Business Intelligence</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570703/Dashboard-Icons/icon-z2-commuter_k6jvvv.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Commuter benefits</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570724/Dashboard-Icons/icon-z2-fsa_flvkkd.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Flexible Spending Account</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570751/Dashboard-Icons/icon-z2-hsa_vgfq6u.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Health Savings Account</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570771/Dashboard-Icons/icon-z2-deductions_neplfm.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Deductions</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677569934/Dashboard-Icons/icon-talent-bigger_h3fsim.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Performance Management</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570792/Dashboard-Icons/icon-wellness_jujrab.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Well-being</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570815/Dashboard-Icons/icon-engagement_rdioi7.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Engagement</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570837/Dashboard-Icons/icon-influitive_mxuee4.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hm4-a5-b5-c1nw">
                                                <svg viewBox="0 0 88 88" className="hm4-a5-b5-c1nw1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M88 88L0 0H88V88Z"></path></svg>
                                                <div className="hm4-a5-b5-c1nw2">
                                                    <div className="hm4-a5-b5-c1nw21">New</div>
                                                    <div className="hm4-a5-b5-c1nw22">Content</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Club Zen</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5cs">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570859/Dashboard-Icons/icon-compensation-management_zooiay.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Compensation Management</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570880/Dashboard-Icons/icon-people-hub_adwfug.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">People Hub</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570903/Dashboard-Icons/icon-z2-compliance_ciqvgx.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Compliance Assistant</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570919/Dashboard-Icons/gmail_iddf4r.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">G Suite</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570936/Dashboard-Icons/salesforce-logo-122x86_j06fqz.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Salesforce</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570955/Dashboard-Icons/Slack_Icon_qzjo7j.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Slack</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570971/Dashboard-Icons/cartalogo_p20o4i.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Carta</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570990/Dashboard-Icons/partner_avma5r.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Lattice</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571008/Dashboard-Icons/expensify_zxu8iy.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Expensify</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571034/Dashboard-Icons/guideline_vrlrif.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Guideline</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571075/Dashboard-Icons/greenhouse_a5e0yl.png" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Greenhouse</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5cs2">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <i className="fa fa-plus hm4-a5-b5-c3-icn"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Add an App</div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div id="prsnldata" style={{display: 'none'}}>

                        <div className="hm4-a4">
                            <div className="hm4-a4-b1">
                                <h6 className="hm4-a4-b2">My Team</h6>
                            </div>
                            <div className="hm4-a4-bb1">
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <div className="hm4-a4-bb4">
                                            <div className="hm4-a4-bb41">+</div>
                                        </div>
                                        <div className="hm4-a4-bb5">Add</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677569998/Dashboard-Icons/alison_m2zl3o.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Alison</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570021/Dashboard-Icons/emily_xua7b4.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Emily</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570138/Dashboard-Icons/erin_vqihrm.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Erin</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570208/Dashboard-Icons/dog-6_pnn2ui.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Evelyn</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570243/Dashboard-Icons/male-4_gnnw2n.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Roy</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570270/Dashboard-Icons/female-4_y5erea.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Deborah</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570320/Dashboard-Icons/female-2_sq1nsn.jpg" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Teresa</div>
                                    </div>
                                </a>
                                <a className="hm4-a4-bb2">
                                    <div className="hm4-a4-bb3">
                                        <img className="hm4-a4-bb4img" src="https://res.cloudinary.com/infoi/image/upload/v1677570405/Dashboard-Icons/alex_ujdyda.png" alt="User Picture" />
                                        <div className="hm4-a4-bb5">Alex</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <div className="hm4-a5">
                            <h6 className="hm4-a5-b1">APPS</h6>
                            <div className="hm4-a5-b2">
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571101/Dashboard-Icons/icon-z2-personalInfo_vfwpgu.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Personal information</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571118/Dashboard-Icons/icon-z2-paystub_bthb4j.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Pay Stubs</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570574/Dashboard-Icons/icon-z2-pto_yfazah.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Time Off</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570596/Dashboard-Icons/icon-z2-hiring_pyskmh.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Hiring</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570551/Dashboard-Icons/icon-z2-timeAttendance_as0i1a.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Time & Attendance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571140/Dashboard-Icons/icon-scheduling_mkvvqh.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Scheduling</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571160/Dashboard-Icons/icon-z2-managers_korr9h.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Org Chart</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570484/Dashboard-Icons/icon-z2-directory_vzpp7n.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">My Team</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570625/Dashboard-Icons/icon-z2-medical_tqu141.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Medical Insurance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571181/Dashboard-Icons/icon-z2-dental_hxcmqj.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Dental Insurance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571197/Dashboard-Icons/icon-z2-vision_lplpwu.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Vision Insurance</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570703/Dashboard-Icons/icon-z2-commuter_k6jvvv.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Commuter benefits</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570724/Dashboard-Icons/icon-z2-fsa_flvkkd.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Flexible Spending Account</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570683/Dashboard-Icons/icon-z2-reports_lbngaf.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Business Intelligence</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677571220/Dashboard-Icons/icon-z2-referral_iubekg.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Refer Customers</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677569934/Dashboard-Icons/icon-talent-bigger_h3fsim.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Performance Management</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570792/Dashboard-Icons/icon-wellness_jujrab.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Well-being</div>
                                    </a>
                                </div>
                                
                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570815/Dashboard-Icons/icon-engagement_rdioi7.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">Engagement</div>
                                    </a>
                                </div>

                                <div className="hm4-a5-b3">
                                    <a href="" className="hm4-a5-b4">
                                        <div className="hm4-a5-b5">
                                            <div className="hm4-a5-b5-c1">
                                                <div className="hm4-a5-b5-c2">
                                                    <div className="hm4-a5-b5-c3">
                                                        <img className="hm4-a5-b5-c4-img" src="https://res.cloudinary.com/infoi/image/upload/v1677570880/Dashboard-Icons/icon-people-hub_adwfug.svg" alt="Tile Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hm4-a5-b6">People Hub</div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

        <br/><br/>

        <Footer />



    </div>
}

// export default Details;