import React from 'react';
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { FaAward } from 'react-icons/fa';



export const Card = ({projectName, projectDescription, projectTags, image, navigateTo, award}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${navigateTo}`);
  }
  
  const tags = projectTags.split(",");

  const renderTags = tags.map((tag) => (
    <div className="projects-tag">{tag}</div>
  ));
 
  return(
    
    <div className="projects-card">
              <img className="projects-image" src={image}></img>
              <div className="projects-text-flex">
                <div className="projects-title-flex">
                  <div onClick={handleClick} onHov >
                  <h1 className="subheading2 projects-link" style={{textDecorationLine: "underline", cursor: "pointer"}}>{projectName} </h1>
                  </div>
                  {renderTags}
                </div>
                {award !== null &&
                    <div className='award-container'>
                    <FaAward className="award-icon"></FaAward>
                          <h3 className="body1" style={{margin: 0, fontWeight: 600}}>
                                {award}
                                </h3>
                    </div>
                  }
                <h3 className="body1">{projectDescription}</h3>
              </div>
            </div>
  )
}