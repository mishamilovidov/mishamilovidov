import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
					<Main />
        </div>
      </div>
    );
  }
}

export default App;
