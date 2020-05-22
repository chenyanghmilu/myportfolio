import React from 'react';

function Projects(props) {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3 className="project-item__title">Online Store </h3>
        <a title="Go to Blog demo page" target="blank" href="https://ycstoreonline.herokuapp.com">
          <img className="project-item__image" alt="" src="images/projects/onlineStore.png" />
        </a>
        <p className="project-item__description">
          Created a full-stack online store application which is e-commerce demo to signup and login; show shop items; add to cart; payment system API.
          <br />Technology: <b>React</b>, <b>Redux</b>, <b>SCSS</b>, <b>NodeJS</b> and <b>Firebase</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Blog </h3>
        <a title="Go to Blog demo page" target="blank" href="http://yangchenblog.herokuapp.com">
          <img className="project-item__image" alt="" src="images/projects/blog.png" />
        </a>
        <p className="project-item__description">
          Created a full-stack blog application which allowed users to create/edit/update/delete articles with their own account and also allowed other users to comment on the articles.
          <br />Technology: <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>Mongoose</b> and <b>Passport JWT</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title"> BookFellas </h3>
        <a title="Go to bookfellas demo page" target="blank" href="https://bookfellas.herokuapp.com/">
          <img className="project-item__image" alt="" src="images/projects/bookfellas.png" />
        </a>
        <p className="project-item__description">
          Collaborated with a team of three in the creation and testing of an e-commerce bookstore website, allowing customers to search and order books online.
          Built with <b>Python</b>, <b>Django</b>, <b>PostgreSQL</b>, <b>Boostrap</b>, <b>JavaScript</b>, <b>jQuery</b> and <b>Google book API</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title"> Burn Your Calorie </h3>
        <a title="Go to BYC demo page" target="blank" href="https://burn-your-calorie.herokuapp.com/">
          <img className="project-item__image" alt="" src="images/projects/byc.png" />
        </a>
        <p className="project-item__description">
          Developed a fitness social community web for users to share their classes and search healthy meal plans to identify their workout patterns.
          <br />Technology: <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>Mongoose</b> and <b>Passport OAuth2</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Five-In-A-Row </h3>
        <a title="Go to five-in-a-row demo page" target="blank" href="https://chenyanghmilu.github.io/Five-in-a-row/">
          <img className="project-item__image" alt="" src="images/projects/fiveinarow.png" />
        </a>
        <p className="project-item__description">
          A web-based recreation of the popular game Gomoku using DOM manipulation. Built with <b>HTML</b>,  <b>CSS</b>, and <b>JavaScript (ES6)</b>.
        </p>
      </div>
    </section>
  );
}

export default Projects;
