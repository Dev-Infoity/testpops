import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/company-profilecss.css';
import { Headermain } from '../headermain';
import { Footer } from '../footer';
import { CompanyProfileLogo } from './companyprofilelogo';
import { CompanyProfileSidebar } from './companyprofilesidebar';
import { CompanyProfileUsernameDetails } from './companyprofileusernmdtls';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export const CompanyProfilePermissions = () => {
    
    const editfld1 = () => {
        $('#fielddv1').addClass('hide');
        $('#fielddv1-1').removeClass('hide');
    }

    const savefld1 = () => {
        $('#fielddv1-1').addClass('hide');
        $('#fielddv1').removeClass('hide');
    }

    const cancelfld1 = () => {
        $('#fielddv1-1').addClass('hide');
        $('#fielddv1').removeClass('hide');
    }
    

    const editfld2 = () => {
        $('#fielddv2').addClass('hide');
        $('#fielddv2-1').removeClass('hide');
    }

    const savefld2 = () => {
        $('#fielddv2-1').addClass('hide');
        $('#fielddv2').removeClass('hide');
    }

    const cancelfld2 = () => {
        $('#fielddv2-1').addClass('hide');
        $('#fielddv2').removeClass('hide');
    }
    

    const editfld3 = () => {
        $('#fielddv3').addClass('hide');
        $('#fielddv3-1').removeClass('hide');
    }

    const savefld3 = () => {
        $('#fielddv3-1').addClass('hide');
        $('#fielddv3').removeClass('hide');
    }

    const cancelfld3 = () => {
        $('#fielddv3-1').addClass('hide');
        $('#fielddv3').removeClass('hide');
    }


    const editfld4 = () => {
        $('#fielddv4').addClass('hide');
        $('#fielddv4-1').removeClass('hide');
    }

    const savefld4 = () => {
        $('#fielddv4-1').addClass('hide');
        $('#fielddv4').removeClass('hide');
    }

    const cancelfld4 = () => {
        $('#fielddv4-1').addClass('hide');
        $('#fielddv4').removeClass('hide');
    }

    const editfld5 = () => {
        $('#fielddv5').addClass('hide');
        $('#fielddv5-1').removeClass('hide');
    }

    const savefld5 = () => {
       
        $('#fielddv5-1').addClass('hide');
        $('#fielddv5').removeClass('hide');
        
    }

    const cancelfld5 = () => {
        $('#fielddv5-1').addClass('hide');
        $('#fielddv5').removeClass('hide');
    }

    const rdobtn1 = () => {
        $('#radioone').prop('checked', true);
    }

    const rdobtn2 = () => {
        $('#radiotwo').prop('checked', true);
    }

    const rdobtn3 = () => {
        $('#radiothree').prop('checked', true);
    }

    const rdobtn4 = () => {
        $('#radiofour').prop('checked', true);
    }

    const rdobtn5 = () => {
        $('#radiofive').prop('checked', true);
    }

    const rdobtn6 = () => {
        $('#radiosix').prop('checked', true);
    }

    const rdobtn7 = () => {
        $('#radioseven').prop('checked', true);
    }

    const rdobtn8 = () => {
        $('#radioeight').prop('checked', true);
    }

    const rdobtn9 = () => {
        $('#radionine').prop('checked', true);
    }

    const rdobtn10 = () => {
        $('#radioten').prop('checked', true);
    }

    const rdobtn11 = () => {
        $('#radioeleven').prop('checked', true);
    }

    return <div>
        <Headermain />
 
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
         
        <div className="padding cstmdpd mbvwpd" id="prflpg">
            <div className="row mt-6-cstm mt-4">
                <div className="col-md-2 col-lg-2 pr-0 tblt-vw-prfl1">
                    <div>
                        <div>
                            <CompanyProfileLogo />
                        </div>
                    </div>
                    <div className="tblt-vw-prfl2" style={{paddingTop: 36, paddingLeft: 10}}>
                        <CompanyProfileSidebar />
                    </div>
                    </div>
                    <div className="col-md-8 cmpy-prfl-a1 cs-st-pd tblt-prfl-vw-dv1">
                    <div className="col-sm-12 col-md-12 mt-2 mb-2">
                        <CompanyProfileUsernameDetails />
                    </div>

                    <div className="tab" id="personalinfoddv1" style={{display: "block", paddingLeft: 2, paddingRight: 12}}>
                        <div className="col-md-12 mb-4">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>MANAGER PERMISSIONS</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="profile">
                                    <form>
                                        <div className="form-group row cmp-prfl-rwdvhr ml-0 mr-0 cmpy-prfl-a6 cmpy-prfl-brdr-btm">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Direct Reports’ Compensation Info</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv1">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Hidden from managers</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfld1}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddv1-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioone" name="radioone" value="Viewable to managers" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn1} for="radioone">Viewable to managers</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiotwo" name="radioone" value="Hidden from managers" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn2} for="radiotwo">Hidden from managers</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiothree" name="radioone" value="Viewable to selected managers" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn3} for="radiothree">Viewable to selected managers</label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefld1}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfld1}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pb-4 mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Direct Reports’ I-9 Documents</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv2">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">All managers can view and verify</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfld2}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddv2-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiofour" name="radiofour" value="All managers can view and verify" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn4} for="radiofour">All managers can view and verify</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiofive" name="radiofour" value="No managers can view and verify" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn5} for="radiofive">No managers can view and verify</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefld2}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfld2}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-12 pt-16px mb-5">
                            <div className="tekila1">
                                <div className="box-header cmpy-prfl-a4 cmp-prfl-brdr-btm">
                                    <h5 className="cmpy-prfl-a5">
                                        <span>INDIVIDUAL PERMISSIONS</span>
                                    </h5>
                                </div>
                                <div className="box-body" id="contact">
                                    <form>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 cmpy-prfl-brdr-btm pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Company Org Chart & Directory</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv3">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Show only ggfgf's structure</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfld3}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddv3-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radiosix" name="radiosix" value="Show only ggfgf's structure" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn6} for="radiosix">Show only ggfgf's structure</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioseven" name="radiosix" value="Hide from everyone in ggfgf" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn7} for="radioseven">Hide from everyone in ggfgf</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefld3}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfld3}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 cmpy-prfl-brdr-btm pt-3 pb-4">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">Personal Phone Numbers</label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv4">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Viewable to everyone (individuals can choose to hide)</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfld4}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddv4-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioeight" name="radioeight" value="Viewable to everyone" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn8} for="radioeight">Viewable to everyone <br/> (individuals can choose to hide)</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radionine" name="radioeight" value="Hidden from everyone" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn9} for="radionine">Hidden from everyone</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefld4}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfld4}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row cmp-prfl-mtcsfld ml-0 mr-0 cmpy-prfl-a6 pb-4 mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-xs-4 col-form-label tekila3">
                                                Time Off Tag on Mobile <i className="fa fa-questionmark"></i>
                                            </label>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0" id="fielddv5">
                                                <div className="col-sm-9 col-xs-9 pl-0">
                                                    <label className="col-form-label tekila4">Viewable to everyone</label>
                                                </div>
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-2 col-xs-2 pr-0">
                                                    <div className="text-right">
                                                        <div className="cmpy-prfl-a7" title="Edit" onClick={editfld5}>
                                                            <i className="fa fa-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-xs-8 pl-0 row m-0 pr-0 hide" id="fielddv5-1">
                                                <div className="col-sm-9 col-xs-9 cmpy-prfl-cspdd1">
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioten" name="radioten" value="Viewable to everyone" checked />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn10} for="radioten">Viewable to everyone</label>
                                                    </div>
                                                    <div className="cmpy-prfl-mdl2-dv6 row m-0">
                                                        <div>
                                                            <div class="cmpy-prfl-mdl2-dv7">
                                                                <input type="radio" class="cmpy-prfl-mdl2-dv7-inp radio-input" id="radioeleven" name="radioten" value="Hidden from everyone" />
                                                                <i class="radio-circle cmpy-prfl-mdl2-dv7-inp-icn"></i>
                                                            </div>
                                                        </div>
                                                        <label class="cmpy-prfl-mdl2-dv8 crsr-pntr cmpy-prfl-rdobtntxt" onClick={rdobtn11} for="radioeleven">Hidden from everyone</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-xs-3 pr-0">
                                                    <div className="text-right mt-5px">
                                                        <span className="cmpy-prfl-a9" onClick={savefld5}>Save</span>
                                                        <span className="cmpy-prfl-a10">|</span>
                                                        <span className="cmpy-prfl-a9" onClick={cancelfld5}>Cancel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

        </div>      


        <br/><br/><br/><br/>
        <Footer />




    </div>
}

// export default Details;

