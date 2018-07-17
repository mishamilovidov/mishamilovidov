import React, { Component } from 'react';
import './styles.css';
import Header from '../components/Header';
import Blog from './Blog';

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
