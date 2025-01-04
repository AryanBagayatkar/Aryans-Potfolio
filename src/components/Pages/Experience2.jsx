import React from 'react'
import offerlet from '../../../public/bol.png'
import bhct from '../../../public/bhct.png'

const Experience2 = () => {
  return (
    <div className="experience-section py-5">
    <div className="container">
      {/* Header Section */}
      <h1 className="text-capitalize text-center">Full Stack Web Developer</h1>
      <h3 className="text-primary text-center">
        Bharat Intern <span className="text-muted">, Madhya Pradesh</span>
      </h3>
      <p className="text-center">Remote</p>
      <hr />
  
      {/* Projects Section */}
      <div className="projects-section mt-4">
        <h3 className="text-center">Projects</h3>
        <ul className="list-unstyled text-center">
          <li>Blog Website</li>
          <li>Registration Form</li>
        </ul>
      </div>
  
      <hr />
  
      {/* Offer Letter Section */}
      <div className="offer-letter-section mt-4 text-center">
        <h2>Offer Letter</h2>
        <div className="row justify-content-center py-3">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <img
               src={offerlet}
              alt="Offer Letter"
              className="img-fluid rounded shadow"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
  
      <hr />
  
      {/* Internship Certificate Section */}
      <div className="certificate-section mt-4 text-center">
        <h3>Internship Certificate</h3>
        <div className="row justify-content-center py-3">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <img
               src={bhct}
              alt="Internship Certificate"
              className="img-fluid rounded shadow"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Experience2
