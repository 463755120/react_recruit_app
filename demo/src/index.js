import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from'./reducer';
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import Auth from'./Auth';
import Dashboard from './Dashboard';
import { auth } from './Auth.redux';
import { counter } from'./index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}
const store = createStore(reducer,compose(
    applyMiddleware(thunk),reduxDevtools
))
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>             
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                {/* 刷新跳转到指定页面 */}
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>     
    </Provider>),
    document.getElementById("root")
    
)
