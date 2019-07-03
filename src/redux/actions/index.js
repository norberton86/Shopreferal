import { UPDATE_STEP} from './types'

export const setCurrentStep = (step) => dispatch=> { dispatch({type:UPDATE_STEP,payload:step}) }


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