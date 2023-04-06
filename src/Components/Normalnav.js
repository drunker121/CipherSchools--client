import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo  from '../Images/logo.png'
import $ from 'jquery';
import { AiFillBell } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";

const Normalnav = () => {

    useEffect (() => {
        $('.nav-toggle').click(function(e) {
  
            e.preventDefault();
            
            $("html").toggleClass("openNav");
            $(".nav-toggle").toggleClass("active");
        });
    },[]);

  return (
    <>
     <div className='bg'>
        <nav className='normal-nav'>
            <button href="#" className="hamburger open-panel nav-toggle">
            <span className="screen-reader-text">Menu</span>
            </button> 
            <div className="menun"><img src="https://vikram-hegde.github.io/photographers-page/images/Icon metro-menu.svg" alt="ham-menu"/></div>
            <div className="logo"><img src={logo} alt="logo"/></div>
            <div className='logo-text'> 
            <Link to="/" className="logotype">
                Cipher<span>Schools</span>
            </Link>
            </div>
            
            <ul className='normal-ul'>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>

            <div className='right-nav d-flex'>
            <form className="form-inline my-5 my-lg-0 d-flex search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className='normal-ul'>
                <li><AiFillBell/></li>
                <li><BsFillPeopleFill/></li>
                <li><GrScorecard/></li>
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
            {/* <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
            </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Normalnav