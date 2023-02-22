import React from 'react'

export default function Education() {
  return (
    <section>
        <h2 className="accent-gradient">Education</h2>
        <div className="card">
            <div className="card-main">
                <h3>Master of Science<span className="font-regular"> - Geology</span></h3>
                <h4>June 2018</h4>
            </div>
            <div className="card-details">
                <p><em>Western Washington University - Bellingham, WA</em></p>
                <p>GPA: 3.9</p>
            </div>
        </div>
        <div className="card">
            <div className="card-main">
                <h3>Bachelor of Arts<span className="font-regular"> - Geology</span></h3>
                <h4>May 2013</h4>
            </div>
            <div className="card-details">
                <p><em>The College of Wooster - Wooster, OH</em></p>
                <p>GPA: 3.6</p>
            </div>
        </div>
    </section>
  )
}
