import React, {useEffect} from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaGithub, FaLink } from 'react-icons/fa';
import camcompanion_image1 from "../../assets/CamCompanionExample.gif";

export default function CamCompanion() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const projectTags = "React Native"
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
        <h1 className='subheading2'>CamCompanion</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='projects-links-display'>
        <div className='github-link'>
        <FaLink style={{maxHeight: "30"}} className="icon-contact"></FaLink>
              <a className="subheading3" href="https://devpost.com/software/cam-companion" target="_blank">
                    Dev Post
                    </a>
        </div>
        <div className='github-link'>
        <FaGithub className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/palak-bhargava/wehack-toyota" target="_blank">
                    Github Repo
                    </a>
        </div>

        </div>
          

        

        <div className='format4'>
        <img style={{maxHeight: 350, paddingTop: '2%'}} src={camcompanion_image1}></img>
        <h1 className='subheading2' style={{textAlign: "left"}}>About the Project</h1>
        <h1 className='body2' style={{textAlign: "left"}}>
        This project won 1st place in the Toyota Challenge at WEHack 2022. The prompt was to "develop and create an application with features and services that you feel are valuable for an electric vehicle." One significant challenge faced by electric vehicle owners is the need to charge their cars. Charging a car in an external location can be inconvenient and even dangerous in some cases.
        </h1>
        <h1 className='body2' style={{textAlign:"left"}}>
        To address this issue, we developed CamCompanion. The app utilizes the motion sensors and dashcams built into cars to record footage of suspicious activity. This footage is then sent to the application for users to easily view and interact with. CamCompanion is similar to Ring, but for cars.
        </h1>



        </div>
       
      </div>
  )
}
