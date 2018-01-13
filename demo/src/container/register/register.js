import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button,Radio } from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {regisger} from '../../redux/user.redux'
const log = console.log.bind(console)
@connect(
    state=>state.user,
    {regisger}
)
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:"genius",
        }
        this.login = this.login.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }
    login(){
        this.props.history.push('/login')
     }
    handleChange(key,val){
         this.setState({
             [key]:val
        })
    }
    handleRegister(){
        this.props.regisger(this.state)
        log(this.props)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                {this.props.msg? <p className='error-msg'>{this.props.msg}</p>: null}
                <List>
                   
                    <InputItem 
                        onChange={v=>{
                            this.handleChange('user',v)
                        }}
                    > 用户</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={v=>{
                            this.handleChange('pwd',v)
                        }}
                    > 密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={v=>{
                            this.handleChange('repeatpwd',v)
                        }}
                    > 确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem 
                        checked={this.state.type==="genius"}
                        onChange={v=>{
                            this.handleChange('type',"genius")
                        }}
                    >牛人</RadioItem>
                    <WhiteSpace/>
                    <RadioItem 
                        checked={this.state.type==="boss"}
                        onChange={v=>{
                            this.handleChange('type',"boss")
                        }}
                    >Boss</RadioItem>
                    <WhiteSpace/>
                </List>
                <WingBlank>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
                
              </div>
    }
}
export default Register