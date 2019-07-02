import React from 'react'
import {barTypes} from '../../../../utilities/constants'
import './bar.scss'

const Bar = (props) => <div className={props.type == barTypes.inactive?"bar inactiveBar":"bar activeBar"}/>
export default Bar;
