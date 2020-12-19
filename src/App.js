import React, { Component } from 'react'
import './App.css';
import Postform from './components/PostForm'


class App extends Component{
  render(){
    return (
      <div className="App">
          <Postform></Postform>
      </div>
    );
  }
}

export default App;
