import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {Button} from 'antd-mobile';
import{login,getUserData} from "./Auth.redux";
import {Redirect} from 'react-router-dom';
import axios from 'axios';
@connect(
    state=>state.auth,
    {login,getUserData}
)

class Auth extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:{}
    //     }
    // }
    componentDidMount(){
        // axios.get('/data')
        //     .then(res=>{
        //         if(res.status=="200"){
        //             this.setState({data:res.data})
        //         }
        //         console.log(res)
        //     })
        this.props.getUserData()
    }
    render(){
        return <div>
            <h2>我的名字是{this.props.user},我的年龄{this.props.age}岁</h2>
            {this.props.isAuth? <Redirect to="/dashboard"></Redirect>: null}
            <h2>你没有登录，没有权限看小片片</h2>
            <Button type="primary" onClick = {this.props.login}>来挺歪把子</Button>
        </div>
    }
}
 export default Auth