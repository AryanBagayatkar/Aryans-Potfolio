import React from 'react';
import image1 from '../../assets/image/img1.png'

const Project1 = () => {
  return (
    <div>
      <div className="container">
        <img className='img-fluid' src={image1} alt="An image" />
        <div className='shadow-lg p-4'>
          <h2>Gemini Clone</h2>
          <p>Tools</p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
          </ul>
          <hr />
          <p>Features</p>
          <ul>
            <li>Responsive</li>
            <li>Genrative</li>
            <li>API Driven</li>
          </ul>
          <hr />
          <h4 className='lh-lg'>A Gemini clone typically refers to recreating the functionality or user interface of the Gemini Protocol or its clients. The Gemini Protocol is a lightweight, text-focused internet protocol designed as a middle ground between HTTP (the web) and Gopher. It emphasizes simplicity, privacy, and minimal resource usage. <br />A Gemini Clone is a Genrative AI which uses Google API to give a desired output Gemini will give diffrent answer on same search.</h4>
          <hr />
         
          <a className='btn btn-dark'href="https://aryans-gemini-clone.netlify.app/">Preview</a>
          <a className='btn btn-dark mx-2'href="https://github.com/AryanBagayatkar/BGC1">Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
