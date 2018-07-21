import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './styles.css';
import Routes from './routes';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Routes />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
