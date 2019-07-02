import React from 'react'
import './body.scss'
import BodyHeader from './body-header'
import ButtonAutoZone from '../suite/button-autozone'
import  Map from './map'

export default class Body extends React.Component{


    render(){
        return  <div className="body">
                    
                    <BodyHeader/>
                    <div className="body-content">

                        <h1 className="big-title"> GROW YOUR BUSINESS WITH AUTOZONE’S SHOP REFERRAL PROGRAM!</h1>

                        <div className="two-area-container">
                            <div className="left">
                                
                                <div className="description">
                                    <span>With over 5MM walk-in customers, 5MM online customers and internet</span>
                                    <span>search traffic each week, our shop referral program helps you get the attention</span>
                                    <span>you deserve.</span>
                                </div>

                                <h1 className="bussines-description">Don’t Miss Out on this Great Source of Potential New Business</h1>

                                <div className="description-list">
                                    <span>Let us add your shop to our referral list for:</span>
                                    <ul className="list">
                                        <li>FREE advertising as a part of our list of trusted professionals</li>
                                        <li>Potential new customer and repeat business</li>
                                        <li>The opportunity to offer customers coupons as an incentive</li>
                                    </ul>

                                </div>

                                <h1 className="started-today">Get Started Today</h1>

                                <div className="description">
                                    <span>Review our qualification requirements to determine if your shop is eligible, then</span>
                                    <span>manage your shop profile here to be included on our shop referral list.</span>
                                </div>

                                <ButtonAutoZone text={'Join Shop Referral'} width={'283px'} height={'38px'} borderColor={'#f37f00'} backgroundColor={'#f37f00'} color='#ffffff'/>

                                <h1 className="text-with-link">Not ready to create a profile? Return to <span>AutoZonePro.com</span></h1>

                                <div className="description" style={{marginTop:'24px'}}>
                                    <span>*Participating shops mush meet qualificaton requirements, including weekly sales</span>
                                    <span>level thresholds. <span style={{color:'#f37f00',textDecoration: 'underline',cursor:'pointer'}}>See Qualification Details</span >&nbsp;for more info.</span>
                                </div>

                            </div>

                            <div className="right">
                                <Map/>
                                <div className="contact">
                                    <span >PROGRAM SUPPORT: </span>
                                    <span>Phone: 866-853-5459 </span>
                                    <span> | </span>
                                    <span>Email Us </span>
                                    <span> | </span>
                                    <span>Support Hours: 8am - 5pm CT </span>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
    }
} 