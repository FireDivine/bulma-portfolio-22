import React, { useState } from 'react'

function Footer() {
  const [active, setActive] = useState('is-active')
  return (
    <div>
      <nav className="tabs is-boxed is-fullwidth">
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
      <div className="content has-text-centered">Jellybean 2022</div>
    </div>
  )
}

export default Footer
