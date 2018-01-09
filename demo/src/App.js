import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {addGUN,removeGUN,removeGUNAsync} from'./index.redux';
//装饰器
@connect(
  //你要什么属性放到props里面
  state=>({num:state.counter})
   //你要什么方法放到props里面，会自动dispatch
  ,{addGUN,removeGUN,removeGUNAsync})
class App extends Component {
  render() {
    const num = this.props.num
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const removeGUNAsync = this.props.removeGUNAsync
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button type="primary"></Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>现在有{num}挺歪把子</p>  
        <Button type="primary" onClick = {addGUN}>来挺歪把子</Button>
        <Button type="primary" onClick = {removeGUN}>上交挺歪把子</Button>
        <Button type="primary" onClick = {removeGUNAsync}>托两秒在给挺歪把子</Button>
      </div>
    );
  }
}
// //把状态塞到属性（num）里面
// const mapStatetoProps = (state)=>{
//   return {num:state}
// }
// //影响状态改变的事件
// const actionCreators = {addGUN,removeGUN,removeGUNAsync}
// App = connect(mapStatetoProps,actionCreators)(App)
export default App;
