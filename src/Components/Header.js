import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
function Header() {
  const nagivate = useNavigate()
  const toggleBurger = () => {
    let burgerIcon = document.getElementsByClassName('navbar-burger')[0]
    let dropMenu = document.getElementById('navbarMenuHeroC')
    burgerIcon.classList.toggle('is-active')
    dropMenu.classList.toggle('is-active')
  }

  return (
    <header className="navbar ">
      {/* <div className="container"> */}
      <div className="navbar-brand">
        <div className="navbar-item">
          <a className="is-size-3 " href="/">
            {' '}
            JellyBean
          </a>
        </div>
        <span
          className="navbar-burger "
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
        <div className="navbar-end content is-medium">
          <a className="navbar-item  " href="/">
            Home
          </a>
          <a
            className="navbar-item is-medium"
            href="https://github.com/FireDivine"
          >
            <FaGithub className="m-2 icon" />
          </a>
          <a
            className="navbar-item"
            href="https://www.linkedin.com/in/jillian-eccles-bb9506a6/"
          >
            <FaLinkedin className=" m-2 icon" />
          </a>

          <span
            className="navbar-item p-2 "
            onClick={() => {
              window.open(
                'doc/CV2023.pdf'
                // '_blank',
                // 'fullscreen=yes'
              )
              //   return false
            }}
            // href="/cv"
            //  onClick={() => {
            // ;
            //nagivate('/contact')
            //  }}
          >
            <FaDownload className="icon m-2 is-small" />
            CV
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
