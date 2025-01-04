import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div>
      <footer
        className={`text-center text-lg-start  sticky-top shadow-lg`}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sitemap</h6>
                <p>
                  <a href="/" className="ff">
                    Home
                  </a>
                </p>
                <p>
                <Link className="ff" to="/contact">Hire me</Link>
                </p>
                <p>
                  <Link className="ff" to="/project">Work</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
                <p>
                  <a
                    href="https://www.linkedin.com/in/aryan-bagayatkar-86aa782a3/"
                    className="ff"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/aryan.bagayatkar/"
                    className="ff"
                  >
                    Instagram
                  </a>
                </p>
                <p><a href="https://github.com/AryanBagayatkar" className='ff'>Github</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="ff">Mumbai, India</p>
                <p className="ff">aryan990leo@gmail.com</p>
                <p className="ff">+91 829 173 5756</p>
              </div>
              <hr />
              <p className="ff text-center">© 2025 Copyright: <a href="https://aryan-potfolio.netlify.app/" className='text-decoration-none'>Aryan-Potfolio</a></p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
