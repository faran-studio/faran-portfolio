 function Resume() {
  return (
    <main className="resume-page">

      <header className="resume-header">
        <p className="resume-kicker">Resume</p>
        <h1>My <span>Journey.</span></h1>
        <p className="resume-intro">
          A growing path through web design, development, coding, and creative work.
        </p>
      </header>

      <div className="resume-divider">
        <span></span>
        <b>❧</b>
        <span></span>
      </div>

      <section className="resume-grid">

        {/* LEFT COLUMN */}
        <div className="resume-left">

          <section className="resume-section">
            <h2>Learning Path</h2>

            <div className="resume-timeline">

              <article className="resume-timeline-item">
                <div className="resume-timeline-date">
                  <strong>01</strong>
                  <span>Web Foundations</span>
                </div>

                <div className="resume-timeline-content">
                  <h3>HTML &amp; CSS</h3>
                  <p>
                    Building a strong understanding of structure,
                    layout, typography, spacing, and responsive design.
                  </p>
                </div>
              </article>

              <article className="resume-timeline-item">
                <div className="resume-timeline-date">
                  <strong>02</strong>
                  <span>Development</span>
                </div>

                <div className="resume-timeline-content">
                  <h3>JavaScript &amp; React</h3>
                  <p>
                    Learning to turn interfaces into interactive,
                    reusable, and structured web applications.
                  </p>
                </div>
              </article>

              <article className="resume-timeline-item">
                <div className="resume-timeline-date">
                  <strong>03</strong>
                  <span>Tools &amp; Workflow</span>
                </div>

                <div className="resume-timeline-content">
                  <h3>Git, GitHub &amp; VS Code</h3>
                  <p>
                    Developing a professional workflow for building,
                    testing, versioning, and maintaining projects.
                  </p>
                </div>
              </article>

            </div>
          </section>

          <section className="resume-section resume-experience">
            <h2>Experience</h2>

            <div className="resume-experience-card">
              <span className="resume-card-number">01</span>
              <div>
                <h3>Web Design &amp; Development</h3>
                <p>
                  Practical project work across personal websites,
                  portfolio systems, WordPress, and modern frontend development.
                </p>
              </div>
            </div>

            <div className="resume-experience-card">
              <span className="resume-card-number">02</span>
              <div>
                <h3>Creative Projects</h3>
                <p>
                  Exploring visual systems, interaction, motion,
                  and digital experiences through independent projects.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <aside className="resume-right">

          <section className="resume-section">
            <h2>Design <span>Skills</span></h2>

            <div className="resume-skills">

              <div className="resume-skill">
                <div>
                  <span>Web Design</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '88%' }}></span>
                </div>
              </div>
<div className="resume-skill">
                <div>
                  <span>UI / UX</span>
                  <small>Developing</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '78%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>Responsive Design</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '84%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>Typography &amp; Layout</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '86%' }}></span>
                </div>
              </div>

            </div>
          </section>

          <section className="resume-section">
            <h2>Coding <span>Skills</span></h2>

            <div className="resume-skills">

              <div className="resume-skill">
                <div>
                  <span>HTML</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '92%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>CSS</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '90%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>JavaScript</span>
                  <small>Growing</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '72%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>React</span>
                  <small>Growing</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '65%' }}></span>
                </div>
              </div>

              <div className="resume-skill">
                <div>
                  <span>Git &amp; GitHub</span>
                  <small>Strong</small>
                </div>
                <div className="resume-skill-track">
                  <span style={{ width: '82%' }}></span>
                </div>
              </div>

            </div>
          </section>

          <section className="resume-section">
            <h2>Knowledge</h2>

            <div className="resume-tags">
              <span>WordPress</span>
              <span>Elementor</span>
              <span>Next.js</span>
              <span>VS Code</span>
              <span>GitHub</span>
              <span>Responsive Design</span>
              <span>Component Thinking</span>
              <span>AI-assisted Workflow</span>
            </div>
          </section>

        </aside>

      </section>

    </main>
  )
}

export default Resume



