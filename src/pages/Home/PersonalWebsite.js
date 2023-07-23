import React, { Component, useEffect } from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import projectPhoto from "../../assets/personal-website-photo.png";
import {FaGithub } from 'react-icons/fa';
import pw_image1 from "../../assets/FirestoreExample.png";
import pw_image2 from "../../assets/ComponentsExample.png";



export default function PersonalWebsite() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const projectTags = "React JS,Three JS,Firebase"
    const tags = projectTags.split(",");
    const renderTags = tags.map((tag) => (
        <div className="projects-tag">{tag}</div>
    ));

  return (
    <div style={{paddingBottom: "5%"}}className='format3'>
      
            <div className='navigateHomeButton'>
            <Button 
                color1= {"#FFFFFF"}
                children = {"go back home"}
                onClick={handleClick}
                size={"500"}
                fontSize= {"1.3rem"}
                ></Button>
            </div>
        <h1 className='subheading2'>Personal Website</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='github-link'>
        <FaGithub className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/vaishunall/website" target="_blank">
                    Github Repo
                    </a>
        </div>
          

        

        <div className='format4'>
        <h1 className='subheading2' style={{textAlign: "left"}}>TechStack</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
          For this project, I decided to utilize React and Three.js for the frontend. 
          I’ve been interested 3d animations and I found Three JS, a library that uses WEBGL for 3d rendering, and used it to render the distorting sphere on the home page. 
        </h1>

        <h1 className='subheading2' style={{textAlign: "left"}}>Components</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
        When creating my website, I noticed that there were a lot of repeating elements, such as the project cards in the Projects section. To reduce code redundancy and make editing easier in the future, I created a custom card component that takes in the fields for the project card as parameters. This allows me to edit or create new project cards by simply changing the parameters being passed.
        </h1>
        <img className='example-image' src={pw_image2}></img>

        <h1 className='subheading2' style={{textAlign: "left"}}>Feedback Form</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
          I wanted a way to get people’s thoughts and feedback about 
          the website as it was newly made. So I implemented a form using Firebase and set up a simple Firestore Database that stores the name and the feedback 
          from each response.
        </h1>

        <img className='example-image' src={pw_image1}></img>


        </div>
       
      </div>
  )
}


