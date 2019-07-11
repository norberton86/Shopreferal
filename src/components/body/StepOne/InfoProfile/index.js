import React from 'react'
import Box from '../../../suite/box'

const InfoProfile =()=> <Box width='100%' backgroundColor='#6c6f70' color='#ffffff' title='shop information and hours' hint='* Required fields'>

                            <div className="boxes-horizontal" id="boxStepOne">

                                <div className="infoContainer">
                                    <span className="title"> Shop Address</span>
                                    <span className="name"> AutoZone Pro - TN </span>
                                    <span className="address">664 Ruecker Track Magnusborough, TN 63021</span>
                                    <span className="email">david-conklan@autozone.com</span>
                                    <span className="web">www.AutoZone.com</span>
                                </div>

                                <div className="infoContainer">
                                    <span className="title"> Account Number</span>
                                    <span className="value value-margin">1105705454</span>

                                    <span className="title"> Shop Contact Name</span>
                                    <span className="value">David Conklan</span>
                                </div>

                                <div className="infoContainer">
                                    <span className="title">Shop Phone Number </span>
                                    <span className="value value-margin">986-135-4851</span>

                                    <span className="title"> Fax</span>
                                    <span className="value">830-254-2532</span>
                                </div>

                                <div className="infoContainer">
                                    <span className="title" id="pictureTitle"> Shop Picture</span>
                                    <img src="https://bloximages.newyork1.vip.townnews.com/lancasteronline.com/content/tncms/assets/v3/editorial/5/68/56833046-3cbc-11e7-937e-33e19218ca75/591f31cfc8734.image.jpg?resize=400%2C300" alt='Shop'/>
                                </div>
                            </div>

                        </Box>
export default InfoProfile