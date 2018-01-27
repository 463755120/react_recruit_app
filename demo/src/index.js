import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom';
import Authroute from './component/authroute/authroute'
import Login from './container/login/login'
import Register from './container/register/register'
import Bossinfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import reducers from './reducer'
import './config'
import './index.css'


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<Authroute></Authroute>
				<Switch>
					<Route path="/bossinfo" component={Bossinfo}></Route>  
					<Route path="/geniusinfo" component={GeniusInfo}></Route>  
					<Route path="/login" component={Login}></Route>  
					<Route path="/register" component={Register}></Route>  
					<Route path="/chat/:user" component={Chat}></Route>  
					<Route component={Dashboard}></Route>
				</Switch>			
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
