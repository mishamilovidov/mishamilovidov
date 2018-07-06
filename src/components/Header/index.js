import React, { Component } from 'react';
import './styles.css';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import gitlab from './icons/gitlab.png';

class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <img src="//www.gravatar.com/avatar/fcb755908eac859bac7ab6632212dd51?s=300" className="Header-logo" alt="profile" />
        <h1 className="Header-title">Misha Milovidov</h1>
        <h5 className="Header-subtitle">Software Engineer | Hippopotamus Admirer | Fixed-Gear Cyclist</h5>
        <div className="Header-icons">
          <span className="Header-icon">
            <a href="//www.linkedin.com/in/mmilovidov/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Misha Milovidov's LinkedIn" />
            </a>
          </span>
          <span className="Header-icon">
            <a href="//www.instagram.com/m_milovidov/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Misha Milovidov's Instagram" />
            </a>
          </span>
          <span className="Header-icon">
            <a href="//twitter.com/m_milovidov" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Misha Milovidov's Twitter" />
            </a>
          </span>
          <span className="Header-icon">
            <a href="//www.facebook.com/m.alexeyvich" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Misha Milovidov's Facebook" />
            </a>
          </span>
          <span className="Header-icon">
            <a href="//www.gitlab.com/users/m_milovidov/projects" target="_blank" rel="noopener noreferrer">
              <img src={gitlab} alt="Misha Milovidov's GitLab" />
            </a>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
