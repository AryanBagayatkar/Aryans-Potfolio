import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useContext } from 'react'; 
import { ThemeProvider } from './ThemeContext'; 
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
import Experience1 from './components/Pages/Experience1'
import Exprience2 from './components/Pages/Exprience2'
import Expirence3 from './components/Pages/Expirence3'
import ThemeContext from './ThemeContext'; 

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/Experience1" element={<Experience1 />} />
        <Route path="/Exprience2" element={<Exprience2 />} />
        <Route path="/Expirence3" element={<Expirence3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
