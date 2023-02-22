import React from 'react'
import Work from './Work'
import OpenSource from './OpenSource'
import Education from './Education'
import Certificates from './Certificates'

export default function MainContainer() {
  return (
    <div className='main-container'>
      <p>
        Motivated front-end developer pivoting from a background in science and
        education with experience designing and developing responsive websites
        and web applications.
      </p>
      <Work />
      <OpenSource />
      <Education />
      <Certificates />
    </div>
  )
}
