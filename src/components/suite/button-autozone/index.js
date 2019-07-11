import React from 'react'
import './button-autozone.scss'

export default class ButtonAutoZone extends React.PureComponent{
// eslint-disable-next-line
    constructor(props)
    {
        super(props)
    }

    render(){

        const{text,width,height,borderColor,backgroundColor,color} = this.props

        return <button style={{width,height,borderColor,backgroundColor,color}} onClick={()=>this.props.handler()}>
                  {text}
               </button>
    }
}
