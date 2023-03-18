import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/signintwo.css';
import { Headersignin } from '../headersignin';

export const Password = () => {

    const handleSubmit = e => {
        e.preventDefault();
        var inpfld1 = $('#inpfld1').val();
        var inpdlferr = $('#inpfld1err');

        if(inpfld1 === "" || inpfld1 === null) {
            inpdlferr.removeClass('hide'); 
        }
        else {
            inpdlferr.addClass('hide');

            window.location.href = '/dashboard/home';
        }

      };

    const onKeyDown = (event) => {
        if (event.code === 'Space') event.preventDefault()
    }

    const Forgotpass = () => {
        window.location.href = '/u/resetpassword';
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
                                <h2 className="u-bumperBottom--md Nwbs1"> Almost there...</h2>
                                <div className="card-body">
                                    <form id="form" name="form" action="" method="post" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input id="inpfld1" name="text" type="password" placeholder="Password" className="form-control" maxLength='30' autoFocus  onKeyPress={(event)=>onKeyDown(event)} />
                                        <p className="text-danger text-left cus-txt-danger hide" id="inpfld1err">Please enter password</p>
                                    </div>
                                    <div className="form-group login-submit pt-0 mb-0">
                                        <button type="submit" className="btn btn-primary btn-xl nw-btn" id="signinbtn">Sign in</button>
                                    </div>
                                    </form>
                                    <div className="Nwbs3">
                                        <a href="/u/signin" className="txt-dec-none"><span className="Nwbs2">Go back to Sign-in</span></a>
                                        <span className="cus-spn">|</span>
                                        <span className="a-divider" onClick={Forgotpass} id="forgot_password"><span className="Nwbs2 crsr-pointr">Forgot Password?</span></span>
                                    </div>
                                    <div className="u-bumperTop--lg u-padTop u-borderTop" />
                                    <div className="cus-cstmr cus-cstmr-prfl">
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