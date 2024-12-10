import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar1 from './components/Navbar1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project1 from './components/Pages/Project1';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project2 from './components/Pages/Project2';
import Project3 from './components/Pages/Project3';
import Project4 from './components/Pages/Project4';


function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
      </div>
       <Hero />
      <hr className="mt-5" />
        <Skills />
      <hr className="mt-5" />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
