import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import Form from '../../component/form/form'
const log = console.log.bind(console)
@connect(
    state=>state.user,
    {login}
)
@Form
class Login extends React.Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }
   handleLogin(){
       this.props.login(this.props.state)
   }
   register(){
		this.props.history.push('/register')
	}
    render(){
        return <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                {this.props.msg? <p className='error-msg'>{this.props.msg}</p>: null}
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>{this.props.handleChange('user',v)}}
                        > 用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={v=>{this.props.handleChange('pwd',v)}}
                            type="password"
                        > 密码</InputItem>
                    </List>
                    <Button type="primary"
                        onClick={this.handleLogin}
                    >登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
                </div>
    }
}
export default Login