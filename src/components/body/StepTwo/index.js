import React from 'react'
import StepWrapper from '../../body/StepWrapper'
import './stepTwo.scss'
import Box from '../../suite/box'
import CheckboxGroup from '../../suite/checkBoxGroup'
import {connect} from 'react-redux'
import {setTwoStepValue,setTwoSwitchAll,setTwoChangeOther} from '../../../redux/actions'

class StepTwo extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
    }

    handleSwitchAll(data){
        this.props.setTwoSwitchAll(data)
    }

    handleSetValue(data){
        this.props.setTwoStepValue(data)
    }

    handleChangeOther(data){
        this.props.setTwoChangeOther(data)
    }

    render(){

        return  <StepWrapper>
                    <Box width='100%' backgroundColor='#6c6f70' color='#ffffff' title='shop certification and affiliation' hint='(Check all that apply)'>

                        <div className="boxes-horizontal">
                            <Box width='566px' backgroundColor='#e9e9e9' color='#3a3c3d' title='Certifications and Memberships'>
                                <CheckboxGroup  other section="certifications" data={this.props.stepData} handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                          handleSetValue={this.handleSetValue.bind(this)}
                                                                                                          handleSwitchAll={this.handleSwitchAll.bind(this)}/>
                            </Box>
                            <Box width='566px' backgroundColor='#e9e9e9' color='#3a3c3d' title='other'>
                                <CheckboxGroup  other section="other" data={this.props.stepData} handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                          handleSetValue={this.handleSetValue.bind(this)}
                                                                                                          handleSwitchAll={this.handleSwitchAll.bind(this)}/>
                            </Box>
                        </div>

                        <div className="boxes-horizontal">
                            <Box width='566px' backgroundColor='#e9e9e9' color='#3a3c3d' title='member'>
                                <CheckboxGroup section="member" data={this.props.stepData} handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                          handleSetValue={this.handleSetValue.bind(this)}
                                                                                                          handleSwitchAll={this.handleSwitchAll.bind(this)}/>
                            </Box>
                            <Box width='566px' backgroundColor='#e9e9e9' color='#3a3c3d' title='state'>
                                <CheckboxGroup  section="state" data={this.props.stepData} handleChangeOther={this.handleChangeOther.bind(this)}
                                                                                                          handleSetValue={this.handleSetValue.bind(this)}
                                                                                                          handleSwitchAll={this.handleSwitchAll.bind(this)}/>
                            </Box>
                        </div>

                    
                    </Box>
                </StepWrapper>
    }
}

const mapStateToProps = state => ({
    stepData:state.steps.stepTwo,
})

const mapDispatchToProps = dispatch => {
    return {
        setTwoStepValue: data => dispatch(setTwoStepValue(data)),
        setTwoSwitchAll: data => dispatch(setTwoSwitchAll(data)),
        setTwoChangeOther: data => dispatch(setTwoChangeOther(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(StepTwo)
