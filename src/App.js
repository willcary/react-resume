

function App() {
  return (
    <div className="App">
      <header>
        <div class="header-container">
          <h1>William Cary</h1>
          <p class="subtitle">Front-End Developer</p>
        </div>
      </header>

      <main>
        <div class="main-container">
          <p>Motivated front-end developer with experience designing and developing responsive websites and applications, pivoting from a background in science and education. An eager learner with strong communication skills and an affinity for solving problems.</p>

          {/* <!--Work History--> */}
          <h2 class="accent-gradient">Work History</h2>
          <div class="card">
            <div class="card-main">
              <h3>Freelance Web Developer</h3>
              <h4>September 2018 - Present</h4>
            </div>
            <p><em>Coil Technology, Inc. - Wooster, OH</em></p>
            <ul>
              <li>Developed a modern, mobile responsive website for <a href="https://www.coiltek.com/">Coiltek</a> using HTML, CSS, and Bootstrap. Recently updated this site to better meet accessibility standards and improve performance by minimizing image sizes and simplifying code.</li>
              <li>Continue to update the website with the latest products and developments.</li>
            </ul>
            <p><em>Innovative Omics - Sarasota, FL</em></p>
            <ul>
              <li>Updated WordPress site to better comply with WCAG accessibility standards.</li>
              <li>Redesigned and improved responsive layouts for select pages.</li>
            </ul>
          </div>
          <div class="card">
            <div class="card-main">
              <h3>Teacher</h3>
              <h4>August 2018 - August 2021</h4>
            </div>
            <div class="card-content">
              <p><em>Montessori School of Syracuse - Syracuse, NY</em></p>
              <ul>
                <li>Developed an extensive curriculum to teach 4th, 5th, and 6th graders how to code using Scratch, HTML, CSS, and other programs.</li>
                <li>Developed new Science lessons, activities, and assignments for a wide variety of scientific subjects to meet with national standards while still being hands-on and creative.</li>
              </ul>
            </div>
          </div>

          {/* <!--Education--> */}
          <h2 class="accent-gradient">Education</h2>
          <div class="card">
            <div class="card-main">
              <h3>Master of Science<span class="font-regular"> - Geology</span></h3>
              <h4>June 2018</h4>
            </div>
            <div class="card-details">
              <p><em>Western Washington University - Bellingham, WA</em></p>
              <p>GPA: 3.9</p>
            </div>
          </div>
          <div class="card">
            <div class="card-main">
              <h3>Bachelor of Arts<span class="font-regular"> - Geology</span></h3>
              <h4>May 2013</h4>
            </div>
            <div class="card-details">
              <p><em>The College of Wooster - Wooster, OH</em></p>
              <p>GPA: 3.6</p>
            </div>
          </div>

          {/* <!--Certificates--> */}
          <h2 class="accent-gradient">Certificates</h2>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://drive.google.com/file/d/1cXlqo4zK0Cw3iml4mVklS1cnia4MMuue/view?usp=sharing" target="_blank">The Ultimate Git Course</a></h3>
              <p><em>Code with Mosh</em></p>
            </div>
            <h4>March 2022</h4>
          </div>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/greact" target="_blank">The React Bootcamp</a></h3>
              <p><em>Scrimba</em></p>
            </div>
            <h4>September 2021</h4>
          </div>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://www.hackerrank.com/certificates/65b269a5e228" target="_blank">CSS</a></h3>
              <p><em>HackerRank</em></p>
            </div>
            <h4>September 2021</h4>
          </div>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/gresponsive" target="_blank">The Responsive Web Design Bootcamp</a></h3>
              <p><em>Scrimba</em></p>
            </div>
            <h4>August 2021</h4>
          </div>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://scrimba.com/certificate/uyeqdyTQ/gjavascript" target="_blank">The JavaScript Bootcamp</a></h3>
              <p><em>Scrimba</em></p>
            </div>
            <h4>July 2020</h4>
          </div>
          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://freecodecamp.org/certification/willcary/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</a></h3>
              <p><em>freeCodeCamp</em></p>
            </div>
            <h4>January 2019</h4>
          </div>

          <div class="cert-card">
            <div class="cert-card-content">
              <h3><a href="https://freecodecamp.org/certification/willcary/responsive-web-design" target="_blank">Responsive Web Design</a></h3>
              <p><em>freeCodeCamp</em></p>
            </div>
            <h4>October 2018</h4>
          </div>
        </div>

        <aside class="aside-container">
          {/* <!--Skills--> */}
          <section class="skills">
            <h2 class="accent-gradient">Skills</h2>
            <div class="skill-box">
              <div class="skill">HTML</div>
              <div class="skill">CSS</div>
              <div class="skill">JavaScript</div>
              <div class="skill">React</div>
              <div class="skill">Responsive Design</div>
              <div class="skill">Bootstrap</div>
              <div class="skill">SCSS</div>
              <div class="skill">Git</div>
              <div class="skill">HTML5</div>
              <div class="skill">ES6</div>
            </div>
          </section>

          {/* <!--Contact--> */}
          <section class="contact">
            <h2 class="accent-gradient">Contact</h2>
            <div class="contact-info">
              <p><strong>Email</strong></p>
              <p><a href="mailto:w.a.c.ary@gmail.com" target="_blank">w.a.c.ary@gmail.com</a></p>
            </div>
            <div class="contact-info">
              <p><strong>Phone</strong></p>
              <p>(330) 466-6693</p>
            </div>
            <div class="contact-info">
              <p><strong>Address</strong></p>
              <p>Carrboro, NC, 27510</p>
            </div>
            <div class="contact-info">
              <p><strong>Linkedin</strong></p>
              <p class="link-wrap"><a href="https://www.linkedin.com/in/william-cary/" target="_blank">Click for Profile</a></p>
            </div>
            <div class="contact-info">
              <p><strong>Website</strong></p>
              <p class="link-wrap"><a href="https://www.williamacary.com/" target="_blank">www.williamacary.com</a></p>
            </div>
          </section>

        </aside>

      </main>
    </div>
  );
}

export default App;
