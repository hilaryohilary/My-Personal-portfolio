import React from "react";
import "./about.css";
import Me from "../../assets/me-about.PNG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Hilary Ogochukwu is a 23 years Old Fullstack Blockchain developer with a solid background 
            in Mobile web development. He has been developing web applications for 3 years
            and has a vast knowledge of Javascript, Typescript and Solidity. He is currently working as a freelancer on different
            mobile platforms. He has productive problem solving skills which is channelled towards
            building decentralised applications and DEFI solutions for different projects. 
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Chat</a>
        </div>
      </div>
    </section>
  );
};

export default about;
