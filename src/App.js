import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Blog from './scenes/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
