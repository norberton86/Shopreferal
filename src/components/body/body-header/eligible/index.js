import React from 'react'
import './eligible.scss'

const Eligible=(props)=><div className="eligible">

                            <div className="header">
                                <span className="title"> Referral Program Eligibility</span>
                                <span className="close" onClick={()=>props.handler()}> CLOSE X</span>
                            </div>

                            <h1 className="support">
                                    <span >PROGRAM SUPPORT: </span>
                                    <span>Phone: 866-853-5459 </span>
                                    <span> | </span>
                                    <span>Email Us</span>
                                    <span> | </span>
                                    <span>Support Hours: 8am - 5pm CT </span>
                            </h1>

                            <div className="dashed">

                                <span className="earn">EARN YOUR PLACE ON THE LIST</span>

                                <div className="price">
                                    <span className="value">$300</span>
                                    <div className="pipe"/>
                                    <div className="description">
                                        <span>Average weekly sales</span>
                                        <span> of $300 or more.</span>
                                    </div>
                                </div>

                                <span className="approved">& Approved Shop Types</span>

                                <div className="list">
                                    <span>Shop Types: General Repair, Wheel & Tire,</span>
                                    <span>Oil & Lube, Auto Body, Foreign/Specialty</span>
                                </div>

                            </div>


                        </div> 
export default Eligible
