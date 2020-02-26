import React from 'react';

function Projects(props) {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3 className="project-item__title">Blog <a title="Go to Blog demo page" target="blank" href="http://yangchenblog.herokuapp.com"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/projects/blog.png"/>
        <p className="project-item__description">
          Full-stack blog website created with <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>Mongoose</b> and <b>Passport JWT</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title"> BookFellas <a title="Go to bookfellas demo page" target="blank" href="https://bookfellas.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/projects/bookfellas.png"/>
        <p className="project-item__description">
          Full-stack eCommerce website developed in a collaborative environment. Built with <b>Python</b>, <b>Django</b>, <b>PostgreSQL</b>, <b>Boostrap</b>, <b>JavaScript</b>, <b>jQuery</b> and <b>Google book API</b>. 
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Burn Your Calorie <a title="Go to BYC demo page" target="blank" href="https://burn-your-calorie.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/projects/byc.png"/>
        <p className="project-item__description">
          Full-stack fitness social website built with <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>Mongoose</b> and <b>Passport OAuth2</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Five-In-A-Row <a title="Go to five-in-a-row demo page" target="blank" href="https://chenyanghmilu.github.io/Five-in-a-row/"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/projects/fiveinarow.png"/>
        <p className="project-item__description">
          A web-based recreation of the popular game Gomoku using DOM manipulation. Built with <b>HTML</b>,  <b>CSS</b>, and <b>JavaScript (ES6)</b>.
        </p>
      </div>
    </section>
  );
}

export default Projects;
