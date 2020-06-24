import React, { Component } from 'react';
import './styles.css';
import linkedin from './icons/linkedin.png';
import github from './icons/github.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src="//www.gravatar.com/avatar/fcb755908eac859bac7ab6632212dd51?s=300" className="logo" alt="profile" />
        <h1 className="title">Misha Milovidov</h1>
        <h5 className="subtitle">
          devops <a href="//twitter.com/adobe" target="_blank" rel="noopener noreferrer">@adobe</a> | <a href="//twitter.com/byu" target="_blank" rel="noopener noreferrer">@byu</a> alum
        </h5>
        <div className="icons">
          <span className="icon">
            <a href="//www.linkedin.com/in/mishamilovidov/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Misha Milovidov's LinkedIn" />
            </a>
          </span>
          <span className="icon">
            <a href="//github.com/mishamilovidov" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Misha Milovidov's GitHub" />
            </a>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
