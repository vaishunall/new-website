import React, {useEffect} from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaGithub } from 'react-icons/fa';
import MimicDemo from "../../assets/Mimic_Demo_High.mp4"

export default function Mimic() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/");
    };
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const projectTags = "React Native,Async Storage"
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
        <h1 className='subheading2'>Mimic</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='github-link'>
        <FaGithub className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/acm-projects/Mimic" target="_blank">
                    Github Repo
                    </a>
        </div>
          

        

        <div className='format4'>
        <video src={MimicDemo} width="600" height="300" controls="controls" autoplay="true" />
        <h1 className='subheading2' style={{textAlign: "left"}}>About the Project</h1>
        <h1 className='body1' style={{textAlign: "left"}}>
        Mimic is an iOS Mobile app that allows users to discreetly initiate fake calls to get out of dangerous
         and uncomfortable situations. For this project, I worked as a Full Stack developer on a team of 4.
        </h1>
        <h1 className='subheading2' style={{textAlign: "left"}}>Async Storage</h1>
        <h1 className='body1' style={{textAlign: "left"}}>
        The team ran into a roadblock about whether to use cloud or local storage for our app. Cloud offers faster 
        retrieval, larger storage, and the ability to implement other features such as a login system, but requires a 
        connection. Local storage is slower, but provides accessibility everywhere. Since we only needed to store 
        small amounts of data and decided to prioritize availability regardless of connectivity, we opted for Async 
        Storage to store user settings. This was able to store our data locally and allow it to persist across reboots.
        </h1>



        </div>
       
      </div>
  )
}
