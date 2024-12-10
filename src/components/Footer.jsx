import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
        </section>
        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 ff">
             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Sitemap
                </h6>
                <p>
                    <a href="#!" className="text-reset">Home</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">About</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Skills</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Project</a>
                </p>
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
                <h6 className="text-uppercase fw-bold mb-4">
                    Social Media
                </h6>
                <p>
                    <a href="https://www.linkedin.com/in/aryan-bagayatkar-86aa782a3/" className="text-reset">Linkdein</a>
                </p>
                <p>
                    <a href="https://www.instagram.com/aryan.bagayatkar/" className="text-reset">Instagram</a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>Mumbai,India</p>
                <p>
                    aryan990leo@gmail.com.com
                </p>
                <p> +91 829 173 5756</p>
                © 2024 Copyright:Aryan-potfolio.com
                
                </div>
            
            </div>
            
            </div>
        </section>
        </footer>

    </div>
  )
}

export default Footer
