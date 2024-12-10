import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import pdf1 from '../assets/AryanBagayatkar_InternshalaResume.pdf'

const Hero = () => {
  useGSAP(()=>{
    gsap.from(".hanm",{
      x:-1000,
      duration : 2,
      delay: 1
    })
    gsap.from(".hanm1",{
      x:-600,
      duration : 2,
      delay: 1
    })
    gsap.from(".hanm2",{
      y:40,
      duration : 2,
      delay: 1
    })
  })
  return (
    <div className='row mt-5'>
      <div className="col ">
        <h2 className='mt-5 hanm'>Hello World!</h2>
        <h1 className='mt-4 hanm'>Aryan <br /> Bagayatkar</h1>
        <p className='mt-4 hanm'>Developing a new era web designs and websites with <b>Artifical Intelligence</b> and  <b>3 Dimension Models</b></p>
        <a className='btn btn-dark hanm1' href={pdf1} download="AryanBagayatkar_InternshalaResume.pdf">Resume</a>
      </div>
      <div className="col"></div>
      <div className='shadow-lg mt-5 border-left-0 border border-dark rounded hanm2'>
        <h2 className='p-3'>About Myself</h2>
        <p className='px-3'><span className='text-primary pl-3'>Hello!</span> <br /> Myself <b>Aryan Bagayatkar </b> <br /> a web designer and web developer based in Mumbai. I bring a unique perspective to every project. Additionally, I am a video editor and graphic designer, capturing every moment to craft digital experiences and bring them to life.</p>
      </div>
    </div>
  )
}

export default Hero
