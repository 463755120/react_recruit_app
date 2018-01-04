import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile';

class App extends Component {
  render() {
    const store = this.props.store
    const num = store.getState()
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
        <Button type="primary" onClick = {()=>store.dispatch(addGUN())}>来挺歪把子</Button>
        <Button type="primary" onClick = {()=>store.dispatch(removeGUN())}>上交挺歪把子</Button>
        <Button type="primary" onClick = {()=>store.dispatch(removeGUNAsync())}>托两秒在给挺歪把子</Button>
      </div>
    );
  }
}

export default App;
