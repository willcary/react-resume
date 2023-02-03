import React from 'react'

export default function Work() {
  return (
    <section>
      <h2 className='accent-gradient'>Work History</h2>
      <div className='card'>
        <div className='card-main'>
          <h3>Freelance Web Developer</h3>
          <h4>September 2018 - Present</h4>
        </div>
        <p>
          <em>Coil Technology, Inc. - Wooster, OH</em>
        </p>
        <ul>
          <li>
            Currently developing software to integrate with loop control
            systems.
          </li>
          <li>
            Developed a modern, mobile responsive website for{' '}
            <a href='https://www.coiltek.com/'>Coiltek</a> using HTML, CSS, and
            Bootstrap. Recently updated this site to better meet accessibility
            standards and improve performance by minimizing image sizes and
            refactoring code.
          </li>
          <li>
            Continue to update the website with the latest products and
            developments.
          </li>
        </ul>
        <p>
          <em>Innovative Omics - Sarasota, FL</em>
        </p>
        <ul>
          <li>
            Updated WordPress site to better comply with WCAG accessibility
            standards.
          </li>
          <li>
            Implemented popup forms to collect user information and create
            business leads.
          </li>
          <li>Redesigned and improved responsive layouts for select pages.</li>
          <li>
            Continue to edit, update, and add pages for new software and
            datasets.
          </li>
        </ul>
      </div>
      <div className='card'>
        <div className='card-main'>
          <h3>Teacher</h3>
          <h4>August 2018 - August 2021</h4>
        </div>
        <div className='card-content'>
          <p>
            <em>Montessori School of Syracuse - Syracuse, NY</em>
          </p>
          <ul>
            <li>
              Developed an extensive curriculum to teach 4th, 5th, and 6th
              graders how to code using Scratch, HTML, CSS, and other programs.
            </li>
            <li>
              Developed new Science lessons, activities, and assignments for a
              wide variety of scientific topics.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
