import React from 'react'
import './tracker.scss'
import Bar from './bar'
import Step from './step'
import { circleTypes,barTypes } from '../../../utilities/constants';

export default class Tracker extends React.PureComponent{
// eslint-disable-next-line
    constructor(props){
        super(props)
    }

    evaluateStep(stepIndex){
        const {fullCover,currentStep} = this.props

        if(fullCover || stepIndex < currentStep )
            return circleTypes.complete
        else if(stepIndex === currentStep)
            return circleTypes.active
        else
            return circleTypes.inactive
    }
    
    render(){

        const {currentStep} = this.props

        return <div className="tracker">
                    <div className="barContainer">
                    {[1,2,3].map((bar,index)=><Bar key={index} type={currentStep > bar?barTypes.active:barTypes.inactive}/>)}
                    </div>
                    <div className="steps">
                        <Step firstName='Shop Information' lastName='and Hours' type={this.evaluateStep(1)} width='145px'  marginLeft='0px'/>
                        <Step firstName='Shop Information' lastName='and affiliation' type={this.evaluateStep(2)} width='145px'  marginLeft='61px'/>
                        <Step firstName='Shop Information' lastName='and vehicles serviced' type={this.evaluateStep(3)} width='180px'  marginLeft='50px'/>
                        <Step firstName='Coupons' lastName='' type={this.evaluateStep(4)} width='111px' marginLeft='44px'/>
                    </div>

               </div>
    }
}