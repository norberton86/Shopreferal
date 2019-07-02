import React from 'react'
import './radio.scss'


export default class Radio extends React.PureComponent{
    constructor(props){
        super(props)

        this.state={
            active:false
        }
    }

    render(){
        const {active} = this.state

        return  <div className="radioButton">
                    <div className={active?'radio radio-active':'radio radio-inactive'} onClick={ () => this.setState(previous => ({active:!previous.active}) )}>
                        {active && <div className="radio-inner"/>}
                    </div>

                    <span className="text">
                        {this.props.text}
                    </span>
                </div>
    }
}