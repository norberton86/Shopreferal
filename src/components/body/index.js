import React from 'react'
import './body.scss'
import BodyHeader from './body-header'
import HomePage from './homePage'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export default class Body extends React.Component{


    render(){
        return  <div className="body">
                    
                    <BodyHeader/>
                    <div className="body-content">
                        <Router>
                            <Switch>
                                <Route path='/' component = {HomePage} exact />
                                <Route path='/StepOne' component = {StepOne}  />
                                <Route path='/StepTwo' component = {StepTwo}  />
                                <Route path='/StepThree' component = {StepThree}  />
                                <Route path='/StepFour' component = {StepFour}  />
                            </Switch>
                        </Router>
                       
                    </div>
                    
                </div>
    }
} 