import React from 'react'
import StepWrapper from '../../body/StepWrapper'
import './stepOne.scss'

export default class StepOne extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return  <StepWrapper>
                    <h1>Shop information and hours</h1>
                </StepWrapper>
    }
}

