import React from "react";
import '../Content/Content/signup.css';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Signup = () => {

    return <div>
        <Headersignup />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="cntanerr" id="login">
            <div className="roww jc-cntr mbvwjcc">
                <div className="colcs">
                    <div className="dv1">
                        <h6>Choose One!</h6>
                        <h3>Sign up for Feedii as a...</h3>
                    </div>
                    <div className="dv2 roww">
                        <div className="col-sm-4">
                            <div className="dv2cstma" id="techr">
                                <div className="cstmdv01">
                                    <img src="/Images/teacher-img1.png" className="cstmdv01-img" height="104" width="104" />
                                    <p className="cstmdv01-p">Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="dv2cstma" id="studnt">
                                <div className="cstmdv01">
                                    <img src="/Images/student-img1.png" className="cstmdv01-img" height="104" width="104" />
                                    <p className="cstmdv01-p">Student</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="dv2cstma" id="adminn">
                                <div className="cstmdv01">
                                    <img src="/Images/school-img1.svg" className="cstmdv01-img" height="104" width="104" />
                                    <p className="cstmdv01-p">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dv3">
                        <span className="dv3spn">You have credentials?</span>
                        <div className="dv3cstma shldr">Log In</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

// export default Test;    