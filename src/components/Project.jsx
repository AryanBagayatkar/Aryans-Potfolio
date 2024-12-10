import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import image1 from '../assets/image/img1.png'
import image2 from '../assets/image/img2.png'
import image3 from '../assets/image/img3.png'
import image4 from '../assets/image/img4.png'

const Project = () => {
  useGSAP(()=>{
    
    gsap.from(".pnm",{
      ease: "bounce.out",
      duration: 1.5,
      scale: 0.5,
      stagger: 0.2, 
    })
  
  })
  return (
    <div>
      <section id='projects'>
        <h2 className='text-center text-secondary'>Projects</h2>
        <div className="container d-flex ">
        <div className="row justify-content-center ">
          <div className=" col-sm-6 col-12 ">
            <div className="card m-3 pnm" style={{width: '18rem;'}}>
            <img className="card-img-top" src={image1} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Gemini Clone</h5>
              
              <Link className='btn btn-dark' to="/project1">Take a look</Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-12">
            <div className="card m-3 pnm" style={{width: '18rem;'}}>
            <img className="card-img-top" src={image2} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">DoubtBot</h5>
        
              <Link className='btn btn-dark' to="/project2">Take a look</Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-12">
            <div className="card m-3 pnm" style={{width: '18rem;'}}>
            <img className="card-img-top" src={image3} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Lanugage Changer</h5>
              
              <Link className='btn btn-dark' to="/project3">Take a look</Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-12">
            <div className="card m-3 pnm" style={{width: '18rem;'}}>
            <img className="card-img-top" src={image4} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Collage TimeTable</h5>
     
              <Link className='btn btn-dark' to="/project4">Take a look</Link>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
