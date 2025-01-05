import { gsap } from 'gsap';
import React, { useRef ,useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls,  } from '@react-three/drei';
import image1 from '../../public/gov.png'
import image2 from '../../public/react.png';
import image3 from '../../public/courseracert.png';
import { RiExternalLinkLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { LuFigma } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import pdf1 from '../assets/resume.pdf';
import { Link } from 'react-router';
import Rubics from './Rubics';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const neonRef = useRef(null);

  useEffect(() => {
    const neon = neonRef.current;

    if (!neon) return;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      neon.style.setProperty("--mouse-x", `${clientX}px`);
      neon.style.setProperty("--mouse-y", `${clientY}px`);
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    // GSAP animation for sections
    gsap.fromTo(
      '.hanm2',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hanm2',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.hanm2 h2',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hanm2',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.text-reveal',
      { y: 50, scale: 1.2, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.hanm2',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.experience-section h2',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.skill .nn',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.skill :not(.nn)',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 90%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#certificate-heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#certificate-heading",
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".certificate-card",
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".certificate-card",
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
       <div
      className="fullscreen-container d-flex flex-column justify-content-center align-items-center text-center vh-100 neon-container"
      ref={neonRef}
    >
      <h1 className="mt-4 hanm text-uppercase display-1 h1">Aryan Bagayatkar</h1>
      <p className="mt-4 hanm text-uppercase">Web Designer | Front end web developer</p>
      <button className="custom-btn hanm1">
        <a href={pdf1} download="resume.pdf">Resume</a>
      </button>
    </div>

      <div className='hanm2'>
        <h2 className='text-start display-2 mx-5 h1 ff'>About Myself</h2>
        <p className="justify-content-center text-uppercase display-4 h2 p-5">
          <span className="text-reveal text-primary">Hello! </span>
          <span className="text-reveal">Myself </span>
          <span className="text-reveal"><b>Aryan Bagayatkar</b></span>
          <span className="text-reveal">
            {' '}a web designer and web developer based in Mumbai. I bring a unique perspective to every project.
          </span>
          <span className="text-reveal">
            {' '}Additionally, I am a video editor and graphic designer, capturing every moment to craft digital experiences and bring them to life.
          </span>
        </p>
      </div>
      <div className="experience-section py-5">
        <h2 className='text-start display-2 mx-5 h1 ff'>Experience</h2>
        <div className="row mx-5 my-5">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="card card-left shadow-lg p-4">
              <h3>Full Stack Web Developer Intern</h3>
              <p>Company : Nullclass</p>
              <p>Location : Remote</p>
              <p>Duration: 8 July 2024 - 8 Aug 2024</p>
              <Link to={"/Experience1"}>Check it out <RiExternalLinkLine /></Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div className="card card-right shadow-lg p-4">
              <h3>Full Stack Web Developer Intern</h3>
              <p>Company : Bharat Intern</p>
              <p>Location : Remote</p>
              <p>Duration: 10 Dec 2023 - 10 Jan 2024</p>
              <Link to={"/Experience2"}>Check it out <RiExternalLinkLine /></Link>
            </div>
          </div>
          {/* card3 */}
          <div className="col-md-6 mb-4">
            <div className="card card-right shadow-lg p-4">
              <h3>Python Developer Intern</h3>
              <p>Company : Pinacale</p>
              <p>Location : Kharghar</p>
              <p>Duration: 6 July 2022 - 12 Aug 2022</p>
              <Link to={"/Exprience3"}>Check it out <RiExternalLinkLine /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-container py-5 text-center">
        <div className="skill d-flex justify-content-center flex-wrap gap-4">
          <IoLogoHtml5 className="icon" />
          <IoLogoCss3 className="icon" />
          <FaJsSquare className="nn icon" />
          <IoLogoReact className="nn icon" />
          <SiMongodb className="nn icon" />
          <LuFigma className="nn icon" />
          <IoLogoGithub className="icon" />
        </div>
      </div>

      <div className="certificate my-5">
        <h2 className="text-start display-4 mx-5 h1 ff" id='certificate-heading'>Certificates</h2>
        <div className="row mx-0 px-5 py-5">
          {/* Certificate 1 */}
          <div className="certificate-card col-lg-4 col-md-6 col-sm-12 text-center p-3">
            <img
              src={image1}
              alt="Certificate 1"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <h3 className="mt-3">Web Design and development</h3>
            <h3 className="text-primary">Skill India</h3>
          </div>
          {/* Certificate 2 */}
          <div className="certificate-card col-lg-4 col-md-6 col-sm-12 text-center p-3">
            <img
              src={image2}
              alt="Certificate 2"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <h3 className="mt-3">React Bootcamp</h3>
            <h3 className="text-primary">Let's Upgrade</h3>
          </div>
          {/* Certificate 3 */}
          <div className="certificate-card col-lg-4 col-md-6 col-sm-12 text-center p-3">
            <img
              src={image3}
              alt="Certificate 3"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <h3 className="mt-3">Introducation to web development</h3>
            <h3 className="text-primary">Coursera</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
