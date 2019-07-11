import React from 'react'
import './week.scss'
import Day from './Day'
import {connect} from 'react-redux'
import {HOUR_SECTION} from '../../../../utilities/constants'
import Checkbox from '../../../suite/checkBox'
import TimePicker from './Day/timePicker'
import {setOneChangeDay} from '../../../../redux/actions'

const DayDescription=()=><div className="dayDescription">
                                <span>Open Hours</span>
                                <span>Close Hours</span>
                        </div>

class Week extends React.PureComponent{ // this component needs to be conected to redux
// eslint-disable-next-line
    constructor(props)
    {
        super(props)
    }

    changeDay(item){
        this.props.setOneChangeDay(item)
    }  

    render(){

        const {week} = this.props

        return  <div className="week">
                        
                      <Day initial  body={<DayDescription />}/>
                      {
                        week.map((item,index)=><Day key={index} 
                                                    header={<Checkbox item={item} handler={this.changeDay.bind(this)} />}  
                                                    body={ <TimePicker item={item} />  } 
                                                />)
                      }


                </div>
    }
}

const mapStateToProps = state => ({
    week:state.steps.stepOne[HOUR_SECTION.week]
})

const mapDispatchToProps = dispatch => {
    return {
        setOneChangeDay: data => dispatch(setOneChangeDay(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Week)
