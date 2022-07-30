import React from 'react'

function Experience() {
  return (
    <section className="section is-medium">
      <h1 className="title is-1 is-uppercase">Experience</h1>
      <div className="p-2">
        <h2 className="title is-3">
          Dev Academy Aotearoa, Remote — <i> Student Full Stack Developer</i>
        </h2>
        <h6 className="title is-5">April 2022 - July 2022</h6>
        <p className="subtitle is-6">
          This was a 15 week full immersion software development bootcamp that
          mimics a real-life development team as closely as possible. This was
          an amazing experience where I redeveloped old coding skills that I had
          lost over time and developed more social skills and new coding skills.
          I grew more confident in my talking and my coding.
        </p>
        <p className="subtitle is-6">
          Main Languages used:{' '}
          <strong>
            Knex, React.js, Handlebars, Express, JS, Jest, HTML, CSS
          </strong>
        </p>
        <p className="subtitle is-6">
          Final Project - <i>The Book Exchange </i>- this is a website that the
          user can sign in/out and exchange books with other users based on how
          many tokens they have. They can then gain more tokens by adding books.
          In this project I individually implemented image uploads by learning
          multer, so that the image then saves into our database and chosen
          folder to be viewable through-out the website.
          <p>
            <a
              className="is-underlined"
              href=" https://the-book-exchange-mako.herokuapp.com/"
            >
              https://the-book-exchange-mako.herokuapp.com/
            </a>
          </p>
        </p>
      </div>

      <div className="p-2">
        <h2 className="title is-3">
          Referral Coordination Center, Waikato Hospital —{' '}
          <i> Casual Administrator</i>
        </h2>
        <h6 className="title is-5">December 2015 - Current</h6>
        <div className="content is-medium">
          <ul className="subtitle is-6  ">
            <li>
              Practiced efficient and accurate data entry of Referrals from GPs
              and Doctors.
            </li>

            <li>
              Ability to communicate effectively within a team to ensure all
              parts of the job are covered.
            </li>
            <li>
              Effective problem solving to solve Non-Processed Referrals Audits
              to maintain current Referrals in our system.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
