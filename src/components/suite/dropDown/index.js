import React from 'react';
import './DropDown.scss'
import arrow from '../../../assets/sort/Sort 2.png'

const Label =(props)=>  <label className={props.floating?"floating":"resting"}>
                                <span>* &nbsp;</span>
                                {props.labelText}
                                &nbsp;
                        </label>

export default class DropDown extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {open:false}
    }

    componentWillMount(){
        document.addEventListener('mousedown',this.handleClick.bind(this),false)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClick.bind(this),false)
    }

    handleClick(e){

        try{
            if(this.node !== null && this.node !== undefined && this.node.contains(e.target))
            return;
        
            this.close()
        }
        catch(e){

        }

    }

    toggle(){
       this.setState({open:!this.state.open})
    }

    close(){
        this.setState({open:false})
    }

    render(){

       const {open} = this.state
       const {selected,labelText,width} = this.props

       const inputWidth =  (parseInt(width)-40).toString()+'px'

        
       return <div className="dropdown" style={{width:width+'px'}} ref={(node) => { this.node = node }}>

                <Label labelText={labelText} floating={ selected !== "" ?true:false}/>
                <div className="head" onClick={()=>this.toggle()}>
                    <input style={{width:inputWidth}} disabled value={selected}/>
                    <img src={arrow} alt='arrow'/>
                </div>
                
                {open && <div className="dropDownBody" style={{width:width+'px'}}>
                                {this.props.children}
                         </div> 
                }
                        
             </div>
    }
}