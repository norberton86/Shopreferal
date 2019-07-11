import React from 'react'
import './checkboxGroup.scss'
import CheckBox from '../checkBox'


export default class CheckboxGroup extends React.Component{

    constructor(props){
        super(props)

        this.state={
            otherOpen:false,
            all:false
        }
    }

    componentDidMount(){
        const {data,section} = this.props

        if(data[section].other !== '')
            this.setState({otherOpen:true})
    }

    switchOpen(){
        this.setState(previous=>({otherOpen:!previous.otherOpen}))
    }

    switchAll(){
        let all = !this.state.all
        this.setState({all})
        this.props.handleSwitchAll({section:this.props.section,value:all})
        
    }

    changeValue(data){
        this.props.handleSetValue(data)
    }

    changeOther(event){
       this.props.handleChangeOther({section:this.props.section,value:event.target.value})     
    }

    render(){

        const {data,section,other} = this.props
        const {otherOpen,all} = this.state

        return  <div className="checkboxGroup">

                    <CheckBox item={{text:'Check All',checked:all}} handler={this.switchAll.bind(this)} />
                    <div className='divider' />

                    <div className="content">
                        <div className="half">
                            {
                                data[section].items.map((item,index)=> item.half === 1?<CheckBox item={item}  key={index}  handler={this.changeValue.bind(this)}/>:null)
                            }

                            {other && <CheckBox item={{text:'Other',checked:otherOpen}} handler={this.switchOpen.bind(this)} />}

                        </div>

                        <div className="half">
                            {
                                data[section].items.map((item,index)=> item.half !== 1?<CheckBox key={index} item={item} handler={this.changeValue.bind(this)}/>:null)
                            }
                        </div>
                    </div>

                    {this.state.otherOpen  && <input value={data[section].other} onChange={(event)=>this.changeOther(event)}/>}

                </div>
    }

}