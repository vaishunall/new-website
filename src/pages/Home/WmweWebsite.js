import React, {useEffect} from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaGithub, FaLink } from 'react-icons/fa';
import wmwe_image1 from "../../assets/WmweWebsiteExample.png";

export default function WmweWebsite() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/");
    };
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const projectTags = "React JS,Project Management"
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
        <h1 className='subheading2'>WMWE Website</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='projects-links-display'>
        <div className='github-link'>
        <FaLink className="icon-contact"></FaLink>
              <a className="subheading3" href="https://wmwe.github.io" target="_blank">
                    Website Link
                    </a>
        </div>
        <div className='github-link'>
        <FaGithub style={{maxHeight: "30"}} className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/wmwe/wmwe-website" target="_blank">
                    Github Repo
                    </a>
        </div>

        </div>
          

        

        <div className='format4'>
        <img className='example-image' src={wmwe_image1}></img>
        <h1 className='subheading2' style={{textAlign: "left"}}>The Purpose</h1>
        <h1 className='body2' style={{textAlign: "left"}}> 
        As an active member of the Women Mentoring Women in Engineering (WMWE), I noticed that our current system was unorganized and had updates/event information spread over multiple platforms resulting in a fragmented user experience. In response to this, I decided to lead a team of 2 to create a new organized website with features to enhance functionality, including a Google calendar for events and a login system that provides personalized information to our members.
        </h1>



        </div>
       
      </div>

  )
}
