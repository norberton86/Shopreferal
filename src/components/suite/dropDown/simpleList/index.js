import React from 'react'
import './SimpleList.scss'

export default class SimpleList extends React.PureComponent{
    // eslint-disable-next-line
    constructor(props){
        super(props)
    }

    render(){
    
        const{items,handler,selected} = this.props

        return  <React.Fragment>
                    { items.map((item,index) => <div className={item.selected === true || (selected && selected === item.id ) ?"dropDownElement elementSelected":"dropDownElement"} key={index} onClick={()=>handler(item.id)}>
                                                    {item.text}
                                                </div>)}
                </React.Fragment>
    }
}