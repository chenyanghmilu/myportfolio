import React from 'react';

function Intro(props) {
  let isLoading = props.isLoading;
  return (
    <section id="intro" className={"intro" + (!isLoading ? " intro--loading-done" : "")}>
      <div className="sunburst"></div>
      <div className="outer">
        <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>
      </div>
      <div id="hill1"></div>
      <div id="hill1-clone"></div>
      <div id="hill2"></div>
      <div id="hill2-clone"></div>
      <div id="hill3"></div>
      <div id="hill3-clone"></div>
      <h1 className="intro__name animated"><span>Yang<br />Chen</span></h1>
      <div className="intro__title animated">Software Engineer.</div>
    </section>
  );
}

export default Intro;
