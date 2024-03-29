import React from 'react';

function Skills(props) {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div>
        <div className="skill-level">
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/javascript.svg" alt="" />
            <span className="skill__label">JavaScript</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/html5.svg" alt="" />
            <span className="skill__label">HTML 5</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/css3.svg" alt="" />
            <span className="skill__label">CSS 3</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/nodejs-seeklogo.com.svg" alt="" />
            <span className="skill__label">Node.js</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/python.svg" alt="" />
            <span className="skill__label">Python</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/c.svg" alt="" />
            <span className="skill__label">C</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/c++.svg" alt="" />
            <span className="skill__label">C++</span>
          </div>
        </div>
        <div className="skill-level">
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/mongodb-icon.svg" alt="" />
            <span className="skill__label">MongoDB</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/PostgreSQL_logo.3colors.svg" alt="" />
            <span className="skill__label">PostgreSQL</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/firebase.svg" alt="" />
            <span className="skill__label">FireBase</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/django-logo-positive.svg" alt="" />
            <span className="skill__label">Django</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/react.svg" alt="" />
            <span className="skill__label">React</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/ruby.svg" alt="" />
            <span className="skill__label">Ruby</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/Ruby_On_Rails.svg" alt="" />
            <span className="skill__label">Rails</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/Azure.svg" alt="" />
            <span className="skill__label">Azure Dev-Ops</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/Selenium_logo.svg" alt="" />
            <span className="skill__label">Selenium</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/microsoft-sql-server-logo-svgrepo-com.svg" alt="" />
            <span className="skill__label">Microsoft Server SQL</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/PowerShell.svg" alt="" />
            <span className="skill__label">PowerShell</span>
          </div>
        </div>
      </div>
      <div className="radargraph-holder" aria-hidden="true"></div>
    </section>
  );
}

export default Skills;
