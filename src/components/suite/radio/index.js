import React from 'react'
import './radio.scss'


export default class Radio extends React.PureComponent{
    // eslint-disable-next-line
    constructor(props){
        super(props)

    }

    render(){
        const {item,handler} = this.props

        return  <div className="radioButton">
                    <div className={item.checked?'radio radio-active':'radio radio-inactive'} onClick={ () => handler(item.id) }>
                        {item.checked && <div className="radio-inner"/>}
                    </div>

                    <span className="text">
                        {item.text}
                    </span>
                </div>
    }
}