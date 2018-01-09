import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import App from "./App";
import {connect} from 'react-redux';
import {logout} from './Auth.redux'


function Erying(){
    return <h2>二营</h2>
}
function Qibinlian(){
    return <h2>骑兵连</h2>
}
@connect(
    state=>state.auth,
    logout
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props)
        const match = this.props.match
        const redirectToLogin =<Redirect to="/login"></Redirect>
        const app = (<div>
            <ul>
                <li>
                    <Link to={`${match.url}/`}>一营</Link> 
                </li>
                <li>
                    <Link to={`${match.url}/eryin`}>二营</Link> 
                </li>
                <li>
                    <Link to={`${match.url}/qibinlian`}>骑兵连</Link> 
                </li>
            </ul>
           <Route path="/Dashboard" exact component={App}></Route>
           <Route path="/Dashboard/eryin" component={Erying}></Route>
           <Route path="/Dashboard/qibinlian" component={Qibinlian}></Route>
        </div>)
        return  this.props.isAuth? app:redirectToLogin
    }
}
 export default Dashboard