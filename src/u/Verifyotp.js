import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/signintwo.css';
import { Headersignin } from '../headersignin';

export const VerifyOTP = () => {

    const handleSubmit = e => {
        e.preventDefault();
        var inpfld1 = $('#inpfld1').val();
        var inpdlferr = $('#inpfld1err');

        if(inpfld1 === "" || inpfld1 === null) {
            inpdlferr.removeClass('hide'); 
        }
        else {
            inpdlferr.addClass('hide');

            window.location.href = '/u/resetpassword';
        }

      };

    const onKeyDown = (event) => {
        if (event.code === 'Space') event.preventDefault()
    }

    return <div>
            <Headersignin />
        
                <div id="divLoader" style={{display:"none"}}> </div>
                <div className="be-wrapper be-login innerwrapper nwlogen2 nwlogen21" id="login">
                    <div className="be-content">
                        <div className="main-content container-fluid">
                            <div className="splash-container mt-0 mb-0" id="splashid">
                                <div className="card card-border-color card-border-color-primary" style={{marginBottom: 10}}>
                                <div className="card-header pb-0">
                                    <img src="/Images/otpsend.svg" alt="OTP Authentication" width={100} />
                                    <h3 className="Nwbs4" style={{fontFamily: 'Circular-Bold', fontSize: '26px !important'}}>Verify your identity.</h3>
                                    <span className="splash-description Nwbs5" style={{opacity: '0.9'}}> For your security, we need to authenticate your request. We've sent an OTP to your email. Check your inbox for a verification code. </span>
                                    <div className="card-body">
                                    <form id="form" name="form" action="" method="post" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                        <input id="inpfld1" name="OTP" type="text" placeholder="Enter OTP" className="form-control" autoFocus maxLength='5' onKeyPress={(event)=>onKeyDown(event)} />
                                        <p className="text-danger text-left cus-txt-danger hide" id="inpfld1err">Please enter OTP</p>
                                        </div>
                                        <div className="form-group login-submit pt-0">
                                        <button data-dismiss="modal" type="submit" className="btn btn-primary btn-xl nw-btn verifybutton">Verify </button>
                                        </div>
                                    </form>
                                    <div className="Nwbs3">
                                        <a href='/u/signin' className="txt-dec-none"><span className="Nwbs2">Go back to Sign-in</span></a>
                                        <span className="cus-spn">|</span>
                                        <div id="resend_id" className="disp-ib"> <span className="a-divider crsr-pointr" id="resend_otp"><span className="Nwbs2">Resend OTP?</span></span></div>
                                    </div>
                                    <div className="cus-cstmr cus-cstmr-prfl">
                                        For further assistance or enquiry please contact us.<br /> Call: <a href="tel:+91-8800004564" className="Nwbs2">+91-8800004564</a> | Email: <a href="mailto:hello@infoity.com" className="Nwbs2">hello@infoity.com</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="bck-btn-mbw">
                            <a href='/u/signin' title="Back" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                                <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: 'bottom'}} />
                                <span className="bck-btn"> BACK </span>
                            </a>
                        </div>

                    </div>

                </div>
    </div>
}