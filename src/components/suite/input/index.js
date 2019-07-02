import React from 'react'
import './input.scss'

export default class Input extends React.PureComponent{
    constructor(props){
        super(props)

    }

    render(){
    
        const{title,width,disabled,mandatory} = this.props

        return  <div className="input">
                   
                    <label style={{backgroundColor:disabled?'#e9e9e9':''}}>
                        &nbsp;
                        {mandatory && <span> *</span>}
                        <span> {title}</span>
                        &nbsp;
                    </label>

                    {disabled &&  <input style={{ width,backgroundColor:'#e9e9e9'}} disabled/>}
                    {!disabled &&  <input style={{ width}} />}
                   
                </div>
    }
}