import Navigation from '../components/navigation/Navigation'

function About({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="about-page">
      <section className="about-section about-intro">
        <p className="about-kicker">About Me</p>

        <h1>
          I’m Faran.
        </h1>

        <p className="about-text">
          I’m a web designer and developer who enjoys turning ideas into
          thoughtful, functional digital experiences.
        </p>

        <div className="about-facts">
          <div className="about-fact">
            <span className="about-fact-label">Based in</span>
            <span className="about-fact-value">Tehran, Iran</span>
          </div>
        </div>
      </section>

      <div className="about-divider">
        <span></span>
        <span className="about-ornament">❧</span>
        <span></span>
      </div>

      <section className="about-section about-services">
        <p className="about-kicker">What I Do</p>

        <div className="about-services-grid">
          <article className="about-service-card">
            <span>01</span>
            <h2>Web Design</h2>
            <p>
              Clean, thoughtful and visually balanced websites.
            </p>
          </article>

          <article className="about-service-card">
            <span>02</span>
            <h2>Web Development</h2>
            <p>
              Building responsive and functional digital experiences.
            </p>
          </article>

          <article className="about-service-card">
            <span>03</span>
            <h2>WordPress</h2>
            <p>
              Flexible websites with simple content management.
            </p>
          </article>

          <article className="about-service-card">
            <span>04</span>
            <h2>Creative Lab</h2>
            <p>
              Experiments, ideas and creative digital projects.
            </p>
          </article>
        </div>
      </section>

      <div className="about-divider">
        <span></span>
        <span className="about-ornament">❧</span>
        <span></span>
      </div>

      <section className="about-section about-journey">
        <p className="about-kicker">My Journey</p>

        <h2>
          I started from the deep end.
        </h2>

        <p className="about-text">
          Now I know how to build from both sides.
        </p>

        <p className="about-journey-path">
          HTML → CSS → JavaScript → React → Next.js → WordPress
        </p>
      </section>

      <div className="about-divider">
        <span></span>
        <span className="about-ornament">❧</span>
        <span></span>
      </div>

      <section className="about-section about-skills">
        <p className="about-kicker">Skills & Technologies</p>

        <div className="about-skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>WordPress</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>
     <Navigation onNavigate={onNavigate} /> 
    </main>
  )
}

export default About