import React from 'react'

export default function Contact() {
  return (
    <section className='contact'>
      <h2 className='accent-gradient'>Contact</h2>
      <div className='contact-info'>
        <p>
          <strong>Portfolio</strong>
        </p>
        <p className='link-wrap'>
          <a
            href='https://www.williamacary.com/'
            target='_blank'
            rel='noreferrer'
          >
            www.williamacary.com
          </a>
        </p>
      </div>
      <div className='contact-info'>
        <p>
          <strong>Email</strong>
        </p>
        <p>
          <a href='mailto:w.a.c.ary@gmail.com' target='_blank' rel='noreferrer'>
            w.a.c.ary@gmail.com
          </a>
        </p>
      </div>
      <div className='contact-info'>
        <p>
          <strong>Phone</strong>
        </p>
        <p>(330) 466-6693</p>
      </div>
      <div className='contact-info'>
        <p>
          <strong>Address</strong>
        </p>
        <p>Columbus, OH 43214</p>
      </div>
      <div className='contact-info'>
        <p>
          <strong>Linkedin</strong>
        </p>
        <p className='link-wrap'>
          <a
            href='https://www.linkedin.com/in/william-cary/'
            target='_blank'
            rel='noreferrer'
          >
            Click for Profile
          </a>
        </p>
      </div>
    </section>
  )
}
