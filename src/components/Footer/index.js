/*Import icon links for github, linked in, and twitter */ 
// import React from 'react';

// const Footer = () => { 
//     return(
//         <footer className="w-100 mt-auto text-dark p-4">
//             <div className="container text-center mb-5">
//                 <h4></h4>
//             </div>
//         </footer>
//     )
// }

import React from "react";
import "../styles/Footer.css";
import githubPic from "../assets/images/github.png";
import linkedinPic from "../assets/images/linkedin.png";
import twitterPic from "../assets/images/twitter.png";
import gmailPic from "../assets/images/gmail.png";

export default function Footer() {
  return (
    <footer className="footer-links">
      <a href="https://github.com/laurenagra" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={githubPic}
          alt="link to Sunny's Github"
        />
      </a>

      <a href="www.linkedin.com/in/sunny-agra" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={linkedinPic}
          alt="link to Sunny's LinkedIn Profile"
        />
      </a>
      <a href="mailto:laurenhaileyama@gmail.com" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={gmailPic}
          alt="link to Sunny's Email"
        />
      </a>
      <a href="https://twitter.com/sunnylinguxst" rel="noreferrer" target="_blank">
        <img
          className="linkPic"
          src={twitterPic}
          alt="link to Sunny's Twitter Profile"
        />
      </a>
    </footer>
  );
}