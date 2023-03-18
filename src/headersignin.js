
import './Content/Content/login.css';
import './App.css';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Headersignin = () => {
    const hdrstyl1 = {
        opacity: ".5",
        fontSize: "15px",
        letterSpacing: ".18px",
        lineHeight: "24px"
    };

    return <div>

                <div className="content-header custom-blue box-shadow-4 cstm-hdrrr" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "0 60px" }}>
                        <div className="navbar-text nav-title" id="pageTitle">
                            <div>
                                <img src='https://res.cloudinary.com/infoi/image/upload/v1641466337/Header%20Logo/main-logo_ulakd4.svg' width="120" style={{marginTop: '-4px', height: '30px'}} />
                            </div>
                        </div>
                        <div className="collapse navbar-collapse order-lg-1" id="navbarToggler" style={{ height: "2rem" }}></div>
                        <ul className="nav flex-row order-lg-2">
                            <li>
                                <div style={hdrstyl1} className="mbvw-dspn">
                                    Not have an account?
                                </div>
                            </li>
                            <li>
                                <div className="sgnupcstmabtn shldr">Sign Up</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
}