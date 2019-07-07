import * as type from './actions';

const initialState = {   
    posts: [],
    tags: [],
    filterTag: 'All'
}

export default function (state = initialState, action){ 
    switch(action.type){ 
        case type.GET_POSTS: {         
            return {...state,  posts: action.payload.posts}
        }
        case type.GET_TAGS: {         
            return {...state,  tags: action.payload}
        }
        case type.FILTER_TAG: {
            return {...state, filterTag: action.payload}      
       }
        default:
            return state
    }
}