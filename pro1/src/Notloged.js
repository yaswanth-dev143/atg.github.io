import "./Notloged.css";
import React, { Component } from "react";
import pic from "./resources/tit.png";
import pic1 from "./resources/bel-srch-img.png";
import post1 from "./resources/post-1.png";
import views from "./resources/views.png";
import share from "./resources/share.png";
import acc1img from "./resources/acc-1-img.png";
import option from "./resources/optins.png";
import acc2img from "./resources/acc-2-img.png";
import post2 from "./resources/post-2-img.png";
import post3 from "./resources/post-3.png";
import date from "./resources/post-3-date.png";
import place from "./resources/post-3-plc.png";
import acc3img from "./resources/acc-3-img.png";
import acc4img from "./resources/acc-4-img.png";
import srch from "./resources/search-bar-icon.png";

function App() {
  return (
    <div className="mother-container col-xl col-sm col-md col-lg">
      <div className="header">
        <header className="header-1">
          <div className="header-img">
            <img src={pic} />
          </div>
          <div className="header-searchbar">
            <form>
              <img className="search-bar-icon" src={srch} />
              <input
                className="searchbar"
                type="text"
                placeholder="               Search for your favorite groups in ATG"
              />
            </form>
          </div>
          <div className="header-text">
            <p className="header-text-1">Create account</p>
            <p className="header-text-2">.It's free</p>
          </div>
        </header>
      </div>
      <div className="theme-image">
        <img src={pic1} />
      </div>
      <div className="text-on-img">
        <p className="text-on-img-1">COMPUTER ENGINNERING</p>
        <p className="text-on-img-2">142,765 Computer Engineers follow this</p>
      </div>
      <div className="mid-nav">
        <nav className="nav-1">
          <div className="nav-butt-cont">
            <button className="nav-butt">All Posts</button>
          </div>
          <div className="nav-butt-cont">
            <button className="nav-butt">Article</button>
          </div>
          <div className="nav-butt-cont">
            <button className="nav-butt">Event</button>
          </div>
          <div className="nav-butt-cont">
            <button className="nav-butt">Education</button>
          </div>
          <div className="nav-butt-cont">
            <button className="nav-butt">job</button>
          </div>
          <div className="nav-butt-1">
            <button className="-butt-1">Write a Post</button>
          </div>
          <div className="nav-butt-2">
            <button className="-butt-2">Join group</button>
          </div>
        </nav>
      </div>
      {/* ---------------------------------------post body-------------------------------------- */}
      {/* --------post-1--------- */}
      <div className="post-body">
        <div className="post-left">
          <div className="post-1">
            <div className="post-1-img">
              <img src={post1} />
            </div>
            <p className="post-1-p1">✍️Article</p>
            <div className="post-1-h3-cont">
              <h3 className="post-1-h3">
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h3>
            </div>
            <div className="post-1-option">
              <img src={option} />
            </div>
            <p className="post-1-p2">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="post-1-bottom">
              <div className="acc-1-box">
                <span className="acc -1-img">
                  <img src={acc1img} />
                </span>
                <p className="acc-1-name">Sarthak Kamra</p>
              </div>
              <div className="post-1-views">
                <p className="post-1-bt-img">
                  <img src={views} />
                  1.4k views
                </p>
              </div>
              <div className="post-1-share">
                <img className="post-1-bt-img-sh" src={share} />
              </div>
            </div>
          </div>
          {/* --------post-2--------- */}
          <div className="post-2">
            <div className="post-2-img">
              <img src={post2} />
            </div>
            <p className="post-2-p1">🔬️ Education</p>
            <div className="post-2-h3-cont">
              <h3 className="post-2-h3">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </h3>
            </div>
            <div className="post-2-option">
              <img src={option} />
            </div>
            <p className="post-2-p2">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="post-2-bottom">
              <div className="acc-2-box">
                <span className="acc-2-img">
                  <img src={acc2img} />
                </span>
                <p className="acc-2-name">Sarah West</p>
              </div>
              <div className="post-2-views">
                <p className="post-2-bt-img">
                  <img src={views} />
                  1.4k views
                </p>
              </div>
              <div className="post-2-share">
                <img className="post-2-bt-img-sh" src={share} />
              </div>
            </div>
          </div>
          {/* --------post-3--------- */}
          <div className="post-3">
            <div className="post-3-img">
              <img src={post3} />
            </div>
            <p className="post-3-p1">🗓️ Meetup</p>
            <div className="post-3-h3-cont">
              <h3 className="post-3-h3">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h3>
            </div>
            <div className="post-3-option">
              <img className="post-3-option-img" src={option} />
            </div>
            <div className="post-3-dtplc">
              <p className="post-3-dt">
                <img src={date} />
                Fri, 12 Oct, 2018
              </p>
              <p className="post-3-plc">
                <img src={place} />
                Ahmedabad, India
              </p>
            </div>
            <div className="post-3-butt-1">
              <button className="butt-1">Visit Website</button>
            </div>
            <div className="post-3-bottom">
              <div className="acc-3-box">
                <span className="acc-3-img">
                  <img src={acc3img} />
                </span>
                <p className="acc-3-name">Ronal Jones</p>
              </div>
              <div className="post-3-views">
                <p className="post-3-bt-img">
                  <img src={views} />
                  1.4k views
                </p>
              </div>
              <div className="post-3-share">
                <img className="post-3-bt-img-sh" src={share} />
              </div>
            </div>
          </div>
          {/* --------post-4--------- */}
          <div className="post-4">
            <p className="post-4-p1">🗓️ Meetup</p>
            <div className="post-4-h3-cont">
              <h3 className="post-4-h3">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h3>
            </div>
            <div className="post-4-option">
              <img className="post-4-option-img" src={option} />
            </div>
            <div className="post-4-dtplc">
              <p className="post-4-dt">
                <img src={date} />
                Innovaccer Analytics Private Ltd.
              </p>
              <p className="post-4-plc">
                <img src={place} />
                Noida, India
              </p>
            </div>
            <div className="post-4-butt-1">
              <button className="post-4butt-1">Apply on Timesjobs</button>
            </div>
            <div className="post-4-bottom">
              <div className="acc-4-box">
                <span className="acc-4-img">
                  <img src={acc4img} />
                </span>
                <p className="acc-4-name">Ronal Jones</p>
              </div>
              <div className="post-4-views">
                <p className="post-4-bt-img">
                  <img src={views} />
                  1.4k views
                </p>
              </div>
              <div className="post-4-share">
                <img className="post-4-bt-img-sh" src={share} />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------ */}

        <div className="post-right">
          <div className="side-top">
            <p className="side-top-p">
              <img src={place} />
              Noida, India
            </p>
          </div>
          <div className="side-bottom">
            <p className="side-bot-p">
              <img />
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
