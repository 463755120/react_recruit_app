import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import {counter,addGUN,removeGUN,removeGUNAsync} from'./index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension():()=>{}
const store = createStore(counter,compose(
    applyMiddleware(thunk),reduxDevtools
))
function render(){
    ReactDOM.render(<App store={store} removeGUNAsync = {removeGUNAsync} addGUN = {addGUN} removeGUN = {removeGUN}/>,document.getElementById("root"))
}
render()
store.subscribe(render)