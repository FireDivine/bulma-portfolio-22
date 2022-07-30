import React from 'react'

function Education() {
  return (
    <section className="section is-medium">
      <h1 className="title is-1 is-uppercase">Education</h1>
      <div className="py-2">
        <h2 className="title is-3"> Dev Academy Aotearoa </h2>
        <h6 className="title is-5">April 2022 - July 2022 </h6>
        <h6 className="title is-5">Online cohort </h6>
        <p className=" subtitle is-6">
          Level 6 Web Development Training Scheme
        </p>
      </div>
      <div className="py-2">
        <h2 className="title is-3 ">
          Bachelor of Science: Majoring, Computer Science
        </h2>
        <h6 className="title is-5"> March 2015 - May 2019 </h6>
        <h6 className="title is-5"> The University of Waikato, Hamilton </h6>
        <p className=" subtitle is-6">
          Completed a Prototype Project for the Hamilton City Libraries
          Mentoring Group. This was done with 5 other people for one of my
          papers. The prototype had a php-myadmin server and was web-based. It
          included a booking system, client history and statistics for tracking.
          I helped manage the group and hand in the completed Documents that we
          needed for each of our milestones. We all helped code a section of the
          prototype.
        </p>
        <p className=" subtitle is-6">
          Languages used: <strong>SQL,PHP,HTML,CSS.</strong>
        </p>
        <p className="subtitle is-6">
          <a
            className="is-underlined"
            href="https://github.com/ashton-lye/straightupit"
          >
            https://github.com/ashton-lye/straightupit
          </a>
        </p>
      </div>
    </section>
  )
}

export default Education
