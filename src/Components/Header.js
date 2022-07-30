import React from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">JellyBean</div>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">Home</a>
            <a className="navbar-item">
              <FaGithub />
            </a>
            <a className="navbar-item">
              <FaLinkedin />
            </a>
            <span className="navbar-item">
              <a className="button is-success is-inverted px-2">
                <FaDownload />
                <span>Download CV</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
