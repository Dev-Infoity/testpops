import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { SecondHeaderSchSrvysdashboardforOverviewdeeppages } from '../secondheaderschsrvydashboardtmplatesovrvwdtls';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useLoader from "../useLoader";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';


export const ClassroomPage = () => {
    

        const [adclsnumvl, setadclsnumvl] = useState(1);
        const [addclassList, setaddclasseslist] = useState([]);
        const [showModal, setShowModal] = useState(false);
        const handleCloseModal = () => setShowModal(false);
        const handleShowModal = () => {
            setShowModal(true);
        }

        const classlistt = [
            {value: 'Class - 1st', label: 'Class - 1st'},
            {value: 'Class - 2nd', label: 'Class - 2nd' },
            {value: 'Class - 3rd', label: 'Class - 3rd' },
            {value: 'Class - 4th', label: 'Class - 4th' },
            {value: 'Class - 5th', label: 'Class - 5th' }
        ]
        
        const [selectedclassValue, setselectedclassValue] = useState();

        const handleChange1 = e => {
            setselectedclassValue(e.value);
        }

        const sctnlist = [
            {value: 'Section - A', label: 'Section - A'},
            {value: 'Section - B', label: 'Section - B' },
            {value: 'Section - C', label: 'Section - C' },
            {value: 'Section - D', label: 'Section - D' }
        ]


        const [selectedsctnValue, setSelectedsctnValue] = useState([]);

        const handleChangee = e => {
            setSelectedsctnValue(Array.isArray(e) ? e.map(x => x.value) : []);
        }

        var mdlenttxt = $('.mdlsctnvalll');
        mdlenttxt.keyup(function () {
            console.log('keyup event triggered');
            var $th = $(this);
            $th.val($th.val().replace(/[^a-zA-Z0-9]+/g, ' '));
        });

        const svv = () => {            

            $('#mdlbtnlodr').removeClass('hide');
            $('#mdlbtntxt').addClass('hide');
            

            var clsnmerr = $('#mdlclsertxt');
            var sctnnmerr = $('#mdlsctnvlerr');
            var clsnm = $('.mdlclsnmer').val();
            var sctnnm = $('.mdlsctnvl').val();
  
            if(!clsnm || !sctnnm) {
                $('#mdlbtntxt').removeClass('hide');
                $('#mdlbtnlodr').addClass('hide');
                
                if(!clsnm) {
                    clsnmerr.show().text('Please enter class');
                } else if ($.trim(clsnm) === '') {
                    clsnmerr.show().text('Class name should not be blank');
                } else {
                    clsnmerr.hide();
                }

                if(!sctnnm) {
                    sctnnmerr.show().text('Please enter section');
                } else if ($.trim(sctnnm) === '') {
                    sctnnmerr.show().text('Section name should not be blank');
                } else {
                    sctnnmerr.hide();
                }

            } else if ($.trim(clsnm) === '') {
                $('#mdlbtnlodr').addClass('hide');
                $('#mdlbtntxt').removeClass('hide');
                clsnmerr.show().text('Class name should not be blank');
            } else if ($.trim(sctnnm) === '') {
                $('#mdlbtnlodr').addClass('hide');
                $('#mdlbtntxt').removeClass('hide');
                sctnnmerr.show().text('Section name should not be blank');
            } 
            else {

                clsnmerr.hide();
                sctnnmerr.hide();

                $('#mdlbtnlodr').removeClass('hide');
                $('#mdlbtntxt').addClass('hide');
                            
                for (var i = 1; i <= adclsnumvl; i++) {
                    var sect = $('.mdlsctnadvll' + i).val();
                    if (sect && sect.trim() !== '') {
                        addclassList.push({classes : clsnm, section :sect});
                    }
                }


              alert('Success!');
              handleCloseModal();

               
            }
        }

        const addinptvl = () => {
            $('#dynmcfldmdl').append('<div class="row m-0 mt-2" id="adclsrw' + (adclsnumvl + 1) + '"><div class="col-sm-11 pl-0"><input type="text" autocomplete="off" maxlength="15" name="qty' + (adclsnumvl + 1) +  '" placeholder="Add Section Name" class="tekila6 mdlsctnvl mdlsctnvalll mdlsctnadvll' + (adclsnumvl + 1) + '" /></div><div class="col-sm-1 p-0"><button class="mdlbtncsdd rmvclsmdldv" id="'+ (adclsnumvl + 1) +'"><i title="Remove section" class="binbtnmdllrm fa fa-trash"></i></button></div></div>');
            setadclsnumvl(adclsnumvl + 1);
        }
        
        
       $(document).on('click', '.rmvclsmdldv', function(){ 
           var rmvbtnid = $(this).attr("id");
           $('#adclsrw'+ rmvbtnid +'').remove();
           setadclsnumvl(adclsnumvl - 1);
        });

    return <div>
        <SecondHeaderSchSrvysdashboardforOverviewdeeppages />
        
        <div className="be-wrapper be-login innerwrapper" id="login">
            
            <div className="padding mbvwpd">

                <div id="no-dtaclsrmsch">
                    <div className="clsrmnoclsnwd">
                        <div>
                            <img src="https://res.cloudinary.com/infoi/image/upload/v1670915604/feedii/empty_class_pg_y3ekqk.svg" width="150" alt="Image" />
                            <p className="clsrmnoclsnwdp">Add classes by clicking on the below button.</p>
                            <button className="clsrmnoclsnwdbtn" type="button" onClick={() => { handleShowModal();}}>
                                <i className="fa fa-plus"></i>
                                Add Class
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row mt-4" id="dtaclsrmsch">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-10">
                        <div className="mb-30px">
                            <div className="col-sm-12 pr-0">
                                

                                <div className="col-sm-12 mb-5 p-0">
                                    <div className="clsrmdv1">
                                        <h1 className="clshdngh1">Class 6th</h1>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">                                        
                                
                                            <div className="col-sm-3 mb-4">
                                                <div className="tlbxdvvda">
                                                    <div className="clsrmdv2-1">
                                                        <a className="clsrmdv2-2-dv1">
                                                            <div>
                                                                <div className="clsrmdv2-2-dv1-a1">
                                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                                    <span> Section A</span>
                                                                </div>
                                                            </div>
                                                            {/* <div className="clsrmdv2-2-dv1-a2">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle className="clsrmdrpdwn">
                                                                        <i className="fa fa-ellipsis-v"></i>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item">
                                                                            <Link to='/sch/class' onClick={()=>{sndclsidtoclspg(classes.batchId);}}>
                                                                                View Class
                                                                            </Link>
                                                                        </div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 mb-4">
                                                <div className="tlbxdvvda">
                                                    <div className="clsrmdv2-1">
                                                        <a className="clsrmdv2-2-dv1">
                                                            <div>
                                                                <div className="clsrmdv2-2-dv1-a1">
                                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                                    <span> Section B</span>
                                                                </div>
                                                            </div>
                                                            {/* <div className="clsrmdv2-2-dv1-a2">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle className="clsrmdrpdwn">
                                                                        <i className="fa fa-ellipsis-v"></i>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item">
                                                                            <Link to='/sch/class' onClick={()=>{sndclsidtoclspg(classes.batchId);}}>
                                                                                View Class
                                                                            </Link>
                                                                        </div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 mb-4">
                                                <div className="tlbxdvvda">
                                                    <div className="clsrmdv2-1">
                                                        <a className="clsrmdv2-2-dv1">
                                                            <div>
                                                                <div className="clsrmdv2-2-dv1-a1">
                                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1653892764/Dashboard/lvvl_lkiiky.svg" height="22" style={{verticalAlign: 'top', marginRight: '5px'}} />
                                                                    <span> Section C</span>
                                                                </div>
                                                            </div>
                                                            {/* <div className="clsrmdv2-2-dv1-a2">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle className="clsrmdrpdwn">
                                                                        <i className="fa fa-ellipsis-v"></i>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className="tbl-drpdwnmnu">
                                                                        <div className="tbl-dropdown-item dropdown-item">
                                                                            <Link to='/sch/class' onClick={()=>{sndclsidtoclspg(classes.batchId);}}>
                                                                                View Class
                                                                            </Link>
                                                                        </div>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div> */}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>



        <Modal show={showModal} onHide={handleCloseModal} className="cstmmtmodal clsmdlmrgnt1" >
            <Modal.Header closeButton>
                <Modal.Title>Add Class</Modal.Title>
            </Modal.Header>
           <div>
                <div id="frmm">
                    <Modal.Body className="cstmmdlbdyhtt clsmdlmrgnt1bdyht">
                        <p className="clsmdlpcsd">Add classes to your classroom.</p>
                        <div>
                            <div className="row m-0 mb-4">
                                <div className="col-sm-4">
                                    <label className="mdllblcsds">Class</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" placeholder="Add Class Name" autocomplete="off" maxlength="15" className="tekila6 mdlclsnmer" id="adclsvlll" />
                                    <div className="errslct" id="mdlclsertxt">Please enter class</div>
                                </div>
                            </div>
                            <div className="row m-0 mb-3">
                                <div className="col-sm-4">
                                    <label className="mdllblcsds">Section</label>
                                </div>
                                <div className="col-sm-8" id="dynmcfldmdl">
                                    <div className="row m-0" id="adclsrw1">
                                        <div className="col-sm-12 p-0">
                                            <input type="text" placeholder="Add Section Name" autocomplete="off" maxlength="15" name="qty1" className="tekila6 mdlsctnvl mdlsctnvalll mdlsctnadvll1" />
                                        </div>
                                    </div>
                                    <div className="errslct" id="mdlsctnvlerr">Please enter section</div>
                                </div>
                                <div className="col-sm-12 row m-0 p-0">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-8">
                                        <button onClick={addinptvl} className="mdlbtncsdd blubtnmdllad"><i className="fa fa-plus-circle mr-2"></i> Add Section</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="brdr-tp">
                        <Button variant="primary modalGrayBtn" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button variant="secondary modalRedBtn" type="submit" onClick= {() => {svv();}} style={{minWidth: '60px'}}>
                            <span id="mdlbtnlodr" className="hide">
                                <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                            </span>
                            <span id="mdlbtntxt">Add</span>
                        </Button>
                    </Modal.Footer>
                </div>
           </div>
        </Modal>

    </div>
}

// export default Details;