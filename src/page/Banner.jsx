import React from 'react';
import { NavLink } from 'react-router-dom';
import TypewriterEffect from "../page/TypewriterEffect"

function PortfolioBanner() {
  return (
    <div className="container">
    <div className="banner">
      <div className="banner-background"></div>
      <div className="banner-content">
        <div className="banner-name"> Gulomov Hasan</div>
        <div className="banner-role">I'm <TypewriterEffect> Frontend Developer</TypewriterEffect> </div>
        <p>Man Gulomov Hasan man hozirda Napa dagi oqishda oqiymi 1yildan beri man Frontend orgavomman unda song Backend o‘qiyman</p>
       <div className="banner-icon">
       <i class="fa-brands fa-facebook fa-2xl"></i>
       <i class="fa-brands fa-instagram fa-2xl"></i>  
       <i class="fa-brands fa-youtube fa-2xl"></i>
       <i class="fa-brands fa-telegram fa-2xl"></i>
       </div>

       <div className="banner-button">
        <NavLink to="about">
        <button>About</button>
        </NavLink>
        <NavLink to="contact">
        <button>Contact</button>
        </NavLink>
       </div>
      </div>
    </div>
    </div>
    
  );
}

export default PortfolioBanner;
