import React from 'react'
import './day.scss'

export default class Day extends React.PureComponent{ // this component needs to be conected to redux
// eslint-disable-next-line
    constructor(props)
    {
        super(props)
    }

    render(){

        const {header,body,initial} = this.props

        return  <div className="day" style={{borderLeft:initial?"":"none"}}>
                        
                        <div className="dayHeader">
                                {header}
                        </div>

                        <div className="dayBody">
                                {body}
                        </div>

                </div>
    }
}
