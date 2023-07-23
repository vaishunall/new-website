import React, {useEffect} from 'react'
import "./Home.css";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {FaGithub } from 'react-icons/fa';

export default function WmweWebsite() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/");
    };
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const projectTags = "React JS"
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
        <h1 className='subheading2'>WMWE Website - In Progress</h1>
        <div className="projectsPageTags">
        {renderTags}
        </div>
        <div className='github-link'>
        <FaGithub className="icon-contact"></FaGithub>
              <a className="subheading3" href="https://github.com/wmwe/wmwe-website" target="_blank">
                    Github Repo
                    </a>
        </div>
          

        

        <div className='format4'>
        <h1 className='subheading2' style={{textAlign: "left"}}>The Purpose</h1>
        <h1 className='body2' style={{textAlign: "left"}}> 
        As an active member of the Women Mentoring Women in Engineering (WMWE), I noticed that our current system was unorganized and had updates/event information spread over multiple platforms resulting in a fragmented user experience. In response to this, I decided to lead a team of 2 to create a new organized website with features to enhance functionality, including a Google calendar for events and a login system that provides personalized information to our members.
        </h1>



        </div>
       
      </div>

  )
}
