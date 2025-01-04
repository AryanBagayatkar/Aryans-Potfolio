import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

function Navbar1() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      className='navbar navbar-expand-lg  sticky-top mx-auto navbar-blur'>
      <div className="container-fluid nanm">
        <Link className="navbar-brand sm-text-start" to="/">
          <h2 className="nav-item ff">Ar<em>y</em>an</h2>
        </Link>
        <button
          className="navbar-toggler collapsed d-flex d-lg-none flex-coloum justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/project">Work</Link>
            </li>
          </ul>
          <div className="theme-toggler mx-auto mx-lg-0 d-block d-lg-inline-block">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className="slider round"></span>
      </label>
    </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
