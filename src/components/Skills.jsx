import { SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { LuFigma } from "react-icons/lu";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const Skills = () => {
  useGSAP(()=>{
    gsap.from(".anmsk",{
      stagger: 1,
      duration : 2,
      delay: 1
    })
  })
  return (
    <div>
      <section id="skill" className="bg-light py-3 py-md-5">
     <h2 className='text-center text-secondary'>Skills</h2>
      <div className="row justify-content-center anmsk" > 
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex align-item-center gap-3">
          <IoLogoHtml5 className="nn "/>
            <div className='text-end'>
              <h4 className='text-end'>HTML</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex gap-3">
          <IoLogoCss3 className="nn"/>
            <div className='text-end'>
              <h4 className='text-end'>CSS</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex align-item-center gap-3">
          <FaJsSquare className="nn"/>
            <div className='text-end'>
              <h4 className='text-end'>JS</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex align-item-center gap-3">
          <IoLogoReact className="nn"/>
            <div className='text-end'>
              <h4 className='text-end'>React</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex align-item-center gap-3">
          <LuFigma className="nn"/>
            <div className='text-end'>
              <h4 className='text-end'>Figma</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 m-2">
          <div className="bg-white shadow-lg p-3 d-flex align-item-start gap-3">
              <SiMongodb className="nn"/>
            <div className='text-end'>
              <h4 className='text-end'>MongoDB</h4>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Skills
