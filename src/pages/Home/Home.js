import React, { Component, useState } from "react";
import name from "../../assets/vyshnaviNalla.png";
import "./Home.css";
import Button from '../../components/Button/Button';
import "../../components/Three/Sphere.js";
import Shape from "../../components/Three/Sphere.js";
import { Card } from "./Card";
import { Feedback } from "./Feedback";
import JavaIcon from "../../assets/Java-skill.png";
import CplusplusIcon from "../../assets/Cplusplus-skill.png";
import JavascriptIcon from "../../assets/Javascript-skill.png";
import HtmlIcon from "../../assets/Html-skill.png";
import CssIcon from "../../assets/Css-skill.png";
import ReactIcon from "../../assets/react_skill.png";
import ReactNativeIcon from "../../assets/reactnative_skill.png";
import FlutterIcon from "../../assets/flutter_skill.png";
import GitIcon from "../../assets/git_skill.png";
import FigmaIcon from "../../assets/figma_skill.png";
import AboutMeImage from "../../assets/image-aboutme.jpg";
import WmweIcon from "../../assets/wmwe-leadership-icon.png";
import AcmIcon from "../../assets/acm-leadership.png";
import {FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';
import personalWebsiteIcon from "../../assets/personal-website-project-icon.png";
import wmweIcon from "../../assets/wmwe-project-icon.png";
import camCompanionIcon from "../../assets/camcompanion-project-icon.png";
import wingitIcon from "../../assets/wingit-project-icon.png";
import mimicIcon from "../../assets/mimic-project-icon.png";



export default class Home extends Component {
  
  render(){
    return (
      <div className='format'>
          <div className='main'>
            <div className='intro'>
            
                <h1 className='subheading1'>hey, it's</h1>
                <img className='vyshnaviNalla' src={name}></img>
                <h1 className='subheading2'>I’m a junior majoring in computer science looking for summer/fall 2023 internships</h1>
                <Button 
                color1= {"#FFFFFF"}
                children = {"get in touch"}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href="mailto:vyshnavinalla1@gmail.com";
                  }}
                size={"500"}
                fontSize= {"1.3rem"}
                ></Button>
            </div>
            <div className="forThree" >
              <Shape></Shape>
            </div>
          </div>
          <h1 className="heading-with-space">scroll to explore</h1>

          <div className="format2">
            <div className="projects" id="projects">

            <h1 className="subheading2" style={{textAlign: "left"}}>projects</h1>
           
            <Card
            projectName= {"Personal Website"}
            projectDescription = {"A personal website I designed and built to establish my professional brand and showcase "
            + "my projects, technical skills, and more about me"}
            projectTags = {"React JS,Three JS,Firebase"}
            image = {personalWebsiteIcon}
            navigateTo = {'/personalwebsite'}
            award = {null}
            ></Card>

            <Card
            projectName= {"WMWE Website"}
            projectDescription = {"A website for WMWE (Women Mentoring Women in Engineering) at UTD built to better organize the biannual mentoring program and present all related information to the mentees and mentors in one place."}
            projectTags = {"React JS"}
            image = {wmweIcon}
            navigateTo = {'/wmwewebsite'}
            award = {null}
            ></Card>

            

           <Card
            projectName= {"CamCompanion"}
            projectDescription = {"A safety mobile app for to ensure a car's safety for owners. It allows owners to easily view and interact with live and recorded video footage sent from their car."}
            projectTags = {"React Native"}
            image = {camCompanionIcon}
            navigateTo = {'/camcompanion'}
            award = {"1st place for Toyota at WEHack 2022"}
            ></Card>

           <Card
            projectName= {"WingIt"}
            projectDescription = {"A cross platform Travel Companion App in which users can enter their American Airlines flight number and be presented with the weather, a to-do list, and top attractions near their destination to increase the ease of the trip."}
            projectTags = {"React Native,API Integration"}
            image = {wingitIcon}
            navigateTo = {'/wingit'}
            award = {"1st place for AA at HackUTD 2021"}
            ></Card>

            <Card
            projectName= {"Mimic"}
            projectDescription = {"An iOS Mobile app that allows users to discreetly " + 
            "initiate fake calls to get out of dangerous and uncomfortable situations."}
            projectTags = {"React Native,Async Storage"}
            image = {mimicIcon}
            navigateTo = {'/mimic'}
            award = {"2nd place at ACM Projects Presentation Night"}
            ></Card>
            

          </div>

          <div className="skills" id="skills">
            <h1 className="subheading2" style={{textAlign: "left"}}>skills</h1>
            <div className="skills-projects">
             
              <div className="ind-skill">
                <img className="skills-image"src={JavaIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>Java</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={CplusplusIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>C++</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={JavascriptIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>JS</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={HtmlIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>HTML</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={CssIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>CSS</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={ReactIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>React</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={ReactNativeIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>React Native</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={FlutterIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>Flutter</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={GitIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>Git</h3>
              </div>
              <div className="ind-skill">
                <img className="skills-image"src={FigmaIcon}></img>
                <h3 className="subheading3" style={{textAlign: "center"}}>Figma</h3>
              </div>
            </div>
          </div>

          <div className="leadership" id="leadership">
            <h1 className="subheading2" style={{textAlign: "left"}}>leadership</h1>
            <div className="flex-leadership">
              <img className="leadership-image" src={WmweIcon}></img>
              <div className="text-leadership">
                <h1 className="subheading3" >Vice President of Women Mentoring Women in Engineering</h1>
                <h3 className="body1" >2022 - Present</h3>
                <ul>
                  <li className="body1" style={{textAlign: "left"}}>Manage 130+ members which include officers, students, and industry mentors to lead new initiatives and effectively communicate with various student organizations and faculty</li>
                  <li className="body1" style={{textAlign: "left"}}>Lead the teaching of technical workshops such as “Firebasics: All about Firebase” and “Intro to UI/UX and Figma”</li>
                </ul>
              </div>
            </div>
            <div className="flex-leadership">
              <img className="leadership-image" src={AcmIcon}></img>
              <div className="text-leadership">
                <h1 className="subheading3">Director of Media at ACM UTD</h1>
                <h3 className="body1">2021 - 2022</h3>
                <ul>
                  <li className="body1" style={{textAlign: "left"}}>Oversaw design and marketing for the largest organization on campus with 500+ members</li>
                  <li className="body1" style={{textAlign: "left"}}>Led a team of 5 design and marketing officers to formulate data driven marketing plans and set them into motion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="aboutMe">
            <h1 className="subheading2" style={{textAlign: "left"}}>about me</h1>
            <div className="flex-aboutme">
              <img className="image-aboutme" src={AboutMeImage}></img>
              <div className="text-flex-aboutme">
                <h1 className="subheading2" style={{textAlign: "left"}}>Howdy! &#x1F920;</h1>
                <h3 className="body1" style={{textAlign: "left"}}>My name is Vyshnavi Nalla and I’m a junior studying Computer Science at the University of Texas at Dallas.  I am passionate about developing new technology to make life easier and finding creative solutions to complex problems. In my free time, I like to try out new food spots, watch Formula 1 racing, and take photos.</h3>

              </div>
            </div>
          </div>

          <div className="contact" id="contact">
          <h1 className="subheading2" style={{textAlign: "left"}}>contact</h1>
          <h3 className="body1" style={{textAlign: "left", marginTop: "30px"}}>I regularly check my linkedin messages and my email, so feel free to reach out! Can’t wait to hear from you :)</h3>
          
          <div className="icon-text-flex">
              <FaEnvelopeSquare className="icon-contact"></FaEnvelopeSquare>
              <a className="subheading-contact" href="mailto:vyshnavinalla1@gmail.com">
                    vyshnavinalla1@gmail.com
                    </a>
          </div>

          <div className="icon-text-flex">
              <FaLinkedin className="icon-contact"> </FaLinkedin>
              <a className="subheading-contact" href="https://www.linkedin.com/in/vyshnavi-nalla/">
              linkedin.com/in/vyshnavi-nalla/
                    </a>
            
          </div>
          </div>
          <Feedback></Feedback>
          </div>

      
      </div>
    )
    }
}
