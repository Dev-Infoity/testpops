import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/signintwo.css';
import { Headersignin } from '../headersignin';

export const Signin = () => {

    const handleSubmit = e => {
        e.preventDefault();
        var inpfld1 = $('#inpfld1').val();
        var inpdlferr = $('#inpfld1err');

        if(inpfld1 === "" || inpfld1 === null) {
            inpdlferr.removeClass('hide'); 
        }
        else {
            inpdlferr.addClass('hide');
            window.location.href = '/u/password';
        }

      };

    const onKeyDown = (event) => {
        if (event.code === 'Space') event.preventDefault()
    }

    return <div>
            <Headersignin />
        
                <div id="divLoader" style={{display:"none"}}> </div>
                <div className="be-wrapper be-login innerwrapper nwlogen2" id="login">
                    <div className="be-content">
                        <div className="main-content container-fluid disp-flex pb-0">
                            <div className="splash-container col-lg-8 col-xs-12 Nwbs7">
                            <div className="card">
                                <div className="card-header">
                                <h2 className="u-bumperBottom--md Nwbs1"> Welcome back!</h2>
                                <div className="card-body">
                                    <form id="form" name="form" action="" method="post" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input id="inpfld1" name="text" type="text" placeholder="Email Address" className="form-control" maxLength='30' autoFocus  onKeyPress={(event)=>onKeyDown(event)} />
                                        <p className="text-danger text-left cus-txt-danger hide" id="inpfld1err">Please enter required detail</p>
                                    </div>
                                    <div className="form-group login-submit pt-0 mb-0">
                                        <button type="submit" className="btn btn-primary btn-xl nw-btn" id="signinbtn">Continue</button>
                                    </div>
                                    </form>
                                    <span className="splash-description"> <a href="/getstarted/details" className="Nwbs2">  New User? Create account</a></span>
                                    <div className="u-bumperTop--lg u-padTop u-borderTop" />
                                    <div className="cus-cstmr">
                                    For further assistance or enquiry please contact us.<br /> Call: <a href="tel:+91-8800004564" className="Nwbs2">+91-8800004564</a> | Email: <a href="mailto:hello@infoity.com" className="Nwbs2">hello@infoity.com</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="Nwbs8 col-lg-8 col-xs-12">
                            <div className="ph-item image cus-hait-image position-absolute">
                                <div className="ph-picture" />
                            </div>
                            <div className="login-image-loader">
                                <img className="image" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1633753640/Login%20Image/login-image.jpg" onerror="this.onerror=null;this.src='/Images/ImageNotFound.png';" loading="lazy" />
                            </div>
                            </div>
                        </div>
                        </div>

                </div>
    </div>
}