import React from 'react'
import Circle from './Cirle'
import {circleTypes} from '../../../../utilities/constants'
import './step.scss'

export default class Step extends React.PureComponent{
    
    constructor(props)
    {
        super(props)
    }

    render(){

        const {type,firstName,lastName,width,marginLeft} = this.props
        return <div className="step" style={{width,marginLeft}}>
                      <Circle type={type}/>
                      <div className="name"> 
                         <span className={type==circleTypes.inactive?'inactive':'active'}> {firstName.toUpperCase()}</span>
                         <span className={type==circleTypes.inactive?'inactive':'active'}> {lastName.toUpperCase()}</span>
                      </div>
               </div>
    }
}