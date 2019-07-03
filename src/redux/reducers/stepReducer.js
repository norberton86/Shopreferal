import {UPDATE_STEP} from '../actions/types'

const initialState={
    currentStep:1,
    fullCover:false
}

export default function(state=initialState,action){
    switch(action.type){

        case UPDATE_STEP:
            return{
                ...state,currentStep: action.payload
            }

        default: return state;

    }

}