import React from 'react'
import './time.scss'
import SimpleList from '../../../../../../suite/dropDown/simpleList'
import {HOURS} from '../../../../../../../utilities/constants'
import arrows from '../../../../../../../assets/sort/Sort.png'

export default class Time extends React.PureComponent{ // this component needs to be conected to redux
    // eslint-disable-next-line
        constructor(props)
        {
            super(props)

            this.state={
                open:false,   
                selected:null
            }
        }

        componentWillMount(){
            document.addEventListener('mousedown',this.handleClick.bind(this),false)
        }
    
        componentWillUnmount(){
            document.removeEventListener('mousedown',this.handleClick.bind(this),false)
        }
    
        handleClick(e){
    
            try{
                if(this.list !== null && this.list !== undefined && this.list.contains(e.target))
                return;
            
                this.setState({open:false})
            }
            catch(e){
    
            }
    
        }

        toggle(){   
            this.setState(pre=>({open:!pre.open}))
        }


        listHandler(id){
            this.setState({selected:id,open:false})
            this.props.handler(HOURS.find(h=>h.id===id).text)
       }


        render(){
           
            const {item} = this.props
            const {open,selected} = this.state

            return <div ref={(list) => { this.list = list }}> 

                            <div className="timer" onClick={()=>this.toggle()} >
                                <span>{item}</span>
                                <img src={arrows} alt='arrows'/>
                            </div>

                            {open && <div className="timePickerList" style={{width:'93px'}}>
                                                <SimpleList items={HOURS} handler={this.listHandler.bind(this)} selected={selected}/>
                                             </div>
                            }
                  </div>
        }
}