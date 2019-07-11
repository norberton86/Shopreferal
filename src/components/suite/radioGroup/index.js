import React from 'react'
import './radioGroup.scss'
import Radio from '../radio'


export default class RadioGroup extends React.Component{
// eslint-disable-next-line
    constructor(props){
        super(props)
    }

    changeValue(data){
        this.props.handleSetValue(data)
    }


    render(){

        const {items} = this.props

        return  <div className="radioGroup">

                   
                        <div className="half">
                            {
                                items.map((item,index)=> item.half === 1?<Radio item={item}  key={index}  handler={this.changeValue.bind(this)}/>:null)
                            }


                        </div>

                        <div className="half">
                            {
                                items.map((item,index)=> item.half !== 1?<Radio key={index} item={item} handler={this.changeValue.bind(this)}/>:null)
                            }
                        </div>
                    


                </div>
    }

}