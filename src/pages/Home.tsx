
import Navigation from '../components/navigation/Navigation'
import Experiments from './Experiments'

function Home() {
  return (
    <main className="portfolio">
      <div className="portfolio-layout">

        <div className="portfolio-frame">

          <aside className="profile-panel">

            <div className="profile-image"></div>

            <h1>Faran</h1>

            <p className="profile-title">
              Web Designer &amp; Developer
            </p>

            <div className="social-links">

              <a aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                  <path d="M8.8 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.5.6c.7 1.2 1.6 2 2.8 2.7l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.2-2.9-.8-5.1-3-5.9-5.9-.2-.5-.1-1.1.2-1.5Z" />
                </svg>
              </a>

              <a aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 19c-4 1.3-4-2-5-2m10 4v-3.1c0-.9-.3-1.5-.8-2 2.7-.3 5.5-1.3 5.5-5.8 0-1.3-.5-2.3-1.2-3.1.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.2 1.6 5.2 2 5.2 2c-.6 1.6-.2 2.8-.1 3.1C4.4 5.9 4 6.9 4 8.2 4 12.7 6.8 13.7 9.5 14c-.3.3-.5.7-.7 1.3-.6.3-2.2.8-3.8-.9" />
                </svg>
              </a>

              <a aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4l14 16M19 4L5 20" />
                </svg>
              </a>

            </div>

            <button
              className="download-cv-button"
              type="button"
            >
              Download CV
            </button>

          </aside>

          <section className="content-panel">
            <Experiments />
          </section>

        </div>

        <Navigation />

      </div>
    </main>
  )
}

export default Home
