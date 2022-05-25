import React from 'react';
import './info.css';


export default function Info() {
  return (
      <div className="info-container">
        <img className="about-pic" src="/src/imgs/profilepic1.png" alt="profile-pic" />
        <h1 className="name">Kit Tejido</h1>
        <h5 className="job-title">Frontend Developer</h5>
        <h6 className="address">
          <a href="https://github.com/tejidokit">
            github.com/tejidokit</a>
          </h6> 

        {/* <br/> front-end developer*/}

      <div class="buttons">
        <button class="primary">
          <img className="mail-icon-svg" src="/src/imgs/Mail small.svg"></img>
            <h5>Email</h5>
        </button>
        <button class="primary-ghost">
          <img className="linkedin-icon-svg" src="/src/imgs/linkedin small.svg"></img>
          LinkedIn
        </button>
      </div>
    </div>

    
    
  );
}

