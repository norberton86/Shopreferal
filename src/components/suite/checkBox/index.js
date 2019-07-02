import React from 'react'
import './checkBox.scss'
import checkmark  from '../../../assets/checkmark/checkmark.png'

export default class Checkbox extends React.PureComponent{
    constructor(props){
        super(props)

        this.state={
            active:false
        }
    }

    render(){
        const {active} = this.state

        return  <div className="checkBox">
                    <div className={active?'check check-active':'check check-inactive'} onClick={ () => this.setState(previous => ({active:!previous.active}) )}>
                        {active && <img src={checkmark} alt='checkmark'/>}
                    </div>

                    <span className="text">
                        {this.props.text}
                    </span>
                </div>
    }
}