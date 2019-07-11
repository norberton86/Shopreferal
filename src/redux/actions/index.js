import {    UPDATE_STEP,STEP_TWO_UPDATE_VALUE, STEP_TWO_SWITCH_ALL,STEP_TWO_CHANGE_OTHER,
            STEP_THREE_CHANGE_OTHER,STEP_THREE_SWITCH_ALL,STEP_THREE_UPDATE_VALUE,STEP_THREE_CHANGE_RADIO_VALUE,
            STEP_ONE_LANGUAGE_SWITCH_ALL,STEP_ONE_LANGUAGE_UPDATE_VALUE,STEP_ONE_CHANGE_TIME_ZONE,STEP_ONE_CHANGE_DAY,STEP_ONE_CHANGE_HOURS} from './types'

export const setOneLanguageUpdateValue = (data) => dispatch=> { dispatch({type:STEP_ONE_LANGUAGE_UPDATE_VALUE,payload:data}) }

export const setOneLanguageeSwitchAll = (data) => dispatch=> { dispatch({type:STEP_ONE_LANGUAGE_SWITCH_ALL,payload:data}) }

export const setOneChangeTimeZone = (data) => dispatch=> { dispatch({type:STEP_ONE_CHANGE_TIME_ZONE,payload:data}) }

export const setOneChangeDay = (data) => dispatch=> { dispatch({type:STEP_ONE_CHANGE_DAY,payload:data}) }

export const setOneChangeHours = (data) => dispatch=> { dispatch({type:STEP_ONE_CHANGE_HOURS,payload:data}) }



export const setCurrentStep = (step) => dispatch=> { dispatch({type:UPDATE_STEP,payload:step}) }

export const setTwoStepValue = (data) => dispatch=> { dispatch({type:STEP_TWO_UPDATE_VALUE,payload:data}) }

export const setTwoSwitchAll = (data) => dispatch=> { dispatch({type: STEP_TWO_SWITCH_ALL,payload:data}) }

export const setTwoChangeOther = (data) => dispatch=> { dispatch({type:STEP_TWO_CHANGE_OTHER,payload:data}) }



export const setThreeStepValue = (data) => dispatch=> { dispatch({type:STEP_THREE_UPDATE_VALUE,payload:data}) }

export const setThreeSwitchAll = (data) => dispatch=> { dispatch({type: STEP_THREE_SWITCH_ALL,payload:data}) }

export const setThreeChangeOther = (data) => dispatch=> { dispatch({type:STEP_THREE_CHANGE_OTHER,payload:data}) }

export const setThreeChangeRadiovalue = (data) => dispatch=> { dispatch({type:STEP_THREE_CHANGE_RADIO_VALUE,payload:data}) }



/*
export function fetchPosts(){
    return function(dispatch){

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result=>result.json())
        .then(data=> 
                    dispatch({type:FETCH_POST,payload:data}) 
        )

    }
}
*/ 