import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CompanyProfileSidebar = () => {


    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/company-profile/details' className={({ isActive }) => (isActive ? 'prfl-ulla active' : 'prfl-ulla inactive')} >
                                        <span>Company Overview</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/company-profile/tax-info' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Tax Info</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/company-profile/address-info' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Address & Labour Groups</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to='/company-profile/projects' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Projects</span>
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to='/company-profile/admins' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Administrators</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/company-profile/permissions' className={({ isActive }) => (isActive ? 'prfl-ulla cmpny-prfl-ullacs active' : 'prfl-ulla cmpny-prfl-ullacs inactive')} >
                                        <span>Permissions</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                
        </div>
     
}