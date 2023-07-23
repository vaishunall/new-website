import React, {useEffect} from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaLink , FaGithub} from 'react-icons/fa';
import wingit_image1 from "../../assets/WingItExample.png";

export default function WingIt() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/");
    };
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const projectTags = "React Native,API Integration"
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
        <h1 className='subheading2'>WingIt</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='projects-links-display'>
        <div className='github-link'>
        <FaLink style={{maxHeight: "30"}} className="icon-contact"></FaLink>
              <a className="subheading3" href="https://devpost.com/software/wingit-s1apqd" target="_blank">
                    Dev Post
                    </a>
        </div>
        <div className='github-link'>
        <FaGithub className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/palak-bhargava/Packathon" target="_blank">
                    Github Repo
                    </a>
        </div>

        </div>
          

        

        <div className='format4'>
        <img className='example-image' src={wingit_image1}></img>
        <h1 className='subheading2' style={{textAlign: "left"}}>About the Project</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
          WingIt was the project I created while working with a team of 2 as a Front End Developer at my first hackathon. WingIt is a cross platform Travel 
          Companion App in which users can enter their American Airlines flight number and be presented with the weather, a to-do list, 
          and top attractions near their destination to increase the ease of the trip.
        </h1>

        <h1 className='subheading2' style={{textAlign: "left"}}>API Integration</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
        This project was my first time integrating API calls into React Native. One challenge I faced was how to make the calls, store the response, and display the data. However, after researching and gaining a better understanding of the Fetch API, useEffect, and useState, I was able to overcome this challenge. These three tools made it possible to make the API calls and use the responses effectively.
        </h1>



        </div>
       
      </div>
  )
}
