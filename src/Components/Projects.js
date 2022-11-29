import React from 'react'
import Card from './Card'

function Projects() {
  return (
    <div>
      <h1 className="title is-1">Projects</h1>
      <h2 className="title is-4">Free Time Projects</h2>

      <div class="tile is-ancestor">
        <Card
          title="BookDatabase"
          languages="PHP, MySQL, Bootstrap"
          codeLink="https://github.com/FireDivine/BooksDatabase"
          content="This was made in early 2020s after I graduated from university. This was my frist project i tryed to work on. it has mostly full CRUD features."
        />
        <Card
          title="Gatsby Portfolio"
          languages="Gatsby, node, React"
          content="This was one on my trails while making a portfolio that i was happy with."
          link="https://gatsby-portfoilo.herokuapp.com/"
          codeLink="https://github.com/FireDivine/gatsby-portfoilo"
        />

        <Card
          title="Two Crafty Chicks"
          languages="Full Stack, React, Knex, Bootstrap, Express ..."
          content="This is a project that was designed to keep a collection of stampin up items for my mother"
          link=""
          codeLink="https://github.com/FireDivine/Two-Crafty-Chicks_v1"
        />

        <Card
          title="Dashboard"
          languages="MUI, React, nivo, full Calender"
          content=" Code along with youtube video - React Admin Dashboard by EdRoh"
          link="https://firedivine.github.io/PraticeDashboard/"
          codeLink="https://github.com/FireDivine/PraticeDashboard"
        />
      </div>
      <h2 className="title is-4">Dev Academy Projects</h2>
      <div className="tile is-ancestor">
        <Card
          title="Foundations Blog"
          languages="Bulma, HTML, CSS, JS"
          link="https://firedivine.github.io/"
          codeLink="https://github.com/FireDivine/FireDivine.github.io"
          content="This was our 'Frist' Website blog. it is also made with bulma. The blog has contents of all my foundations learnings and reflections"
        />
      </div>
      <div class="tile is-ancestor ">
        <Card
          title="ThunderBirds"
          languages="Filesystem, Express, SSR"
          link="https://thunderbirds-mako.herokuapp.com/birds"
          content="Project 1. This project was made on the second week of BootCamp in a group of four. it displays Birds and their details, which are editable. "
        />
        <Card
          title="Pink Zebras"
          languages="Knex, Express, Handlebars , SSR"
          link="https://pink-zebra-zoo.herokuapp.com/ "
          content="Project 2. This was made in the third week fo the bootcamp. you can add zoo animals, zooKeepers and enclosers. My focus on this project was mostly the CSS. "
        />

        <Card
          title="WUTPA"
          languages="React, React-Router-Dom, CSR"
          link="https://the-best-gift-app.herokuapp.com/"
          content="Project 3. This project was made after the introduction to react. the most changeling part that we as a group incounted was the dropdown box due to it being our frist week with states. the Vibes of the group overall was wonderful."
        />

        <Card
          title="Tipsy Turtles"
          languages="TheCocktailAPI, Full Stack without Redux"
          link="https://tipsy-turtles.herokuapp.com/ "
          content="Project 4. Made with a External API. shows 3 random cocktails (image and name). has search feature that can display the recipe of the drink."
        />

        <Card
          title="Cat Norris"
          languages="Full Stack, React, Redux, TheCatAPI, chucknorris API, CSS, Express ..."
          link="https://cat-norris.herokuapp.com/"
          content="Project 5. Made with 2 external apis. this was to soildifty our knowledge of everything we had learned so far"
        />
      </div>
      <div class="tile is-ancestor ">
        <Card
          title="The Book Exchange"
          languages="React, Redux, Multer, React-Modal, Knex"
          content={`Final Group Project of Dev Academy. \nThis is a website that the user can sign in/out and exchange books with other users based on how many tokens they have. They can then gain more tokens by adding books. In this project I individually implemented image uploads by learning multer, so that the image then saves into our database and chosen folder to be viewable through-out the website.`}
          link="https://the-book-exchange-mako.herokuapp.com/"
          codeLink="https://github.com/FireDivine/the-book-exchange"
        />
      </div>
    </div>
  )
}

export default Projects
