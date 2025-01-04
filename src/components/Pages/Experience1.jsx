import React from 'react'
import offer1 from '../../../public/nullol.png'
import offer3 from '../../../public/nulltl.png'
import offer4 from '../../../public/nulllor.png'
import offer5 from '../../../public/nullcert.png'

const Experience1 = () => {
  return (
    <div className="experience-section">
  <div className="container py-5">
    <h1 className="text-capitalize text-center">Full Stack Web Developer</h1>
    <h3 className="text-primary text-center">
      Null Class <span className="text-muted">, Tamil Nadu</span>
    </h3>
    <p className="text-center">Remote</p>
    <hr />
    <p className="text-center">Duration - 1 Month</p>
    <div className="text-center mt-4">
      <h3>Projects</h3>
      <ul className="list-unstyled">
        <li>Lanuage Converter</li>
        <li>Stackoverflow Clone</li>
      </ul>
    </div>
    <hr />
    <div className="certificates mt-4">
      <h2 className="text-center">Offer Letter</h2>
      <div className="row justify-content-center py-3">
        <div className="certificate-card col-lg-4 col-md-6 col-sm-12 text-center p-3">
          <img
            src={offer1}
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
            alt="Offer Letter"
          />
        </div>
      </div>
      <hr />
      <h3 className="text-center">Training Certificate</h3>
      <div className="row justify-content-center py-3">
        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
          <img
             src={offer3}
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
            alt="Training Certificate"
          />
        </div>
      </div>
      <hr />
      <h3 className="text-center">Internship Certificate</h3>
      <div className="row justify-content-center py-3">
        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
          <img
             src={offer5}
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
            alt="Internship Certificate"
          />
        </div>
      </div>
      <hr />
      <h3 className="text-center">Letter of Recommendation</h3>
      <div className="row justify-content-center py-3">
        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
          <img
             src={offer4}
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
            alt="Letter of Recommendation"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Experience1
