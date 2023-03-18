import React from "react";
import '../Content/Content/login.css';
import '../Content/Content/errorcss.css';
import '../App.css';
import { Headersignin } from '../headersignin';


export const Error100Page = () => {

    return <div>
                <Headersignin />

                <div style={{paddingTop: '7%'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItem: 'center', textAlign: 'center', justifyContent: 'center', backgroundColor: 'transparent', width: '100%', padding: 24, overflow: 'auto', position: 'fixed', height: '80vh', left: 0, top: 0}}>
                        <img style={{height: 100}} src="../Images/cloud_off-black-48dp.svg" />
                        <h3 style={{marginTop: '20px !important', color: '#585858', fontSize: 28, fontFamily: 'circular-book'}}>Something went wrong. Please try again.</h3>
                        <div style={{width: '50%', margin: '15px auto'}}>
                            <a href="/" className="ahvr"><i className="fa fa-chevron-left" style={{fontSize: '12px !important'}} /> Back to Feedii Home Page</a>
                        </div>
                    </div>


                </div>
            </div>    
    
}


