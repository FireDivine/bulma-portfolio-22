import React from 'react'
import styles from '../sass/home.module.scss'

function Home() {
  return (
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column ">
          <img
            id="lola"
            src="images/discord_me.jpg"
            alt="avatar of jillian"
            className={styles.avatar}
          />

          <h1 className="title is-1">Jillian Eccles</h1>
          <h2 className="subtitle is-3">Full Stack Web Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
