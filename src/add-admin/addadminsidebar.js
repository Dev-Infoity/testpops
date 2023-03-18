import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const AddAdminSidebar = () => {


    return <div>

                <div style={{color: 'rgb(18, 52, 102)', marginBottom: 0}}>
                            <ul style={{listStyle: 'none', flexDirection: 'column', margin: 0, padding: 0}}>
                                <li>
                                    <NavLink to='/add-admin/basic-info' className={({ isActive }) => (isActive ? ' prfl-ulla  prfl-ullacs mt-3 active' : ' prfl-ulla  prfl-ullacs mt-3 inactive')} >
                                        <span>Basic Info</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/add-admin/roles' className={({ isActive }) => (isActive ? ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs active' : ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs inactive')} >
                                        <span>Roles</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/add-admin/permissions' className={({ isActive }) => (isActive ? ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs active' : ' prfl-ulla  prfl-ullacs mt-1 cmpny- prfl-ulla  prfl-ullacs mt-3cs inactive')} >
                                        <span>Permissions</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                
        </div>
     
}