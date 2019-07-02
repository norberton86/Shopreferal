import React from 'react'
import './body.scss'
import BodyHeader from './body-header'
import HomePage from './homePage'
import StepOne from './StepOne'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export default class Body extends React.Component{


    render(){
        return  <div className="body">
                    
                    <BodyHeader/>
                    <div className="body-content">
                        <Router>
                            <Switch>
                                <Route path='/' component={HomePage} exact />
                                <Route path='/StepOne' component={StepOne}  />
                            </Switch>
                        </Router>
                       
                    </div>
                    
                </div>
    }
} 