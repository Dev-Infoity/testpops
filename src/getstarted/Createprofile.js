import React, {useState, useEffect} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CreateProfile = () => {

    const [NameSignup, setNameSignup] = useState('');
    const [TitleSignup, setTitleSignup] = useState('');
    const [CompanySignup, setCompanySignup] = useState('');
    const [MobileSignup, setMobilesignup] = useState('');

    const handleChange = (e) => {
        //alert("fhhfg")

        var name = $('#yourname').val().trim();
        var title = $('#titlee').val().trim();
        var company = $('#compny').val().trim();
        var mobile = $('#mobile').val().trim();
        
        if ((name.length > 0) && (title.length > 0) && (company.length > 0) && (mobile.length > 9)) {
            $('#nxt-btnnfnltchr').removeAttr('disabled');
        } else {
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
    }


    const onBlur2 = (e) => {
        var name = $('#yourname');
        var namevl = $('#yourname').val();
        var udiv2 = $('#uiscs2');
        var nmdspc = new RegExp('^[a-zA-Z\\s]+$');

        if (namevl.trim() === '') {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
        else if(!nmdspc.test(namevl)) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
            $('#uiscs2 .kckh4-spn').addClass('vlactvv');
            $('#uiscs2 .err-txt').text('Please enter the correct name');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
            $('#uiscs2 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs2 .err-txt').text('Your name is required');
        }
    }

    const onBlur3 = (e) => {
        var title = $('#titlee');
        var titlevl = $('#titlee').val();
        var udiv3 = $('#uiscs3');
        var nmdspc = new RegExp('^[a-zA-Z\\s]+$');

        if (titlevl.trim() === '') {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('Title is required');
        }
        else if(!nmdspc.test(titlevl)) {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
            $('#uiscs3 .kckh4-spn').addClass('vlactvv');
            $('#uiscs3 .err-txt').text('Please enter the correct title name');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
            $('#uiscs3 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs3 .err-txt').text('Title is required');
        }
    }

    const onBlur5 = (e) => {
        var cmpny = $('#compny');
        var cmpnyvl = $('#compny').val();
        var udiv5 = $('#uiscs5');
        var nmdspc = new RegExp('^[a-zA-Z\\s]+$');

        if (cmpnyvl.trim() === '') {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
            $('#uiscs5 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs5 .err-txt').text('Company name is required');
        }
        else if(!nmdspc.test(cmpnyvl)) {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
            $('#uiscs5 .kckh4-spn').addClass('vlactvv');
            $('#uiscs5 .err-txt').text('Please enter the correct company name');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
            $('#uiscs5 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs5 .err-txt').text('Company name is required');
        }
    }

    var mobilee = $('#mobile');
    $(mobilee).keyup(function () {
        var $th = $(this);
        $th.val($th.val().replace(/[^0-9']/g, ''));
    });

    const onBlur4 = (e) => {
        var mobile = $('#mobile');
        var mobilevll = $('#mobile').val();
        var udiv4 = $('#uiscs4');
        var mblrgx = new RegExp('^[0-9]+$');


        if (mobilevll.trim() === '') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Mobile number is required');
        }
        else if (mobilevll.length < 10) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').addClass('vlactvv');
            $('#uiscs4 .err-txt').text('Please enter the correct mobile number');
        }
        else if(!mblrgx.test(mobilevll)) {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
            $('#uiscs4 .kckh4-spn').addClass('vlactvv');
            $('#uiscs4 .err-txt').text('Please enter the correct mobile number');
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
            $('#uiscs4 .kckh4-spn').removeClass('vlactvv');
            $('#uiscs4 .err-txt').text('Mobile number is required');
        }
    }


      
        const handleSubmit = () => {
        const name = NameSignup.replace(/\s+/g, ' ').trim();
        const title = TitleSignup.replace(/\s+/g, ' ').trim();
        const company = CompanySignup.replace(/\s+/g, ' ').trim();

        console.log(name + " || " + title + " || " + company + " || " + MobileSignup);
        alert('Saved! Click OK button to move to the dashboard page.');
        
        window.location.href = '/dashboard/home';
      }

    return <div>
        <Headersignup />

        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="be-content">
                <div className="main-content container-fluid disp-flex pb-0">
                    <div className="col-lg-8 col-xs-12" style={{margin: "0 auto", maxWidth: "752px"}}> 
                        <div>
                            <div className="dvvmmn dvmmbw">
                                <div style={{display: "flex", marginLeft: "5px"}} className="dvvmmn2">
                                    <div style={{paddingRight: "15px"}}>
                                        <div style={{position: "relative", width: "78px",height: "78px"}}>
                                            <div className="kldkc">3</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-9.833333333333332"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-43.166666666666664"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 3: Filling your details
                                        </h6>
                                        <h3 className="kckh3">Tell us more.</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" className="tchrcrtprlf" method="POST" id="tchrcrtprlf" noValidate="novalidate" onSubmit={handleSubmit}>
                                        <div className="w-100">
                                            <div className="kckh42" id="uiscs2">
                                                <input id="yourname" name="yourname" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={NameSignup} onBlur={(e) => onBlur2(e)} onChange={e => { setNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="yourname">Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke" strokeWidth="2">
                                                        <circle cx="12" cy="6" r="4"></circle>
                                                        <path d="M21 22a9 9 0 0 0-18 0"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh43" id="uiscs3">
                                                <input id="titlee" name="titlee" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={TitleSignup} onBlur={(e) => onBlur3(e)} onChange={e => { setTitleSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="titlee">Title</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path strokeWidth="2" d="M2 6h20v14H2z"></path>
                                                        <path strokeWidth="2" d="M1.958 10.3A19.908 19.908 0 0 0 12 13c3.714 0 7.192-1.013 10.173-2.777" mask="url(#b)"></path>
                                                        <path strokeWidth="2" d="M8.5 2h7v4h-7z"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Title is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh45" id="uiscs5">
                                                <input id="compny" name="compny" autoComplete="off" type="text" className="mbl-inp" maxLength="50" required="" value={CompanySignup} onBlur={(e) => onBlur5(e)} onChange={e => { setCompanySignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="compny">Company</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M4 4h12v17H4zM16 10h7v11h-7zM10 18v3"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Company is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh44" id="uiscs4">
                                                <input id="mobile" name="mobile" autoComplete="off" type="text" className="mbl-inp" maxLength="15" required="" value={MobileSignup} onBlur={(e) => onBlur4(e)} onChange={e => { setMobilesignup(e.target.value.trim()); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="mobile">Mobile</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path fill="none" fillRule="evenodd" strokeWidth="2" d="M17.442 20.96c-.239 0-.478-.025-.713-.074A17.56 17.56 0 0 1 3.066 7.182a4.107 4.107 0 0 1 2.678-4.6L7.504 2l2.415 4.83-2.352 2.31.358.692a14.303 14.303 0 0 0 6.152 6.153l.686.355 2.331-2.33 4.837 2.418-.59 1.782a4.163 4.163 0 0 1-3.89 2.75h-.01z"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Mobile is required</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnfnltchr" type="submit" className="kckh-btn verifybutton" disabled>
                                                <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                    <div className="ldio-ravfkgmzeb">
                                                        <div className="lodrr"></div>
                                                    </div>
                                                </div>
                                                <span id="nxt-btnn-txt">Finish</span>
                                            </button>
                                        </div>
                                        <br/><br/><br/><br/><br/><br/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bck-btn-mbw">
                <Link title="Back" to="/getstarted/details" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                    <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: "bottom"}} /> <span className="bck-btn"> BACK </span>
                </Link>
            </div>
            </div>
        </div>
        
    </div>
}

// export default Details;