import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../assets/image/logo-d.png'

function Navbar1() {
  useGSAP(()=>{
    
    gsap.from(".nanm",{
      y:-600,
      duration : 2,
      delay: 1,
      stagger:0.2
    })
  
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg">
      <div className="container-fluid nanm">
        <Link className="navbar-brand sm-text-start" to="/"><img src={logo} alt="logo" id='nl'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
             <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="#skill">Skill</a>
            </li>
            <li className="nav-item">
            <a href="#Contact">Contact</a>
            </li>
            <Link className="nav-link nanm" to="/project">Projects</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
