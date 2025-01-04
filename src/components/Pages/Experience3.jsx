import React from 'react'
import icert from '../../../public/icert.png'

const Experience3 = () => {
  return (
    <div className="experience-section py-5">
        <div className="container">
          {/* Header Section */}
          <h1 className="text-capitalize text-center">Python Developer</h1>
          <h3 className="text-primary text-center">
            Bharat Intern <span className="text-muted">, Navi Mumbai</span>
          </h3>
          <p className="text-center">Kharghar</p>
          <hr />
      
          {/* Projects Section */}
          <div className="projects-section mt-4">
            <h3 className="text-center">Projects</h3>
            <ul className="list-unstyled text-center">
              <li>Tic Tac Toe</li>
            </ul>
          </div>
          <hr />
      
          {/* Internship Certificate Section */}
          <div className="certificate-section mt-4 text-center">
            <h3>Internship Certificate</h3>
            <div className="row justify-content-center py-3">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <img
                   src={icert}
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

export default Experience3
