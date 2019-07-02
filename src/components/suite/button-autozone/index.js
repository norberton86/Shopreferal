import React from 'react'
import './button-autozone.scss'

export default class ButtonAutoZone extends React.PureComponent{


    render(){

        const{text,width,height,borderColor,backgroundColor,color} = this.props

        return <button style={{width,height,borderColor,backgroundColor,color}}>
                  {text}
               </button>
    }
}
