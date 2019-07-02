import React from 'react'
import './circle.scss'
import {circleTypes} from '../../../../../utilities/constants'
import checkmark from '../../../../../assets/checkmark/checkmark.png'

export default class Circle extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){

        const {type} = this.props

        if(type == circleTypes.complete){
            return  <div className="complete">
                        <img src={checkmark} alt="Checkmark"/>
                    </div>
        }
        else
            return <div className="circle">
                    <div className={type==circleTypes.inactive?"inner-active":"inner-inactive"}>
                    </div>
                   </div>
    }
}