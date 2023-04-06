import React, { useEffect } from "react";
import "./Uppernav.css";
import $ from 'jquery';

const Uppernav = () => {

    useEffect(() => {
        $(document).ready(function () {

            $('.collapseToggle').on('click', function() {
                    $(".sidebar").toggleClass('sidebar--Collapse');
                    $('.main').toggleClass('main--slide');	$('#toggleIcon').toggleClass('rotate');
                });
            })
        
    }, [] );

  return (
    <>
      <div className="row">
        <div className="sidebar">
          <div className="collapseToggle">
            <span id="toggleIcon" className="fa fa-chevron-left"></span>
          </div>

          <ul className="nav nav-sidebar">
            <li>
              <a href="https://www.codepen.io/erikashewan" target="_blank">
                <span className="fa fa-codepen"></span>
                <span className="menuText">Home</span>
              </a>
            </li>
            <li>
              <a href="http://www.erikashewan.com" target="_blank">
                <span className="fa fa-user-circle-o"></span>
                <span className="menuText">Profile</span>
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com/erikashewan" target="_blank">
                <span className="fa fa-twitter"></span>
                <span className="menuText">@ErikaShewan</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="main">
          Collapsible Bootstrap Dashboard.css, using CSS & JQuery. Abrupt
          changes don't exist in the physical world, so here we're using a
          variety of CSS transitions to demonstrate to the user what's happening
          in the interface. r what's happening in the interface.Collapsible
          Bootstrap Dashboard.css, using CSS & JQuery. Abrupt changes don't
          exist in theg a variety of CSS transitions to demonstrate to the user
          what's happening in the interface.
          <br />
          <br />
          <ul>
            <li>
              {" "}
              <strong>Stateful Toggle</strong>{" "}
            </li>
            <ul>
              <li>
                The cheveron rotates as the menu collapses. This tells the user
                that the meaning of the icon has changed, and that clicking on
                it again will make the button perform an action differently. In
                this case, the menu will re-expand.
              </li>
            </ul>
          </ul>
          <ul>
            <li>
              {" "}
              <strong>Animated Collapse</strong>
            </li>
            <ul>
              <li>
                The transition of the width & fading of the labels tells the
                user the menu options didn't just disappear or get cut in half.
                The menu slides to the left and the labels fade out to convey to
                the user that the menu is collapsing to give them more
                screenspace.
              </li>
            </ul>
          </ul>
        </div> */}


      </div>
    </>
  );
};

export default Uppernav;
