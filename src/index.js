import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';;
import { store } from './store/index'
import App from "./components/App.js";
import FullPost from './components/FullPost';
import './styles/App.scss';

export const history = createBrowserHistory(); 

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>       
            <Router history={history}>  
                <Route exact path="/" component={App}/>                
                <Route path="/:id" component={FullPost}/>
            </Router>  
        </BrowserRouter> 
    </Provider>,
    document.getElementById("root")
);
