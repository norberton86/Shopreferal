import React from 'react'
import './timePicker.scss'
import Time from './time'
import {setOneChangeHours}  from '../../../../../../redux/actions'
import {connect} from 'react-redux'

class TimePicker extends React.PureComponent{ // this component needs to be conected to redux
    // eslint-disable-next-line
        constructor(props)
        {
            super(props)

        }

        changeOpen(text){
          this.props.setOneChangeHours({id:this.props.item.id,text:text,open:true})
        }

        changeClose(text){
            this.props.setOneChangeHours({id:this.props.item.id,text:text,open:false})
          }

        render(){
    
            const {item} = this.props
    
            return  <div className="timePicker">
                        
                        <div className="openHours">
                            <Time item={item.open} handler={this.changeOpen.bind(this)}/>
                        </div>

                        <div>
                            <Time item={item.close} handler={this.changeClose.bind(this)}/>
                        </div>

                    </div>
        }
}

const mapDispatchToProps = dispatch => {
    return {
        setOneChangeHours: data => dispatch(setOneChangeHours(data))
    };
};

export default connect(null,mapDispatchToProps)(TimePicker)