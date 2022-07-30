import React from 'react'
import Card from './Card'

function Projects() {
  return (
    <div>
      <h1 className="title is-1">Projects</h1>
      <h2 className="title is-4">Free Time Projects</h2>
      <div class="tile is-ancestor">
        <Card
          title="Gatsby Portfolio"
          languages="Gatsby, node, react"
          content="This was one on my trails while making a portfolio that i was happy with."
          link="https://gatsby-portfoilo.herokuapp.com/"
          codeLink="https://github.com/FireDivine/gatsby-portfoilo"
        />

        <Card
          title="Two Crafty Chicks"
          languages="React, knex, Bootstrap"
          content="This is a project that was designed to keep a collection of stampin up items for my mother"
          link=""
        />
      </div>
      <h2 className="title is-4">Dev Academy Projects</h2>
      <div class="tile is-ancestor ">
        <div className="is-vertical is-8">
          <div className="tile">
            <Card
              title="ThunderBirds"
              link="https://thunderbirds-mako.herokuapp.com/birds"
            />
            <Card
              title="Pink Zebras"
              link="https://pink-zebra-zoo.herokuapp.com/ "
            />

            <Card
              title="WATPAs"
              link="https://the-best-gift-app.herokuapp.com/"
            />
          </div>
          <div className="tile">
            <Card
              title="Tipsy Turtles"
              link="https://tipsy-turtles.herokuapp.com/ "
            />

            <Card title="Cat Norris" link="https://cat-norris.herokuapp.com/" />
          </div>
        </div>
      </div>
      <div class="tile is-ancestor ">
        <Card
          title="The Book Exchange"
          languages="React, Redux, multer, react-modal, knex"
          content={
            'Final Group Project of Dev Academy. \nThis is a website that the user can sign in/out and exchange books with other users based on how many tokens they have. They can then gain more tokens by adding books. In this project I individually implemented image uploads by learning multer, so that the image then saves into our database and chosen folder to be viewable through-out the website.'
          }
          link="https://the-book-exchange-mako.herokuapp.com/"
        />
      </div>
    </div>
  )
}

export default Projects
