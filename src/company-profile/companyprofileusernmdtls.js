import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CompanyProfileUsernameDetails = () => {


    return <div>

                        <div style={{minHeight: 128, paddingBottom: 16, display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                            <div>
                                <h2 style={{fontSize: 31, lineHeight: '1.25', color: '#333e63', fontWeight: 600, margin: 0, textTransform: 'capitalize', letterSpacing: 'normal'}}>
                                    Username
                                </h2>
                                <div style={{fontSize: 14, lineHeight: '1.43', color: 'rgb(68, 68, 68)', textTransform: 'none', letterSpacing: 'normal', paddingTop: 4}}>
                                    <ul style={{marginTop: 10, marginBottom: 8, paddingLeft: 2, listStyleType: 'none'}}>
                                        <li style={{paddingBottom: 1, fontSize: 16, color: '#333e63'}}>
                                            Total Headcount &nbsp;&nbsp; 21
                                        </li>
                                        <li style={{color: '#333e63', fontSize: 16}}>
                                            Date Established &nbsp;&nbsp; March, 2017
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                
                
        </div>
     
}