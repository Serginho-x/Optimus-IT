import * as type from './actions';

const initialState = {   
    posts: [],
    fullPost: {},
    tags: [],
    filterTag: 'All',
    modalProps: {}
}

export default function (state = initialState, action){ 
    switch(action.type){ 
        case type.GET_POSTS: {         
            return {...state,  posts: action.payload.posts}
        }
        case type.FETCH_FULL_POST: {
            return {...state,  fullPost: action.payload}
        }
        case type.GET_TAGS: {         
            return {...state,  tags: action.payload}
        }
        case type.FILTER_TAG: {
            return {...state, filterTag: action.payload}      
        }      
        case type.SHOW_MODAL: {           
          return {...state, modalProps: action.payload}
        }        
        case type.HIDE_MODAL:
          return {...state, modalProps: {}}
        default:
            return state
    }
}