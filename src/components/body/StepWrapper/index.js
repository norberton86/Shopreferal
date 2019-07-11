import React from 'react'
import './stepWrapper.scss'
import Tracker from '../../suite/tracker'
import {connect} from 'react-redux'
import {setCurrentStep} from '../../../redux/actions'
import ButtonAutoZone from '../../suite/button-autozone'
import {
    withRouter
  } from 'react-router-dom'

class StepWrapper extends React.Component{

  

    next(){
        let nextStep = parseInt(this.props.currentStep)+1
        this.props.setCurrentStep(nextStep)
        switch(nextStep){
            case 2: 
                    this.props.history.push('/StepTwo'); 
                    break;
            case 3: 
                    this.props.history.push('/StepThree'); 
                    break;
            case 4: 
                    this.props.history.push('/StepFour'); 
                    break; 
            default: break;
        }
    }

    finish(){}

    previous(){
        
        let previousStep = parseInt(this.props.currentStep)-1
        if(previousStep >= 1){
            this.props.setCurrentStep(previousStep)
        }
        
        this.props.history.goBack()
    }

    render(){
        return  <div className="stepWrapper">
                     <div className="centered">
                        <Tracker fullCover={this.props.fullCover} currentStep={this.props.currentStep} />
                     </div>

                        {this.props.children}
                     
                     <div className="actions">
                            <ButtonAutoZone text='PREVIOUS' width='184px' height='38px' borderColor='#3a3c3d' backgroundColor= 'white' color='#3a3c3d' handler={this.previous.bind(this)}/>
                            {this.props.currentStep < 4 && <ButtonAutoZone text='NEXT' width='184px' height='38px' borderColor='#f37f00' backgroundColor= '#f37f00' color='white'  handler={this.next.bind(this)}/>}
                            { this.props.currentStep === 4 && <ButtonAutoZone text='FINISH' width='184px' height='38px' borderColor='#f37f00' backgroundColor= '#f37f00' color='white'  handler={this.finish.bind(this)}/>}
                     </div>
                      
                </div>
    }
} 

const mapStateToProps = state => ({
    currentStep:state.steps.currentStep,
    fullCover:state.steps.fullCover
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentStep: stepNumber => dispatch(setCurrentStep(stepNumber))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(StepWrapper))