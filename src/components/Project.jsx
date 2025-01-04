import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import image1 from '../assets/image/img1.png'
import image2 from '../assets/image/img2.png'
import image3 from '../assets/image/img3.png'


const Project = () => {
  return (
    <div>
      <section id='projects'>
        <h2 className='text-center text-secondary'>Work</h2>
        <div className="text-center my-5 ">
     <div className="lg-my-5">
        <Link to="/project1"><h2 className="my-5 display-2 font-weight-bold">Gemini clone</h2></Link>
        <Link to="/project1"><img className='w-50 h-50' src={image1} alt="" /></Link>
      </div>
      <div className="my-5">
        <Link to="/project2"><h2 className="my-5 display-2 font-weight-bold">DoubtBot</h2></Link>
        <Link to="/project2"><img className='img-fluid w-50 h-50' src={image2} alt="" /></Link>
      </div>
      <div className="my-5">
        <Link to="/project3"><h2 className="my-5 display-2 font-weight-bold">Universal Language Converter</h2></Link>
        <Link to="/project3"><img className='img-fluid w-50 h-50' src={image3} alt="" /></Link>
      </div>
    </div>
      </section>
    </div>
  );
};

export default Project;
