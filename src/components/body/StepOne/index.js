import React from 'react'
import StepWrapper from '../../body/StepWrapper'
import './stepOne.scss'
import InfoProfile from './InfoProfile'
import {connect} from 'react-redux'
import {setOneLanguageUpdateValue,setOneLanguageeSwitchAll,setOneChangeTimeZone} from '../../../redux/actions'
import ButtonAutoZone from '../../suite/button-autozone'
import DropDown from '../../suite/dropDown'
import CheckboxGroup from '../../suite/checkBoxGroup'
import {HOUR_SECTION} from '../../../utilities/constants'
import SimpleList from '../../suite/dropDown/simpleList'
import Week from './week'

class StepOne extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
        this.state={
                    languageSelected:"",
                    timeZoneSelected:"",
                    editingProfile:false
        }

        this.timeZoneDropDown = React.createRef();
    }


    componentDidUpdate(prevProps){ 
        if( JSON.stringify( this.props.stepData[HOUR_SECTION.language]) !== JSON.stringify( prevProps.stepData[HOUR_SECTION.language]))
        {
            let languageSelected = this.props.stepData[HOUR_SECTION.language].items.filter(l=>l.checked === true)
                                                                                    .reduce((total, currentValue,currentIndex)=>{
                                                                                        if(currentIndex === 0)
                                                                                            return currentValue.text
                                                                                        else
                                                                                            return total+", "+currentValue.text
                                                                                    },"")
            this.setState({languageSelected})
            
        }

     

        if( JSON.stringify( this.props.stepData[HOUR_SECTION.timeZone]) !== JSON.stringify( prevProps.stepData[HOUR_SECTION.timeZone]))
        {
            let timeZoneSelected = this.props.stepData[HOUR_SECTION.timeZone].find(t=>t.selected === true).text
                                                                                    
            this.setState({timeZoneSelected})
        }

    }

    editProfile(){

    }

    handleLanguageSwitchAll(data){
        this.props.setOneLanguageeSwitchAll(data)
    }

    handleSetLanguageValue(data){
        this.props.setOneLanguageUpdateValue(data)
    }

    handleTimeZone(id){
        this.props.setOneChangeTimeZone(id)
        this.timeZoneDropDown.current.close();
    }


    render(){
        const {languageSelected,timeZoneSelected,editingProfile} = this.state
        return  <StepWrapper>

                    {!editingProfile && <InfoProfile/>}

                    <div className="informationButtonContainer">
                            <ButtonAutoZone text='EDIT PROFILE' width='168px' height='28px' borderColor='#f37f00' backgroundColor= 'white' color='#f37f00' handler={this.editProfile.bind(this)}/>
                    </div>

                    <div className="detailsBox">
                            <div className="languageHeader">
                                <span>Please check all languages spoken at your shop</span>
                                <div className="languageBar"/>
                            </div>

                            <DropDown labelText="Select" width="367" selected={languageSelected}>
                                <div style={{ padding: '16px 0 0 12px'}}>
                                    <CheckboxGroup section={HOUR_SECTION.language} data={this.props.stepData}   handleSetValue={this.handleSetLanguageValue.bind(this)}
                                                                                                                handleSwitchAll={this.handleLanguageSwitchAll.bind(this)}/>
                                </div>
                              
                            </DropDown>

                            <div className="daysHeader">
                                <span>Please check the days and the hours that you are open. Unselected days will be marked as closed</span>
                                <div className="daysBar"/>
                            </div>

                            <div className="timeHeader">
                                <DropDown labelText="Time Zone" width="352" selected={timeZoneSelected} ref={this.timeZoneDropDown}>
                                    <SimpleList items={this.props.stepData[HOUR_SECTION.timeZone]} handler={this.handleTimeZone.bind(this)}/>
                                </DropDown>
                            </div>

                            <Week />

                    </div>

                </StepWrapper>
    }
}


const mapStateToProps = state => ({
    stepData:state.steps.stepOne,
})

const mapDispatchToProps = dispatch => {
    return {
        setOneLanguageUpdateValue: data => dispatch(setOneLanguageUpdateValue(data)),
        setOneLanguageeSwitchAll: data => dispatch(setOneLanguageeSwitchAll(data)),
        setOneChangeTimeZone: data => dispatch(setOneChangeTimeZone(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(StepOne)

