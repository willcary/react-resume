import React from 'react'
import gitImage from "../../images/Cary-Git-Certificate.pdf"

export default function Certificates() {
  return (
    <section>
        <h2 className="accent-gradient">Certificates</h2>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href={gitImage} target="_blank" rel="noreferrer">The Ultimate Git Course</a></h3>
                <p><em>Code with Mosh</em></p>
            </div>
            <h4>March 2022</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/greact" target="_blank" rel="noreferrer">The React Bootcamp</a></h3>
                <p><em>Scrimba</em></p>
            </div>
            <h4>September 2021</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://www.hackerrank.com/certificates/65b269a5e228" target="_blank" rel="noreferrer">CSS</a></h3>
                <p><em>HackerRank</em></p>
            </div>
            <h4>September 2021</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/gresponsive" target="_blank" rel="noreferrer">The Responsive Web Design Bootcamp</a></h3>
                <p><em>Scrimba</em></p>
            </div>
            <h4>August 2021</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/gjavascript" target="_blank" rel="noreferrer">The JavaScript Bootcamp</a></h3>
                <p><em>Scrimba</em></p>
            </div>
            <h4>July 2020</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://freecodecamp.org/certification/willcary/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">JavaScript Algorithms and Data Structures</a></h3>
                <p><em>freeCodeCamp</em></p>
            </div>
            <h4>January 2019</h4>
        </div>
        <div className="cert-card">
            <div className="cert-card-content">
                <h3><a href="https://freecodecamp.org/certification/willcary/responsive-web-design" target="_blank" rel="noreferrer">Responsive Web Design</a></h3>
                <p><em>freeCodeCamp</em></p>
            </div>
            <h4>October 2018</h4>
        </div>
    </section>
  )
}
