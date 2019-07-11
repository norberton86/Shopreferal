import React from 'react'
import './box.scss'

const Box = (props) =>  <div className="box" style={{width:props.width}}>
                                <div className="header" style={{backgroundColor:props.backgroundColor,color:props.color}}>
                                    <span className="title">
                                            {props.title.toUpperCase()}
                                    </span>
                                    {props.hint && <span className="hint">
                                            {props.hint}
                                    </span>}
                                </div>

                                <div className="content" >
                                        {props.children}
                                </div>
                        </div>

export default Box;