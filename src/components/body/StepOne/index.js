import React from 'react'

export default class StepOne extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return  <h1 onClick={()=>this.props.history.goBack()}>  
                        Step One
                </h1>
    }
}