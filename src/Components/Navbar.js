import React, { useEffect } from "react";
import './Home.css';
// import $ from 'jquery';
import Body from "./Body";
import { MdDashboard, MdHome, MdTrendingUp, MdFeedback, MdTour } from "react-icons/md";
import { SiBookstack, SiDiscord, SiSpringCreators } from "react-icons/si";
import { FaUserAlt} from "react-icons/fa";

const Navbar = () => {

   

  return (
    <>
      <div className="primary-nav">
        <nav role="navigation" className="menu">
          <div className="overflow-container">
            <ul className="menu-dropdown">    
            <li>
                <a href="#">Home</a>
                <span className="icon">
                    <MdHome className="fa fa-dashboard"/>
                  {/* <i className="fa fa-dashboard"></i> */}
                </span>
              </li>
              <li>
                <a href="#">Courses</a>
                <span className="icon">
                  <SiBookstack/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Trending</a>
                <span className="icon">
                    <MdTrendingUp/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Following</a>
                <span className="icon">
                    <FaUserAlt/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Dashboard</a>
                <span className="icon">
                    <MdDashboard/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Discord</a>
                <span className="icon">
                    <SiDiscord/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Creator Access</a>
                <span className="icon">
                <SiSpringCreators/>
                  <i className="fa fa-dashboard"></i>
                </span>
              </li>
              <li>
                <a href="#">Feedback</a>
                <span className="icon">
                <MdFeedback/>
                  <i className="fa fa-heart"></i>
                </span>
              </li>

              <li>
                <a href="#">Tour</a>
                <span className="icon">
                <MdTour/>
                  <i className="fa fa-envelope"></i>
                </span>
              </li>
              <li>
                <a href="#"> .</a>
                <span className="icon">
                {/* <MdTour/> */}
                  <i className="fa fa-envelope"></i>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Body/>

      {/* <div className="new-wrapper">
        <div id="main">
          <div id="main-contents">
            <h1>Multi-level Side Navigation</h1>

            <p className="intro">
              <strong>
                This is a multi-level side navigation pattern with hover and
                push
              </strong>
              . Hovering over the menu will reveal its lables and clicking the
              hamburger icon pins the menu open.
            </p>

            <h2>Checkbox Hack</h2>

            <p>
              I started by using the checkbox hack but ran into its limitations
              when I tried to implement the 'push' behaviour. It works for the
              secondary menus but the input element and its corresponding label
              can really only affect the adjacent element (i.e. I couldn't
              target the page container to push it over). So, I added...
            </p>

            <h2>A Touch of jQuery</h2>
            <p>
              I'm sure this could be done with vanilla javascript, but that is
              not my strong suit. So here we are. You might be thinking, "Why
              not just use JQuery for all of the functionality?" Well, you can!
              Fork it and go nuts! Maybe drop me a line if you do.
            </p>

            <p className="small">
              <strong>This is small text</strong>. Lorem Ipsum is simply dummy
              text from the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularized in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
