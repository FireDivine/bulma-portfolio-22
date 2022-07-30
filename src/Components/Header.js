import React from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
function Header() {
  const toggleBurger = () => {
    let burgerIcon = document.getElementsByClassName('navbar-burger')[0]
    let dropMenu = document.getElementById('navbarMenuHeroC')
    burgerIcon.classList.toggle('is-active')
    dropMenu.classList.toggle('is-active')
  }

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="/"> JellyBean</a>
          </div>
          <span
            className="navbar-burger"
            data-target="navbarMenuHeroC"
            onClick={toggleBurger}
            id="burger"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active" href="/">
              Home
            </a>
            <a className="navbar-item" href="https://github.com/FireDivine">
              <FaGithub />
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/jillian-eccles-bb9506a6/"
            >
              <FaLinkedin />
            </a>
            <span className="navbar-item">
              <button
                className="button is-success is-inverted px-2"
                // onClick={() => {
                //   window.open(
                //     'doc/CV_july_2202 (6)',
                //     '_blank',
                //     'fullscreen=yes'
                //   )
                //   return false
                // }}
              >
                <FaDownload />
                <span>Download CV</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
