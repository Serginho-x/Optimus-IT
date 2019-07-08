import axios from 'axios';

export const GET_POSTS = 'GET_POSTS'
export const getPosts = () => {
    return async (dispatch) => {       
        try {           
            const response = await axios.get('http://localhost:8080/' + 'src/db/postList.json');            
            dispatch({
                type: GET_POSTS,
                payload: response.data
            }); 
        }
        catch(error) {   
            console.log(error.message); 
        }        
    };  
}

export const FETCH_FULL_POST = 'FETCH_FULL_POST'
export const fetchFullPost = (id) => {
    return async (dispatch) => {       
        try {           
            const response = await axios.get('http://localhost:8080/' + `src/db/post-${id}.json`);         
            dispatch({
                type: FETCH_FULL_POST,
                payload: response.data
            }); 
        }
        catch(error) {   
            console.log(error.message); 
        }        
    };  
}

export const GET_TAGS = 'GET_TAGS'
export const getTags = () => {
    return async (dispatch) => {       
        try {           
            const response = await axios.get('http://localhost:8080/' + 'src/db/tags.json');       
            dispatch({
                type: GET_TAGS,
                payload: response.data
            }); 
        }
        catch(error) {   
            console.log(error.message); 
        }        
    };  
}

export const FILTER_TAG = 'FILTER_TAG'
export const filterTag = filterType => {
  return {
    type: FILTER_TAG,
    payload: filterType    
  }
}

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (modalProps) => {  
    return {
        type: SHOW_MODAL,
        payload: modalProps
    };    
}

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => { 
    return {
        type: HIDE_MODAL       
    }
}