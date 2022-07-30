import React from 'react'

function Card(props) {
  return (
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">{props.title}</p>
        <p class="subtitle">{props.languages}</p>
        <div class="content">
          <p>{props.content}</p>
          <a
            className="button mr-3 is-small   is-success is-rounded"
            href={props.link}
          >
            View WebPage
          </a>

          <a
            className="button is-small is-light is-rounded"
            href={props.codeLink}
          >
            View Code
          </a>
        </div>
      </article>
    </div>
  )
}

export default Card
