import React from 'react'

function About() {
  return (
    <div className="column">
      <section className="section is-medium">
        <h1 className="title is-1 is-uppercase">About Me</h1>
        <h2 className="subtitle">
          I am a Full Stack Web Developer who loves cats and being bad at video
          games. I have finally made the move to look for a developer job now as
          I feel like I have more confidence in my coding ability. I've been
          around tech since my high school days and I highly enjoyed every
          second of it. I love to see my projects come alive as I code.
        </h2>
        <br />
        <br />
        <h3 className="title is-3 is-uppercase">Some Hobbies</h3>
        <h4 className="subtitle">
          <ul>
            <li>Amigurumi - the crochet of toys</li>
            <img
              style={{
                'border-radius': '50%',
                width: '15% !important',
                padding: '5px',
              }}
              src="images/panda_front.jpg"
              alt="panda boi front"
            />
            <img
              style={{
                'border-radius': '50%',
                width: '15% !important',
                padding: '5px',
              }}
              src="images/panda_side.jpg"
              alt="panda boi side"
            />
            <li>Baking</li>
            <li>movies</li>
            <li>PC Gaming / hanging out with friends online</li>
          </ul>
        </h4>
      </section>
    </div>
  )
}

export default About
