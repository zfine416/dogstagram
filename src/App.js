import React, { Component } from 'react';
import Navbar from './components/Navbar';
import PostContainer from './components/PostContainer';
import logo from './logo.svg';
import data from './data/data.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar logo={logo}/>
        <PostContainer data={data}/>
      </div>
    );
  }
}

export default App;
