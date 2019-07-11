import React from 'react'
import './checkBox.scss'
import checkmark  from '../../../assets/checkmark/checkmark.png'

export default class Checkbox extends React.PureComponent{
// eslint-disable-next-line
    constructor(props){
        super(props)

    }

    render(){
        const {item,handler} = this.props

        return  <div className="checkBox">
                    <div className={item.checked?'check check-active':'check check-inactive'} onClick={ () => handler(item) }>
                        {item.checked && <img src={checkmark} alt='checkmark'/>}
                    </div>

                    <span className="text" >
                        {item.text}
                    </span>
                </div>
    }
}