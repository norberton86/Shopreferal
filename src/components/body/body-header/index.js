import React from 'react'
import './body-header.scss'
import faq from '../../../assets/question-faq/faq.png' 
import Portal from '../../portal'
import Eligible from './eligible'

export default class BodyHeader extends React.Component{

    constructor(props){
        super(props)

        this.state={
            showEligible:false
        }
    }

    switchShowEligible(){
        this.setState( previous=>({
            showEligible:!previous.showEligible
        }))
    }

    render(){

        const {showEligible} = this.state

        return  <React.Fragment>
        
                <div className="body-header">
                    
                    <div className="left">
                            <span> Shop Referral</span>
                    </div>

                    <div className="right">

                        <div className="inner-box">
                            <span>Average Weekly Purchases</span>
                            <span>$300.00</span>
                        </div>

                        <div className="pipe"/>

                        <div className="inner-box">
                            <span>Referral Program Eligibility 
                                <span className="details" onClick={()=>this.switchShowEligible()}>(See Details)</span> 
                            </span>
                            <span>Current Eligible to be listed = Yes</span>
                        </div>

                        <div className="pipe"/>

                        <div className="faq">
                                <img src={faq} alt='FAQ'/>
                                <span> FAQ </span>
                        </div>

                    </div>

                </div>

                {showEligible && <Portal>
                                    <Eligible handler={this.switchShowEligible.bind(this)}/>
                                 </Portal>
                }
                
                </React.Fragment>
    }
}