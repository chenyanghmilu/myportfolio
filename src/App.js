import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro.js';
import Experience from './sections/Experience.js';
import Projects from './sections/Projects.js';
import Skills from './sections/Skills.js';
import AboutMe from './sections/AboutMe.js';
import ContactMe from './sections/ContactMe.js';
import Cookies from 'js-cookie';
import Scrollspy from 'react-scrollspy'
import "core-js/stable";
import "regenerator-runtime/runtime";

function App() {
  const [nightModeOn, toggleNightMode] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const [isNavbarActive, toggleNavbar] = useState(false);

  let setNightMode = () => {
    let newValue = !nightModeOn;
    toggleNightMode(newValue);
    Cookies.set("night-mode", newValue, {expires: 1});
  };

  let setNavbar = () => {
    let newValue = !isNavbarActive;
    toggleNavbar(newValue);
  };

  let hideElement = (e) => {
    e.target.classList.add("hidden");
  }

  let imagesLoaded = () => {
    let allImages = document.querySelectorAll('img');
    for (const IMG of allImages) {
      if (!IMG.complete) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (!Cookies.get("night-mode")) {
      Cookies.set("night-mode", "false", {expires: 1});
    }

    if (Cookies.get("night-mode") === "false") {
      toggleNightMode(false);
    } else {
      toggleNightMode(true);
    }

    let checkImagesLoaded = () => {
      if (imagesLoaded()) {
        toggleLoading(false);
      } else {
        setTimeout(checkImagesLoaded, 1000);
      }
    }
    checkImagesLoaded();

  }, []);

  return (
    <div className={"container" + (nightModeOn ? " night-mode" : "")}>
      <div className={"loading" + (!isLoading ? " loading--done" : "")} onTransitionEnd={hideElement}>
        <div className="loading__contents">
          <h1 className="loading__name animated fadeInUp"><span>Yang Chen</span></h1>
        </div>
        <div className="loading__bottom-border"></div>
      </div>
      <Intro isLoading={isLoading} />
      <nav className="navbar">
        <span className="animated fadeInRight night-mode-toggle" onClick={() => setNightMode()}><i className="fas fa-lightbulb"></i></span>
        <span onClick={() => setNavbar()} className="navbar__toggle" id="navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <a href="/" className="navbar__logo">Yang Chen</a>
        <Scrollspy items={ ['intro', 'experience', 'projects', 'skills', 'about-me', 'contact-me'] } currentClassName="is-current" offset={-100} className={"navbar__main" + (isNavbarActive ? " active" : "")} id="navbar-main">
          <li className="hidden">
            <a href="#intro" className="navbar__link"> </a>
          </li>
          <li>
              <a href="#experience" className="navbar__link">Experience</a>
          </li>
          <li>
              <a href="#projects" className="navbar__link">Projects</a>
          </li>
          <li>
              <a href="#skills" className="navbar__link">Skills</a>
          </li>
          <li>
              <a href="#about-me" className="navbar__link">About Me</a>
          </li>
          <li>
              <a href="#contact-me" className="navbar__link">Contact Me</a>
          </li>
        </Scrollspy>
      </nav>
        <Experience />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
      <footer className=""><span id="copyright">©<span id="copyright-year">2020</span> Yang Chen </span></footer>

    </div>
  );
}

export default App;
