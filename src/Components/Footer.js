import React from 'react'

function Footer() {
  return (
    <div>
      <nav className="tabs is-large is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li>
              <a href="/about-me">About me</a>
            </li>
            <li>
              <a href="/exp">Experience</a>
            </li>
            <li>
              <a href="/edu">Education</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Footer
