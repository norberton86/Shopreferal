import {combineReducers}  from 'redux'
import stepReducer from './stepReducer'

export default combineReducers({
    steps:stepReducer
})