import React from 'react'
import './switch.scss'
import cross_gray from '../../../assets/switch/cross_gray_icon.png'
import cross_green from '../../../assets/switch/cross_white_icon.png'

import tick_green from '../../../assets/switch/tick_white_icon.png'
import tick_gray from '../../../assets/switch/tick_gray_icon.png'


export default class Switch extends React.PureComponent{
    constructor(props){
        super(props)

        this.state={
            active:false
        }
    }

    render(){
        const {active} = this.state

        return  <div className="switch">
                    <div className={active?"control active":"control inactive"} onClick={()=>this.setState(previous=>({active:!previous.active}))}>
                        <img src={active?tick_green:tick_gray} alt='activate'/>
                        <span className={active?"span-switch-active":"span-switch-inactive"}>ACTIVATE</span>
                    </div>

                    <div className={!active?"control active":"control inactive"} onClick={()=>this.setState(previous=>({active:!previous.active}))}>
                        <img src={!active?cross_green:cross_gray} alt='deactivate'/>
                        <span className={!active?"span-switch-active":"span-switch-inactive"}>DEACTIVATE</span>
                    </div>
                </div>
    }
}