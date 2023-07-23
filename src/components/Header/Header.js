import React, {Component} from 'react';
import "./Header.css";
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {MenuItems} from "./MenuItems";
import logoSphere from "../../assets/sphere_icon.png";

class Header extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <div className='logo-flex'>
                    <h1 className="logo">vyshnavi nalla</h1>
                    <img style={{height: "35px", paddingLeft: "10px"}} src={logoSphere}></img>
                </div>
                

                <div className='menu-icon' onClick={this.handleClick}>
            
                    {this.state.clicked ? <FaTimes className='fa-times'></FaTimes>
                    : <FaBars className='fa-bars'></FaBars>}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" href="#projects">
                                    projects
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#skills">
                                    skills
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#leadership">
                                    leadership
                                </a>
                            </li>

                            <li>
                                <a className="nav-links" href="#contact">
                                    contact
                                </a>
                            </li>

                            {/* <li>
                                <a className="nav-links" href="#">
                                    resume
                                </a>
                            </li> */}
                    
                </ul>
                
                <a className= "icon-links" href="https://github.com/vaishunall" style={{cursor: "pointer"}} onClick={console.log("link is clicked")} >
                    <FaGithub> </FaGithub>
                </a>
                <a className="icon-links" href="https://www.linkedin.com/in/vyshnavi-nalla/"  style={{cursor: "pointer"}}>
                    <FaLinkedin> </FaLinkedin>
                </a>
              
                
            </nav>
        )
    }
}

export default Header;