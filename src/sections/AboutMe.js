import React from 'react';

function AboutMe(props) {
  return (
    <section id="about-me" className="about-me">
      <h2 id="abm">About Me</h2>
      {/* downloads image on initial page load rather than waiting for hover pseudo-class (only works on Firefox) */}
      <div>
        <img id="portrait" src="images/assets/yangchen.jpg" alt="YAngChen" />
      </div>
      <h4 id="introyc">
        As a Full-stack Web Developer, with abackground in engineeringtechnology, I do not back down fromchallenges, but seek resources tosolve that problem with a logicalapproach. My approaches andmethodologies to solving problemsprogrammatically are imaginative --yet systematic
      </h4>
      <h3 id="edu">Education</h3>
      <div className="education">
        <img className="education__logo" src="images/education/PinClipart.com_assembly-clip-art_3859728.png" alt="General Assembly logo" />
        <p className="education__description"><b>Software Engineering Immersive</b>, General Assembly</p>
      </div>
      <div className="education">
        <img className="education__logo" src="images/education/1200px-George_Brown_College_logo.svg.png" alt="George Brown College logo" />
        <p className="education__description"><b>Electro-mechanical Engineering Technician</b>, George Brown College</p>
      </div>
    </section>
  );
}

export default AboutMe;
