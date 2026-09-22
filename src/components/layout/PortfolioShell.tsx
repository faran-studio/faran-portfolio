
import Navigation from '../navigation/Navigation'
import faranProfile from '../../assets/faran-profile(1).png'

function PortfolioShell({
  children,
  onNavigate,
}: {
  children: React.ReactNode
  onNavigate: (page: string) => void
}) {
  return (
    <main className="portfolio">
      <div className="portfolio-layout">

        <div className="portfolio-frame">

          <aside className="profile-panel">

            <div className="profile-image">
              <img
                src={faranProfile}
                alt="Faran Profile"
              />
            </div>

            <h1>Faran</h1>

            <p className="profile-title">
              Web Designer &amp; Developer
            </p>

            <div className="social-links">
              {/* Social links stay here */}
            </div>

            <button
              className="download-cv-button"
              type="button"
            >
              Download CV
            </button>

          </aside>

          <section className="content-panel">
            {children}
          </section>

        </div>

        <Navigation onNavigate={onNavigate} />

      </div>
    </main>
  )
}

export default PortfolioShell