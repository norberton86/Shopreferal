import React from 'react'
import StepWrapper from '../../body/StepWrapper'
import './stepThree.scss'
import Box from '../../suite/box'
import CheckboxGroup from '../../suite/checkBoxGroup'
import RadioGroup from '../../suite/radioGroup'
import {SERVICES_SECTION} from '../../../utilities/constants'
import {connect} from 'react-redux'
import {setThreeStepValue,setThreeSwitchAll,setThreeChangeOther,setThreeChangeRadiovalue} from '../../../redux/actions'

class StepThree extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
    }

    handleSwitchAll(data){
        this.props.setThreeSwitchAll(data)
    }

    handleSetValue(data){
        this.props.setThreeStepValue(data)
    }

    handleChangeOther(data){
        this.props.setThreeChangeOther(data)
    }

    handleRadioGroup(id){
        this.props.setThreeChangeRadiovalue(id)
    }

    render(){
        return  <StepWrapper>
                     <Box width='100%' backgroundColor='#6c6f70' color='#ffffff' title='Services Performed and vehicles serviced' hint='(Check all that apply)'>

                        <div className="boxes-horizontal">

                            <Box width='286px' backgroundColor='#e9e9e9' color='#3a3c3d' title='Shop Type'>
                                <RadioGroup items={this.props.stepData[SERVICES_SECTION.shopType].items} handleSetValue={this.handleRadioGroup.bind(this)}/>
                            </Box>

                            <Box width='540px' backgroundColor='#e9e9e9' color='#3a3c3d' title='Services Performed'>
                                <CheckboxGroup  section={SERVICES_SECTION.servicesPerformed} data={this.props.stepData} handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                                        handleSetValue={this.handleSetValue.bind(this)}
                                                                                                                        handleSwitchAll={this.handleSwitchAll.bind(this)}/>
                            </Box>

                            <Box width='286px' backgroundColor='#e9e9e9' color='#3a3c3d' title='Vehicle Serviced'>
                                <CheckboxGroup  section={SERVICES_SECTION.vehicleServiced} data={this.props.stepData}   handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                                        handleSetValue={this.handleSetValue.bind(this)}
                                                                                                                        handleSwitchAll={this.handleSwitchAll.bind(this)}/> 
                            </Box>

                        </div>

                    </Box>
                </StepWrapper>
    }
}

const mapStateToProps = state => ({
    stepData:state.steps.stepThree,
})

const mapDispatchToProps = dispatch => {
    return {
       setThreeStepValue: data => dispatch(setThreeStepValue(data)),
       setThreeSwitchAll: data => dispatch(setThreeSwitchAll(data)),
       setThreeChangeOther: data => dispatch(setThreeChangeOther(data)),
       setThreeChangeRadiovalue: data => dispatch(setThreeChangeRadiovalue(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(StepThree)

