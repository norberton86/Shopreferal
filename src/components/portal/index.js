import React from 'react'
import ReactDom from 'react-dom'
import './portal.scss'

const Portal = props => { return ReactDom.createPortal( <div className="portal"> 
                                                    {props.children}
                                                </div>, document.getElementById('portal-root'))}

export default Portal;